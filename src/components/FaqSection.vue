<template>
  <div class="faq-card">
    <h3>{{ question }}</h3>
    <p>{{ answer }}</p>
  </div>
</template>

<script setup>
defineProps({
  question: String,
  answer: String
});
</script>

<style scoped>
.faq-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 35%; /* 每行占 35% 宽度，确保两列布局 */
  margin-bottom: 10px; /* 减小垂直间距 */
  margin-left: 6%;
  margin-right: 6%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (max-width: 768px) {
  .faq-card {
    width: 100%; /* 屏幕小于 768px 时，改为单列 */
    margin-right: 0; /* 在小屏幕上移除右边距 */
  }
}

.faq-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.faq-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.faq-card p {
  font-size: 16px;
  color: #555;
}

.faq-card a {
  text-decoration: none; /* 移除下划线 */
  color: #4CAF50; /* 设置初始颜色 */
}

.faq-card a:hover {
  color: #28a745; /* 链接悬停时的颜色 */
  text-decoration: none; /* 悬停时也移除下划线 */
}
</style>
