<template>
  <div class="login-page">
    <div class="login-form">
      <img src="@/assets/images/logo.png" alt="农业管理系统标志" class="logo-image">
      <h2>农业管理系统</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="请输入用户名" required />
        <input type="password" v-model="password" placeholder="请输入密码" required />
        <div class="role-container">
          <label><input type="radio" v-model="role" value="user"> 用户</label>
          <label><input type="radio" v-model="role" value="bank"> 银行</label>
          <label><input type="radio" v-model="role" value="admin"> 管理员</label>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="rememberMe" />
          <label>记住密码</label>
        </div>
        <button type="submit">登录</button>
      </form>
      <p>没有账号？<router-link to="/register">立即注册</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const role = ref('user');
const rememberMe = ref(false);

const router = useRouter();

const handleSubmit = () => {
  // 这里可以添加表单验证和提交逻辑
  console.log('Form submitted:', {
    username: username.value,
    password: password.value,
    role: role.value,
    rememberMe: rememberMe.value,
  });
  // 假设登录成功后跳转到首页
  router.push('/');
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  /* 更新背景图片 */
  background-image: url('src/assets/images/login_background.jpg');
  background-size: cover;
  background-position: center;
}

.login-form {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 352px;
  max-width: 100%;
  min-height: 400px;
}

.logo-image {
  width: 50px;
  margin-bottom: 20px;
}

.login-form h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.login-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.login-form button {
  padding: 14px 0;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
  width: 100%;
}

.login-form button:hover {
  background-color: #45a049;
}

.role-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
}

.role-container label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.role-container input[type="radio"] {
  width: 14px; /* 增加 radio 的尺寸 */
  height: 14px;
  margin-right: 8px; /* 增加 radio 和 label 之间的间距 */
  accent-color: #28a745; /* 设置选中时的颜色 */
  border: 2px solid #ddd; /* 添加边框 */
  background-color: #fff; /* 设置背景颜色 */
  cursor: pointer;
}

.role-container input[type="radio"]:checked + span {
  background-color: #28a745; /* 设置选中时的背景颜色 */
  color: #fff; /* 设置选中时的文字颜色 */
  padding: 4px 8px; /* 添加内边距 */
  border-radius: 4px; /* 添加圆角 */
}

.role-container label span {
  display: inline-block;
  padding: 4px 8px; /* 添加内边距 */
  border-radius: 4px; /* 添加圆角 */
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.checkbox-container input[type="checkbox"] {
  width: 14px;
  height: 14px;
  margin-right: 8px;
  accent-color: #28a745;
}

.checkbox-container label {
  font-size: 14px;
  color: #333;
}

p a {
  color: #28a745;
}
</style>