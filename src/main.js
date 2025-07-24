// 引入 Vue 和相关插件
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css'; // 引入 Vant UI 的样式
import { Icon } from 'vant'; // 引入 Vant UI 的 Icon 组件

// 创建 Vue 实例
const app = createApp(App);

// 使用路由
app.use(router);
app.use(Icon); // 全局注册 Icon 组件

// 挂载应用
app.mount('#app'); // 确保挂载目标为 #app
