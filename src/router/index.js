import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue'; // 引入新创建的注册页面组件
import Login from '../views/Login.vue';
import LoanProducts from '../views/LoanProducts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register // 添加注册页面路由
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loan-products',
    name: 'LoanProducts',
    component: LoanProducts
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 修改: 使用 import.meta.env 替换 process.env
  routes
});

export default router;