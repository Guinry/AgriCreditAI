<template>
  <div class="application-step">
    <img :src="image" :alt="title" />
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String
});
</script>

<style scoped>
.application-step {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
}

.application-step:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.application-step img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.application-step h4 {
  font-size: 18px;
  margin: 10px 0;
}

.application-step p {
  font-size: 14px;
  color: #666;
}
</style>
