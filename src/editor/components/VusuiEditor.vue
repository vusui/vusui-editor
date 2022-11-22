<!--
 * @Description: VusuiEditor编辑组件
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-18 23:50:12
 * @LastEditors: linp linp@epsoft.com.cn
 * @LastEditTime: 2022-11-22 09:43:21
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
-->
<script lang="ts">
export default {
  name: 'VusuiEditor'
};
</script>
<script setup lang="ts">
import { ref, watch, nextTick, PropType, onMounted, onUnmounted } from 'vue';
import Quill, { QuillOptionsStatic, RangeStatic, Sources } from 'quill';
import Delta from 'quill-delta';
// 工具栏
import { toolbarOptions, ToolbarOptions } from './options';
// quill样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import './VusuiEditor.scss';

export type Module = { name: string; module: any; options?: any };

// 定义组件参数
const props = defineProps({
  // 编辑器内容
  content: {
    type: [String, Object] as PropType<string | Delta>,
    default: ''
  },
  // 编辑器内容类型
  contentType: {
    type: String as PropType<'delta' | 'html' | 'text'>,
    default: 'html',
    validator: (value: string) => {
      return ['delta', 'html', 'text'].includes(value);
    }
  },
  // 编辑器主题
  theme: {
    type: String as PropType<'snow' | 'bubble'>,
    default: 'snow',
    validator: (value: string) => {
      return ['snow', 'bubble'].includes(value);
    }
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: true
  },
  // 只读模式
  readOnly: {
    type: Boolean,
    default: false
  },
  // 占位符
  placeholder: {
    type: String,
    default: '请输入内容...'
  },
  // 工具栏
  toolbar: {
    type: [String, Array, Object],
    required: false,
    validator: (value: string | unknown) => {
      if (typeof value === 'string' && value !== '') {
        return value.charAt(0) === '#'
          ? true
          : Object.keys(toolbarOptions).indexOf(value) !== -1;
      }
      return true;
    }
  },
  // 自定义模块
  modules: {
    type: Object as PropType<Module | Module[]>,
    required: false
  },
  // 配置参数
  options: {
    type: Object as PropType<QuillOptionsStatic>,
    required: false
  },
  // 编辑器默认高度
  height: {
    type: Number,
    default: 400
  },
  // 显示拖拽高度
  showDrag: {
    type: Boolean,
    default: true
  }
});

// emit
const emit = defineEmits([
  'textChange',
  'selectionChange',
  'editorChange',
  'ready',
  'focus',
  'blur',
  'update:content'
]);

// editor 实例
const editor = ref<any>(null);
const editorDrag = ref<any>(null);

// 编辑焦点事件
const editorFocus = ref<boolean>(false);

// state
const state: any = {
  options: {},
  quill: null
};

// 保存鼠标最后移动的位置（Y轴）
const dragState: any = {
  // 鼠标开始移动的位置（Y轴）
  startMouseTop: 0,
  // 鼠标最后移动的位置（Y轴）
  endMouseTop: 0
};

// 文本框 wrap 最大/小高度
const TextAreaWrap: any = {
  MaxHeight: 800,
  MinHeight: 100
};

// 监听编辑器是否禁用
watch(
  () => props.disabled,
  (val) => {
    if (state.quill) {
      state.quill.enable(!val);
    }
  }
);

// 监听焦点变化
watch(editorFocus, (focus) => {
  if (focus) {
    emit('focus', editor);
  } else {
    emit('blur', editor);
  }
});

// 页面加载完成后执行
onMounted(() => {
  initialize();
});

// 销毁完毕执行
onUnmounted(() => {
  state.quill = null;
});

// 合并参数
const mergeOptions = (): any => {
  const clientOptions: any = {};
  if (props.theme) {
    clientOptions.theme = props.theme;
  }
  if (props.placeholder) {
    clientOptions.placeholder = props.placeholder;
  }
  if (props.readOnly || props.options?.readOnly) {
    clientOptions.readOnly = props.readOnly;
    // readOnly模式下，内容与占位符会重叠，需要清空placeholder
    clientOptions.placeholder = props.content
      ? ''
      : props.options?.placeholder || props.placeholder;
  }
  if (props.toolbar && props.toolbar !== '') {
    clientOptions.modules = {
      toolbar: (() => {
        if (typeof props.toolbar === 'object') {
          return props.toolbar;
        } else if (typeof props.toolbar === 'string') {
          const str = props.toolbar as string;
          return str.charAt(0) === '#'
            ? props.toolbar
            : toolbarOptions[props.toolbar as keyof ToolbarOptions];
        }
        return;
      })()
    };
  }
  if (props.modules) {
    const modules = (() => {
      const modulesOption: { [key: string]: any } = {};
      if (Array.isArray(props.modules)) {
        for (const module of props.modules) {
          modulesOption[module.name] = module.options ?? {};
        }
      } else {
        modulesOption[props.modules.name] = props.modules.options ?? {};
      }
      return modulesOption;
    })();
    clientOptions.modules = Object.assign({}, clientOptions.modules, modules);
  }
  return Object.assign({}, props.options, clientOptions);
};

