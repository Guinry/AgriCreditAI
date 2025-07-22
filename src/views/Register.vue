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
        <input type="text" v-model="captcha" placeholder="请输入验证码" required />
        <button type="button" @click="handleGetCaptcha">获取验证码</button>
        <div class="checkbox-container">
          <input type="checkbox" v-model="agreed" required />
          <label>我已阅读并同意 <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a></label>
        </div>
        <button type="submit">立即注册</button>
      </form>
      <p>已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
  /* 添加背景图片 */
  background-image: url('@/assets/images/register_background.jpg');
  background-size:100% 100%;
  background-attachment:fixed;
}

.register-form {
  background-color: #fff;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 500px;
}

.logo-image {
  width: 50px;
  margin-bottom: 20px;
}

.register-form h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.register-form p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.register-form input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.register-form button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}

.register-form button:hover {
  background-color: #45a049;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.checkbox-container label {
  margin-left: 10px;
}
</style>