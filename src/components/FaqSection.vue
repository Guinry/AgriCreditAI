<template>
  <div class="faq-section">
    <div v-for="(faq, index) in faqs" :key="index" class="faq">
      <h4>{{ faq.question }}</h4>
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  { question: '申请条件有哪些？', answer: '年龄 18 周岁...' },
  // 其他常见问题...
];
</script>

<style scoped>
.faq-section {
  margin: 40px 0;
}

.faq {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.faq h4 {
  margin-top: 0;
}

.faq p {
  margin: 10px 0 0;
}
</style>