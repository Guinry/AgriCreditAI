<template>
  <div class="latest-policies">
    <div v-for="(policy, index) in policies" :key="index" class="policy">
      <img :src="policy.image" :alt="policy.title">
      <h4>{{ policy.title }}</h4>
      <p>{{ policy.description }}</p>
      <span>{{ policy.date }}</span>
    </div>
  </div>
</template>

<script setup>
const policies = [
  { image: '@/assets/images/policy1.jpg', title: '国家发布新政...', description: '加大对农业产业化龙头企业的金融支持力度...', date: '2024-01-15' },
  // 其他政策...
];
</script>

<style scoped>
.latest-policies {
  display: flex;
  justify-content: space-around;
}

.policy {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.policy img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.policy h4 {
  font-size: 20px;
  margin: 0 0 10px;
}

.policy p {
  font-size: 16px;
  margin: 0 0 10px;
}

.policy span {
  font-size: 14px;
  color: #999;
}
</style>