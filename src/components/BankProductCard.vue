<template>
  <div class="product-card">
    <img :src="logo" :alt="name" class="product-logo" />
    <div class="product-info">
      <h3>{{ name }}</h3>
      <p><strong>贷款额度：</strong>{{ amount }}</p>
      <p><strong>年化利率：</strong>{{ rate }}</p>
      <p><strong>贷款期限：</strong>{{ duration }}</p>
      <button>立即申请</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: String,
  name: String,
  amount: String,
  rate: String,
  duration: String
});
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 30%; /* 每个卡片占 30% 宽度 */
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-logo {
  width: 80px;
  height: auto;
  margin-bottom: 15px;
}

.product-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 14px;
  color: #555;
  margin: 5px 0;
}

.product-info button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
}

.product-info button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}
</style>
