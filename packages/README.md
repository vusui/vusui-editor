# Vusui-editor 富文本编辑器

## 介绍

[![vue](https://img.shields.io/badge/vue-3.2.37-brightgreen.svg)](https://cn.vuejs.org/)
[![quill](https://img.shields.io/badge/quill-1.3.7-brightgreen.svg)](https://quilljs.com/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/vusui/vusui-admin-template/blob/main/LICENSE)
[![vusui-editor](https://img.shields.io/github/stars/vusui/vusui-editor.svg?style=social&label=Stars)](https://github.com/vusui/vusui-editor)

基于 Vue3 + Quill 封装的富文本编辑器组件。

【[使用文档](https://www.vusui.com/editor)】|【[在线演示](https://www.vusui.com/editor/guide/demo.html)】

## 安装

```bash
yarn add @vusui/editor
npm i @vusui/editor -S
```

## 全局注册

```ts
// main.ts
import { VusuiEditor } from '@vusui/editor';
import '@vusui/editor/lib/style.css';

app.use(VusuiEditor);

// 或者
import Editor from '@vusui/editor';
app.use(Editor.VusuiEditor);
```

## 局部注册

```ts
import { VusuiEditor } from '@vusui/editor';
import '@vusui/editor/lib/style.css';

export default {
  components: {
    VusuiEditor
  }
};
```

## 模板使用

```vue
<template>
  <vusui-editor :options="editor.options" v-model:content="editor.content" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const editor = reactive({
    // 内容
    content: '',
    // quill 配置参数
    options: {
      ...
    }
});
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Vusui
