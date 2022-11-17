# Vusui-editor 富文本编辑器

基于 Vue3 封装的 Quill 富文本编辑器组件。

## 安装

```bash
yarn add vusui-editor
npm i vusui-editor -S
```

## 全局注册

```js
// main.js
import { VusuiEditor } from 'vusui-editor';
app.use(VusuiEditor);

// 或者
import Editor from 'vusui-editor';
app.use(Editor.VusuiEditor);
```

## 局部注册

```js
import { VusuiEditor } from 'vusui-editor';

export default {
  components: {
    VusuiEditor
  }
};
```

## 模块注册

```js
import { VusuiEditor, Quill } from 'vusui-editor';

import CustomModule from 'CustomModule';
Quill.register('modules/CustomModule', CustomModule);
app.use(VusuiEditor);
```

## 模板使用

```vue
<template>
  <vusui-editor
    :options="editor.editorOption"
    :disabled="editor.disabled"
    v-model:content="editor.content"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { VusuiEditor } from 'vusui-editor';

const editor = reactive({
    content: '',
    disabled: false,
    // quill 配置参数
    editorOption: {
      ...
    }
});

const onEditorBlur = (quill) => {
  console.log('editor blur!', quill);
}
const onEditorFocus = (quill) => {
  console.log('editor focus!', quill);
}
const onEditorReady = (quill) => {
  console.log('editor ready!', quill);
}
const onEditorChange = ({ quill, html, text }) => {
  console.log('editor change!', quill, html, text);
  state.content = html;
}
</script>
```
