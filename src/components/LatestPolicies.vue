<template>
  <div class="latest-policy-card">
    <img :src="image" :alt="title" />
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span>{{ date }}</span>
      <button>查看详情</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  date: String
});
</script>

<style scoped>
.latest-policy-card {
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

.latest-policy-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.latest-policy-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.latest-policy-card .content {
  text-align: left;
}

.latest-policy-card h3 {
  font-size: 20px;
  margin: 0 0 10px;
}

.latest-policy-card p {
  font-size: 16px;
  margin: 0 0 10px;
}

.latest-policy-card span {
  display: block;
  font-size: 14px;
  color: #999;
  margin: 10px 0;
}

.latest-policy-card button {
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

.latest-policy-card button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}
</style>
