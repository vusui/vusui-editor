import {
  defineComponent,
  ref,
  reactive,
  watch,
  PropType,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
import Quill from 'quill';
import Delta from 'quill-delta';

// 工具栏
import { toolbarOptions, ToolbarOptions } from './options';

// quill样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export type Module = { name: string; module: any; options?: any };

export const VusuiEditor = defineComponent({
  name: 'VusuiEditor',
  inheritAttrs: false,
  props: {
    // 编辑器内容
    content: {
      type: [String, Object] as PropType<string | Delta>,
      default: () => {}
    },
    // 编辑器内容类型
    contentType: {
      type: String as PropType<'delta' | 'html' | 'text'>,
      default: 'delta',
      validator: (value: string) => {
        return ['delta', 'html', 'text'].includes(value);
      }
    },
    // 编辑器主题
    theme: {
      type: String as PropType<'snow' | 'bubble' | ''>,
      default: 'snow',
      validator: (value: string) => {
        return ['snow', 'bubble', ''].includes(value);
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
      type: Object,
      required: false
    }
  },
  // emits
  emits: ['ready', 'change', 'input', 'blur', 'focus', 'update:content'],

  setup: (props, ctx) => {
    // VusuiEditor 实例
    const VusuiEditor = ref<any>(null);
    const VusuiEditorDrag = ref<any>(null);

    // state
    const state: any = reactive({
      editorOption: {},
      quill: null
    });

    // 页面加载完成后执行
    onMounted(() => {
      initialize();
    });

    // 销毁完毕执行
    onUnmounted(() => {
      state.quill = null;
    });

    // 初始化编辑器
    const initialize = () => {};
  }
});
