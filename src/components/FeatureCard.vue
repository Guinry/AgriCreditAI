<template>
  <div class="feature-card">
    <img :src="icon" :alt="title" class="feature-icon" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
});
</script>

<style scoped>
.feature-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 200px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.feature-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: #555;
}
</style>