// 初始化编辑器
const initialize = () => {
  if (!editor.value) {
    return false;
  }

  // 设置参数
  state.options = mergeOptions();

  // 注册模块
  if (props.modules) {
    if (Array.isArray(props.modules)) {
      for (const module of props.modules) {
        Quill.register(`modules/${module.name}`, module.module);
      }
    } else {
      Quill.register(`modules/${props.modules.name}`, props.modules.module);
    }
  }

  // 创建新的Quill实例
  state.quill = new Quill(editor.value, state.options);

  // 设置编辑器内容
  setContents(props.content);

  // 设置事件处理
  state.quill.on('text-change', handleTextChange);
  state.quill.on('selection-change', handleSelectionChange);
  state.quill.on('editor-change', handleEditorChange);

  // 当主题更改时，删除编辑器类
  if (props.theme !== 'bubble') {
    editor.value?.classList?.remove('ql-bubble');
  }
  if (props.theme !== 'snow') {
    editor.value?.classList?.remove('ql-snow');
  }

  // 修复了点击Quill工具栏被检测为模糊事件的问题
  state.quill
    .getModule('toolbar')
    ?.container.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault();
    });

  // Emit ready event
  emit('ready', state.quill);
};

// 处理文本变化
const handleTextChange: any = (
  delta: Delta,
  oldContents: Delta,
  source: Sources
) => {
  // 内容更新
  emit('update:content', getContents());
  emit('textChange', { delta, oldContents, source });
};

// 处理选择变化
const handleSelectionChange: any = (
  range: RangeStatic,
  oldRange: RangeStatic,
  source: Sources
) => {
  editorFocus.value = state.quill?.hasFocus() ? !0 : !1;
  emit('selectionChange', { range, oldRange, source });
};

// 处理编辑器变化
const handleEditorChange: any = (
  ...args:
    | [name: 'text-change', delta: Delta, oldContents: Delta, source: Sources]
    | [
        name: 'selection-change',
        range: RangeStatic,
        oldRange: RangeStatic,
        source: Sources
      ]
) => {
  if (args[0] === 'text-change')
    emit('editorChange', {
      name: args[0],
      delta: args[1],
      oldContents: args[2],
      source: args[3]
    });
  if (args[0] === 'selection-change')
    emit('editorChange', {
      name: args[0],
      range: args[1],
      oldRange: args[2],
      source: args[3]
    });
};

// 获取编辑器
const getEditor = (): Element => {
  return editor.value as Element;
};

// 获取拖拽元素
const getEditorDrag = (): Element => {
  return editorDrag.value as Element;
};

// 获取工具栏
const getToolbar = (): Element => {
  return state.quill?.getModule('toolbar')?.container;
};

// 获取quill
const getQuill = (): any => {
  if (state.quill) {
    return state.quill;
  } else {
    throw `Quill加载失败`;
  }
};

// 获取编辑器内容
const getContents = (index?: number, length?: number) => {
  if (props.contentType === 'html') {
    return getHTML();
  } else if (props.contentType === 'text') {
    return getText(index, length);
  }
  return state.quill?.getContents(index, length);
};

// 设置编辑器内容
const setContents = (content: string | Delta, source: Sources = 'api') => {
  if (props.contentType === 'html') {
    setHTML(content as string);
  } else if (props.contentType === 'text') {
    setText(content as string, source);
  } else {
    state.quill?.setContents(content as Delta, source);
  }
};

// 获取文本内容
const getText = (index?: number, length?: number): string => {
  return state.quill?.getText(index, length) ?? '';
};

// 设置文本内容
const setText = (text: string, source: Sources = 'api') => {
  state.quill?.setText(text, source);
};

