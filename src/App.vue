<script setup lang="ts">
import { ref } from 'vue';
// import { VusuiEditor } from '@vusui/editor';
// import '@vusui/editor/lib/style.css';
import { VusuiEditor } from './editor';

// // 设置字体大小
// const fontSizeStyle = Quill.import('attributors/style/size'); // 引入这个后会把样式写在style上
// // 设置字体列表, false为默认选中
// fontSizeStyle.whitelist = ['12px', false, '16px'];
// Quill.register(fontSizeStyle, true);

// // 设置字体样式
// const Font = Quill.import('attributors/style/font'); // 引入这个后会把样式写在style上
// const fonts = ['SimSun', 'SimHei', false];
// Font.whitelist = fonts; // 将字体加入到白名单
// Quill.register(Font, true);

const editor = ref<any>(null);

// const options = ref<any>({
//   // debug: 'info',
//   modules: {
//     toolbar: [
//       [{ header: 1 }, { header: 2 }],
//       ['bold', 'italic', 'underline'],
//       [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
//       [{ size: fontSizeStyle.whitelist }],
//       [{ font: fonts }]
//     ]
//   }
// });

// delta content-type="delta"
// const content = {
//   ops: [
//     { insert: 'Hello ' },
//     { insert: 'Vusui!', attributes: { bold: true } },
//     { insert: '\n' }
//   ]
// };

const content = `你好, Vusui`;
</script>

<template>
  <vusui-editor ref="editor" v-model:content="content"></vusui-editor>
</template>

<style>
body {
  /* background: #141414; */
}
</style>
