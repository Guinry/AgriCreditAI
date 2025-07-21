<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('App is mounted.');
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
/* 添加全局样式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
/* 删除: display: none; */ /* 如果存在类似样式，请删除 */
</style>