// 获取HTML内容
const getHTML = (): string => {
  return state.quill?.root.innerHTML ?? '';
};

// 设置HTML内容
const setHTML = (html: string) => {
  if (state.quill) {
    state.quill.root.innerHTML = html;
  }
};

// 粘贴HTML内容
const pasteHTML = (html: string, source: Sources = 'api') => {
  const delta = state.quill?.clipboard.convert(html as {});
  if (delta) {
    state.quill?.setContents(delta, source);
  }
};

// 重新初始化
const reinit = () => {
  nextTick(() => {
    initialize();
  });
};

// 处理鼠标按下事件
const handleMouseDown = (event: MouseEvent) => {
  // 禁止用户选择网页中文字
  document.onselectstart = () => false;
  // 禁止用户拖动元素
  document.ondragstart = () => false;

  // 保存鼠标最后移动的位置（Y轴）
  dragState.startMouseTop = event.clientY;
  dragState.endMouseTop = event.clientY;

  // 绑定鼠标移动事件
  document.addEventListener('mousemove', handleMouseMove);
  // 绑定鼠标放开事件
  document.addEventListener('mouseup', handleMouseUp);
};

// 处理鼠标移动事件
const handleMouseMove = (event: MouseEvent) => {
  // 获取鼠标最后移动的位置（Y轴）
  const { endMouseTop } = dragState;
  // 获取当前的文本框高度
  const oldTextAreaHeight: any =
    editor.value!.getBoundingClientRect()!.height || 0;
  // 新的文本框高度
  let newTextAreaHeight = 0;

  // 计算鼠标移动的距离
  const distance = Math.abs(
    parseInt(((endMouseTop - event.clientY) * 100).toString(), 10) / 100
  );

  // 若鼠标向上移动
  if (endMouseTop < event.clientY) {
    // 发送框高度达到最大
    if (oldTextAreaHeight >= TextAreaWrap.MaxHeight) {
      // 修改光标为可被向下移动
      editorDrag.value!.style!.cursor = 's-resize';
      return false;
    }
    // 计算新的发送框高度
    newTextAreaHeight = oldTextAreaHeight + distance;
  }
  // 若鼠标向下移动
  else {
    // 发送框高度达到最小
    if (oldTextAreaHeight <= TextAreaWrap.MinHeight) {
      // 修改光标为可被向上移动
      editorDrag.value!.style!.cursor = 'n-resize';
      return false;
    }
    // 计算新的发送框高度
    newTextAreaHeight = oldTextAreaHeight - distance;
  }

  // 兼容鼠标快速拖动的情况：新的发送框高度不能超过最大值
  if (newTextAreaHeight > TextAreaWrap.MaxHeight) {
    newTextAreaHeight = TextAreaWrap.MaxHeight;
  }

  // 兼容鼠标快速拖动的情况：新的发送框高度不能小于最小值
  if (newTextAreaHeight < TextAreaWrap.MinHeight) {
    newTextAreaHeight = TextAreaWrap.MinHeight;
  }

  // 修改发送框高度
  editor.value!.style!.height = newTextAreaHeight + 'px';
  // 修改光标为可移动
  editorDrag.value!.style!.cursor = 'move';
  // 更新鼠标最后移动的位置（Y轴）
  dragState.endMouseTop = event.clientY;
};

// 处理鼠标放开事件
const handleMouseUp = () => {
  // 移除鼠标移动事件
  document.removeEventListener('mousemove', handleMouseMove);
  // 移除鼠标放开事件
  document.removeEventListener('mouseup', handleMouseUp);
  // 允许用户选择网页中文字
  document.onselectstart = null;
  // 允许用户拖动元素
  document.ondragstart = null;
};

// 导出方法
defineExpose({
  editor,
  editorDrag,
  reinit,
  getEditor,
  getEditorDrag,
  getToolbar,
  getQuill,
  getContents,
  setContents,
  getHTML,
  setHTML,
  pasteHTML,
  getText,
  setText
});
</script>

<template>
  <div class="vusui-editor">
    <div
      ref="editor"
      class="vusui-editor-container"
      :style="{ height: height + 'px' }"
      v-bind="$attrs"
    ></div>
    <div
      ref="editorDrag"
      class="vusui-editor-drag"
      v-if="showDrag"
      @mousedown="handleMouseDown"
    >
      <i class="drag-arrow top"></i>
      <i class="drag-line"></i>
      <i class="drag-arrow bottom"></i>
    </div>
  </div>
</template>
