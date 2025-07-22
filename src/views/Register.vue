<template>
  <div class="register-page">
    <div class="register-form">
      <img src="@/assets/images/logo.png" alt="农业贷款服务平台标志" class="logo-image">
      <h2>农业贷款服务平台注册</h2>
      <p>助力乡村振兴，普惠金融服务</p>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="请输入用户名" required />
        <input type="password" v-model="password" placeholder="请输入密码" required />
        <input type="tel" v-model="phone" placeholder="请输入手机号码" required />
        <div class="captcha-container">
          <input type="text" v-model="captcha" placeholder="请输入验证码" required />
          <button type="button" @click="handleGetCaptcha" class="get-captcha-btn">获取验证码</button>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="agreed" required />
          <label>我已阅读并同意 <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a></label>
        </div>
        <div class="submit-container">
          <button type="submit">立即注册</button>
        </div>
      </form>
      <p>已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const username = ref('');
const password = ref('');
const phone = ref('');
const captcha = ref('');
const agreed = ref(false);

const router = useRouter();

const handleSubmit = () => {
  // 这里可以添加表单验证和提交逻辑
  console.log('Form submitted:', {
    username: username.value,
    password: password.value,
    phone: phone.value,
    captcha: captcha.value,
  });
  // 假设注册成功后跳转到首页
  router.push('/');
};

const handleGetCaptcha = () => {
  // 这里可以添加获取验证码的逻辑
  console.log('Get captcha');
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  /* 更新背景图片 */
  background-image: url('src/assets/images/register_background.jpg');
  background-size: cover;
  background-position: center;
}

.register-form {
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

.register-form h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.register-form p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.register-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.register-form button {
  padding: 14px 0;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
}

.register-form button:hover {
  background-color: #45a049;
}

.captcha-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}

.captcha-container input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.captcha-container button {
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.checkbox-container input[type="checkbox"] {
  width: 16px; /* 增加 checkbox 的尺寸 */
  height: 16px;
  margin-right: 8px; /* 增加 checkbox 和 label 之间的间距 */
  accent-color: #28a745; /* 设置选中时的颜色 */
}

.checkbox-container label {
  margin-left: 0; /* 移除 label 的左边距 */
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
}

.checkbox-container label a {
  color: #28a745;
  text-decoration: none;
  margin: 0 4px;
}

.submit-container button {
  width: 100%;
}

p a {
  color: #28a745;
}
</style>
