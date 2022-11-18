<script lang="ts">
export default {
  name: 'VusuiEditor'
};
</script>

<script setup lang="ts">
import Quill from 'quill';
import { ref, watch, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

// quill样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// 设置字体大小
const fontSizeStyle = Quill.import('attributors/style/size'); // 引入这个后会把样式写在style上
// 设置字体列表, false为默认选中
fontSizeStyle.whitelist = [
  '12px',
  false,
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '72px'
];
Quill.register(fontSizeStyle, true);

// 设置字体样式
const Font = Quill.import('attributors/style/font'); // 引入这个后会把样式写在style上
const fonts = [
  'SimSun',
  'SimHei',
  false,
  'KaiTi',
  'FangSong',
  'Arail',
  'Tahoma',
  'Verdana',
  'Courier New'
];
Font.whitelist = fonts; // 将字体加入到白名单
Quill.register(Font, true);

// Quill默认配置
const defaultOptions = {
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: fontSizeStyle.whitelist }], // 字体大小
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: fonts }], // 字体种类
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video']
      ]
      // handlers: {
      //   image: null
      // }
    }
  },
  placeholder: '请输入内容...',
  readOnly: false
};

// props
const props = defineProps({
  // 编辑器配置参数
  options: {
    type: Object,
    required: false,
    default: () => ({})
  },
  // 禁用编辑器
  disabled: {
    type: Boolean,
    default: false
  },
  // 编辑器高度
  height: {
    type: Number,
    default: 400
  },
  // 拖拽高度
  drag: {
    type: Boolean,
    default: true
  },
  // 编辑器内容
  content: {
    type: String,
    default: ''
  }
});

// emit
const emit = defineEmits([
  'ready',
  'change',
  'input',
  'blur',
  'focus',
  'update:content'
]);

// VusuiEditor 实例
const VusuiEditor = ref<any>(null);
const VusuiEditorDrag = ref<any>(null);

// state
const state: any = {
  editorOption: {},
  quill: null
};

// 保存鼠标最后移动的位置（Y轴）
const dragState = {
  // 鼠标开始移动的位置（Y轴）
  startMouseTop: 0,
  // 鼠标最后移动的位置（Y轴）
  endMouseTop: 0
};

// 文本框 wrap 最大/小高度
const TextAreaWrap = {
  MaxHeight: 800,
  MinHeight: 100
};

// 编辑器内容
let content = '';

// 监听编辑器内容变化
watch(
  () => props.content,
  (val) => {
    if (state.quill) {
      if (val && val !== content) {
        content = val;
        state.quill.pasteHTML(val);
      } else if (!val) {
        state.quill.setText('');
      }
    }
  }
);

// 监听编辑器是否禁用
watch(
  () => props.disabled,
  (val) => {
    if (state.quill) {
      state.quill.enable(!val);
    }
  }
);

// 合并对象参数
const mergeOptions = (def: any, custom: any) => {
  for (const key in custom) {
    if (!def[key] || key !== 'modules') {
      def[key] = custom[key];
    } else {
      mergeOptions(def[key], custom[key]);
    }
  }
  return def;
};

// 初始化编辑器
const initialize = () => {
  if (VusuiEditor.value) {
    // 合并参数
    state.editorOption = mergeOptions(defaultOptions, props.options);

    // 编辑器是否禁用
    state.editorOption.readOnly = props.disabled ? true : false;

    // 创建Quill实例
    state.quill = new Quill(VusuiEditor.value, state.editorOption);

    // 设置编辑器内容
    if (props.content) {
      state.quill.pasteHTML(props.content);
    }

    // 如果编辑器失去焦点，将模型标记为触摸
    state.quill.on('selection-change', (range: any) => {
      if (!range) {
        emit('blur', state.quill);
      } else {
        emit('focus', state.quill);
      }
    });

    // 如果文本更改，则更新模型
    state.quill.on('text-change', () => {
      // 内容初始化后禁用编辑器
      if (props.disabled) {
        state.quill.enable(false);
      }
      let html = VusuiEditor.value?.children[0]?.innerHTML;
      const quill = state.quill;
      const text = state.quill.getText();
      if (html === '<p><br></p>') {
        html = '';
      }
      content = html;
      emit('update:content', content);
      emit('change', { html, text, quill });
    });

    // Emit ready event
    emit('ready', state.quill);
  }
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
  const oldTextAreaHeight = VusuiEditor.value?.getBoundingClientRect().height;
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
      VusuiEditorDrag.value.style.cursor = 's-resize';
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
      VusuiEditorDrag.value.style.cursor = 'n-resize';
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
  VusuiEditor.value.style.height = newTextAreaHeight + 'px';
  // 修改光标为可移动
  VusuiEditorDrag.value.style.cursor = 'move';

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

// 即将销毁执行
onBeforeUnmount(() => {
  const editorToolbar = VusuiEditor.value?.previousSibling;
  if (editorToolbar && editorToolbar.className.indexOf('ql-toolbar') > -1) {
    editorToolbar.parentNode?.removeChild(editorToolbar);
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

// 导出方法
defineExpose({
  VusuiEditor
});
</script>

<template>
  <div class="vusui-editor">
    <div
      ref="VusuiEditor"
      class="vusui-editor-container"
      :style="{ height: height + 'px' }"
      v-bind="$attrs"
    ></div>
    <div
      ref="VusuiEditorDrag"
      class="vusui-editor-drag"
      v-if="drag"
      @mousedown="handleMouseDown"
    >
      <i class="drag-arrow top"></i>
      <i class="drag-line"></i>
      <i class="drag-arrow bottom"></i>
    </div>
  </div>
</template>

<style lang="scss" src="./VusuiEditor.scss" />
