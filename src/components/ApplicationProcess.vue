<template>
  <div class="application-process">
    <div v-for="(step, index) in steps" :key="index" class="step">
      <img :src="step.icon" :alt="step.title">
      <h4>{{ step.title }}</h4>
      <p>{{ step.description }}</p>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { icon: '@/icons/icon1.png', title: '注册认证', description: '完成实名认证和身份验证' },
  { icon: '@/icons/icon1.png', title: '提交申请', description: '填写贷款申请资料' },
  { icon: '@/icons/icon1.png', title: '审核评估', description: '银行进行贷款审核' },
  { icon: '@/icons/icon1.png', title: '放款支付', description: '审核通过后快速放款' }
];
</script>

<style scoped>
.application-process {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}

.step {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
}

.step img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
</style>