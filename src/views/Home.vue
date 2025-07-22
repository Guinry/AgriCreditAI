<template>
  <div class="home-page">
    <Header />
    <main>
      <!-- 英雄区域 -->
      <section class="hero-section">
        <h1>助力农业发展，普惠金融服务</h1>
        <p>为广大农户提供便捷、高效、低息的贷款服务，助力乡村振兴</p>
        <button>立即申请贷款</button>
      </section>

      <!-- 特色贷款产品 -->
      <section class="featured-loans">
        <div class="title-container">
          <h2>特色贷款产品</h2>
        </div>
        <div class="cards-container">
          <LoanProductCard
              v-for="(product, index) in loanProducts"
              :key="index"
              :title="product.title"
              :description="product.description"
              :image="product.image"
              :features="product.features"
          />
        </div>
      </section>

      <!-- 申请流程 -->
      <section class="application-process">
        <div class="title-container">
          <h2>申请流程</h2>
        </div>
        <div class="steps-container">
          <ApplicationProcess
              v-for="(step, index) in applicationProcess"
              :key="index"
              :title="step.title"
              :description="step.description"
              :image="step.image"
          />
        </div>
      </section>

      <!-- 贷款计算器 -->
      <section class="loan-calculator">
        <h2>贷款计算器</h2>
        <LoanCalculator />
      </section>

      <!-- 最新政策资讯 -->
      <section class="latest-policies">
        <h2>最新政策资讯</h2>
        <LatestPolicies />
      </section>

      <!-- 常见问题 -->
      <section class="faq-section">
        <h2>常见问题</h2>
        <FaqSection />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ApplicationProcess from '@/components/ApplicationProcess.vue';
import LoanCalculator from '@/components/LoanCalculator.vue';
import LatestPolicies from '@/components/LatestPolicies.vue';
import FaqSection from '@/components/FaqSection.vue';
import LoanProductCard from '@/components/LoanProductCard.vue';

const loanProducts = [
  {
    title: '农机购置贷款',
    description: '用于购买农业机械设备的贷款产品，年利率低至 3.85%。',
    image: 'src/assets/images/loan_product1.jpg', // 替换为指定图片路径
    features: [
      '最高可贷 50 万元',
      '期限最长 5 年',
      '无抵押、免担保'
    ]
  },
  {
    title: '设施农业贷款',
    description: '支持大棚建设、智能温室等农业设施建设，年利率 4.35%。',
    image: 'src/assets/images/loan_product2.jpg', // 替换为指定图片路径
    features: [
      '最高可贷 100 万元',
      '期限最长 10 年',
      '可按季度还息'
    ]
  },
  {
    title: '农产品经营贷款',
    description: '支持农产品收购、储存、加工等经营活动，年利率 4.15%。',
    image: 'src/assets/images/loan_product3.jpg', // 替换为指定图片路径
    features: [
      '最高可贷 200 万元',
      '期限最长 3 年',
      '灵活还款方式'
    ]
  }
];

const applicationProcess = [
  {
    title: '注册认证',
    description: '完成实名认证和身份验证',
    image: 'src/icons/enroll.svg',
  },
  {
    title: '提交申请',
    description: '填写贷款申请资料',
    image: 'src/icons/submit.svg',
  },
  {
    title: '审核评估',
    description: '银行进行贷款审核',
    image: 'src/icons/audit.svg',
  },
  {
    title: '放款支付',
    description: '审核通过后快速放款',
    image: 'src/icons/distribute.svg',
  }
];
</script>

<style scoped>
.featured-loans, .application-process, .loan-calculator {
  display: flex;
  flex-direction: column; /* 修改：垂直排列 */
  align-items: center; /* 修改：水平居中 */
  margin: 40px 0;
}

.title-container {
  margin-bottom: 10px; /* 添加标题与卡片之间的间距 */
}

.cards-container {
  display: flex;
  justify-content: space-around; /* 修改：均匀分布 */
  flex-wrap: wrap; /* 允许换行 */
}

.steps-container {
  display: flex;
  justify-content: space-around; /* 修改：均匀分布 */
  flex-wrap: wrap; /* 允许换行 */
}

.hero-section {
  background-image: url('@/assets/images/home_agriculture.jpg'); /* 使用指定图片 */
  background-size: 100% auto; /* 修改: 拉长背景图 */
  background-position: center top; /* 修改: 背景图从顶部开始 */
  color: #000; /* 文字颜色为黑色 */
  padding: 150px 20px; /* 修改: 增加上下内边距 */
  position: relative;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* 修改: 降低背景透明度 */
}

.hero-section h1 {
  font-size: 36px;
  margin: 0 0 20px;
  text-align: left; /* 修改: 文本靠左对齐 */
}

.hero-section p {
  font-size: 18px;
  margin: 0 0 30px;
  text-align: left; /* 修改: 文本靠左对齐 */
}

.hero-section button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left; /* 修改: 按钮靠左对齐 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
}

.hero-section button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #45a049;
}

.loan-calculator {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 40px 0;
}

.loan-calculator form {
  display: flex;
  flex-direction: column;
}

.loan-calculator input,
.loan-calculator select {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loan-calculator button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 添加贷款计算器按钮的悬停效果 */
.loan-calculator button:hover {
  background-color: #45a049;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.latest-policies {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}

.latest-policies .policy-item {
  max-width: 300px;
  margin: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.latest-policies .policy-item img {
  width: 100%;
  height: auto;
}

.latest-policies .policy-item .content {
  padding: 20px;
}

.latest-policies .policy-item .content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.latest-policies .policy-item .content p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.latest-policies .policy-item .content .date {
  font-size: 12px;
  color: #999;
}

.faq-section {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 40px 0;
}

.faq-section .faq-item {
  margin-bottom: 20px;
}

.faq-section .faq-item h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.faq-section .faq-item p {
  font-size: 14px;
  color: #666;
}

.faq-section .faq-item h3:hover {
  color: #4CAF50;
}
</style>