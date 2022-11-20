/*
 * @Description: VusuiEditor TS类型定义
 * @Author: linpan(45650368@qq.com)
 * @Date: 2022-11-19 15:25:02
 * @LastEditors: vusui gophp@163.com
 * @LastEditTime: 2022-11-20 16:09:49
 * @WebSite: https://vusui.com
 * @Copyright: 2017-present The Vusui Authors
 * @Readme: 开源不易，且用且珍惜！
 */
import {
  Ref,
  PropType,
  VNodeProps,
  DefineComponent,
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsMixin,
  ExtractPropTypes
} from 'vue';
import Quill, { QuillOptionsStatic, Sources } from 'quill';
import Delta from 'quill-delta';

declare type Module = {
  name: string;
  module: any;
  options?: object;
};

declare module 'quill';
declare module 'quill-delta';
declare module '@vusui/editor';

export { Delta };
export { Quill };

export declare const VusuiEditor: DefineComponent<
  {
    content: {
      type: PropType<string | Delta>;
      default: () => void;
    };
    contentType: {
      type: PropType<'delta' | 'html' | 'text'>;
      default: string;
      validator: (value: string) => boolean;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    readOnly: {
      type: BooleanConstructor;
      default: boolean;
    };
    placeholder: {
      type: StringConstructor;
      required: false;
    };
    theme: {
      type: PropType<'' | 'snow' | 'bubble'>;
      default: string;
      validator: (value: string) => boolean;
    };
    toolbar: {
      type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
      required: false;
      validator: (value: string | unknown) => boolean;
    };
    modules: {
      type: PropType<Module | Module[]>;
      required: false;
    };
    options: {
      type: PropType<QuillOptionsStatic>;
      required: false;
    };
  },
  {
    editor: Ref<any>;
    editorDrag: Ref<any>;
    getEditor: () => Element;
    getToolbar: () => Element;
    getQuill: () => Quill;
    getContents: (
      index?: number,
      length?: number
    ) => string | Delta | undefined;
    setContents: (content: string | Delta, source?: Sources) => void;
    getHTML: () => string;
    setHTML: (html: string) => void;
    pasteHTML: (html: string, source?: Sources) => void;
    getText: (index?: number, length?: number) => string;
    setText: (text: string, source?: Sources) => void;
    reinit: () => void;
  },
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  (
    | 'textChange'
    | 'selectionChange'
    | 'editorChange'
    | 'ready'
    | 'focus'
    | 'blur'
    | 'update:content'
  )[],
  | 'textChange'
  | 'selectionChange'
  | 'editorChange'
  | 'ready'
  | 'focus'
  | 'blur'
  | 'update:content',
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      content: {
        type: PropType<string | Delta>;
        default: () => void;
      };
      contentType: {
        type: PropType<'delta' | 'html' | 'text'>;
        default: string;
        validator: (value: string) => boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      readOnly: {
        type: BooleanConstructor;
        default: boolean;
      };
      placeholder: {
        type: StringConstructor;
        required: false;
      };
      theme: {
        type: PropType<'snow' | 'bubble'>;
        default: string;
        validator: (value: string) => boolean;
      };
      toolbar: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        required: false;
        validator: (value: string | unknown) => boolean;
      };
      modules: {
        type: PropType<Module | Module[]>;
        required: false;
      };
      options: {
        type: PropType<QuillOptionsStatic>;
        required: false;
      };
    }>
  > & {
    onTextChange?: ((...args: any[]) => any) | undefined;
    onSelectionChange?: ((...args: any[]) => any) | undefined;
    onEditorChange?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    'onUpdate:content'?: ((...args: any[]) => any) | undefined;
  },
  {
    content: string | Delta;
    contentType: 'delta' | 'html' | 'text';
    disabled: boolean;
    readOnly: boolean;
    theme: 'snow' | 'bubble';
  }
>;

export {};
