<script setup lang="ts">
const content = '1111111111111111111';
const toolbarOptions = {
  // modules: {
  //   toolbar: {
  //     // container: [
  //     //   // [{ header: 1 }, { header: 2 }],
  //     //   // ['bold', 'italic', 'underline'],
  //     //   // [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }]
  //     // ]
  //     // handlers: {
  //     //   image: null
  //     // }
  //   }
  // }
};
</script>

<template>
  <VusuiEditor :content="content"></VusuiEditor>
</template>

<style scoped></style>
