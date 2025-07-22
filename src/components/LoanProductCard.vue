<template>
  <div class="loan-product-card">
    <img :src="image" :alt="title" />
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
      </ul>
      <button>申请贷款</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  features: Array
});
</script>

<style scoped>
.loan-product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.loan-product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.loan-product-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.loan-product-card h3 {
  font-size: 20px;
  margin: 0 0 10px;
}

.loan-product-card p {
  font-size: 16px;
  margin: 0 0 10px;
}

.loan-product-card ul {
  list-style: none;
  padding: 0;
}

.loan-product-card li {
  font-size: 14px;
  margin: 5px 0;
}

.loan-product-card button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.loan-product-card button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}
</style>
