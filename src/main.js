// 引入 Vue 和相关插件
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 创建 Vue 实例
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app'); // 确保挂载目标为 #app