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
        <div class="cards-container">
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
        <div class="title-container">
          <h2>最新政策</h2>
        </div>
        <div class="cards-container">
          <LatestPolicies
              v-for="(policy, index) in latestPolicies"
              :key="index"
              :title="policy.title"
              :description="policy.description"
              :image="policy.image"
              :date="policy.date"
          />
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="faq-section">
        <div class="title-container">
          <h2>常见问题</h2>
        </div>
        <div class="faq-container">
          <FaqSection
              v-for="(faq, index) in faqs"
              :key="index"
              :question="faq.question"
              :answer="faq.answer"
          />
        </div>
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

const latestPolicies = [
  {
    title: '国务院发布新政策：加大对农业产业化龙头企业的金融支持力度',
    description: '为进一步推动乡村振兴战略实施，国务院近日出台新政策，将加大对农业产业化龙头企业的金融支持...',
    image: 'src/assets/images/policy1.jpg', // 替换为指定图片路径
    date: '2025-06-28'
  },
  {
    title: '农业农村部：实施数字农业农村发展工程',
    description: '农业农村部近日宣布，将全面推进数字农业农村发展工程，促进农业现代化和农村信息化建设...',
    image: 'src/assets/images/policy2.jpg', // 替换为指定图片路径
    date: '2025-07-11'
  },
  {
    title: '农业银行推出“乡村振兴”专项信贷计划',
    description: '农业银行宣布推出总规模 5000 亿元的“乡村振兴”专项信贷计划，支持新型农业经营主体发展...',
    image: 'src/assets/images/policy3.jpg', // 替换为指定图片路径
    date: '2025-07-20'
  }
];

const faqs = [
  { question: '申请条件有哪些？', answer: '年满 18 周岁的中国公民，具有完全民事行为能力，从事农业生产经营活动满 1 年以上，信用记录良好。' },
  { question: '需要准备哪些材料？', answer: '身份证、户口本、婚姻证明、收入证明、资产证明等基础资料，具体要求可能因贷款产品不同而异。' },
  { question: '多久能放款？', answer: '资料齐全的情况下，一般 3-5 个工作日内完成审核，审核通过后 1 个工作日放款。' },
  { question: '如何还款？', answer: '支持手机银行、网上银行、银行柜台等多种还款方式，可选择等额本息或等额本金的还款方式。' }
];
</script>

<style scoped>
.featured-loans, .application-process, .loan-calculator, .latest-policies, .faq-section {
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

.hero-section {
  background-image: url('@/assets/images/home_agriculture.jpg'); /* 使用指定图片 */
  background-size: 100% auto; /* 修改: 拉长背景图 */
  background-position: center top; /* 修改: 背景图从顶部开始 */
  color: #000; /* 文字颜色为黑色 */
  padding: 150px 20px; /* 修改: 增加上下内边距 */
  position: relative;
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

.faq-section {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  margin: 40px 0;
}

.faq-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>