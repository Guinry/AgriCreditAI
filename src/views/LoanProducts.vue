<template>
  <div class="loan-products-page">
    <Header />
    <section class="hero-section">
      <h1>专业农业金融服务平台</h1>
      <p>为农业发展提供全方位金融支持，助力乡村振兴战略实施</p>
      <button @click="applyForLoan">立即申请贷款</button>
      <button @click="learnMore">了解更多</button>
    </section>

    <section class="features">
      <div class="features-container">
        <FeatureCard
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
        />
      </div>
    </section>

    <section class="loan-product-filter">
      <h2>贷款产品筛选</h2>
      <div class="loan-product-filter-container">
        <select v-model="selectedBank">
          <option value="">全部银行</option>
          <option v-for="bank in banks" :value="bank">{{ bank }}</option>
        </select>
        <select v-model="selectedType">
          <option value="">贷款类型</option>
          <option v-for="type in types" :value="type">{{ type }}</option>
        </select>
        <select v-model="selectedAmount">
          <option value="">贷款额度</option>
          <option v-for="amount in amounts" :value="amount">{{ amount }}</option>
        </select>
        <button @click="smartMatch">智能匹配</button>
      </div>
    </section>

    <section class="products">
      <div class="products-container">
        <BankProductCard
            v-for="(product, index) in banksProducts"
            :key="index"
            :logo="product.logo"
            :name="product.name"
            :amount="product.amount"
            :rate="product.rate"
            :duration="product.duration"
        />
      </div>
    </section>

    <section class="charts-section">
      <div class="chart-item">
        <h3>贷款发放趋势</h3>
        <LineChart :data="loanTrendData"></LineChart>
      </div>
      <div class="chart-item">
        <h3>贷款类型分布</h3>
        <PieChart :data="loanTypeDistribution"></PieChart>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import LineChart from '@/components/LineChart.vue'; // 导入 LineChart 组件
import PieChart from '@/components/PieChart.vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import BankProductCard from "@/components/BankProductCard.vue"; // 导入 PieChart 组件

const applyForLoan = () => {
  // 处理申请贷款的逻辑
};

const learnMore = () => {
  // 处理了解更多的逻辑
};

const features = [
  {
    icon: 'src/icons/rate.svg',
    title: '优惠利率',
    description: '年化利率低至 3.85%'
  },
  {
    icon: 'src/icons/quick.svg',
    title: '快速放款',
    description: '最快 24 小时到账'
  },
  {
    icon: 'src/icons/safety.svg',
    title: '无抵押担保',
    description: '信用贷款，手续简单'
  },
  {
    icon: 'src/icons/consultation.svg',
    title: '专业服务',
    description: '一对一贷款顾问'
  }
];

const selectedBank = ref('');
const selectedType = ref('');
const selectedAmount = ref('');

const banks = ['中国农业银行', '中国工商银行', '中国建设银行'];
const types = ['惠农贷', '农机贷', '养殖贷'];
const amounts = ['最高 500 万', '最高 300 万', '最高 200 万'];

const banksProducts = [
  {
    logo: 'src/icons/ABC_bank.svg',
    name: '中国农业银行 - 惠农贷',
    amount: '最高 500 万',
    rate: '3.85%',
    duration: '最长 3 年'
  },
  {
    logo: 'src/icons/ICBC_bank.svg',
    name: '中国工商银行 - 农机贷',
    amount: '最高 300 万',
    rate: '4.15%',
    duration: '最长 5 年'
  },
  {
    logo: 'src/icons/CCB_bank.svg',
    name: '中国建设银行 - 养殖贷',
    amount: '最高 200 万',
    rate: '4.35%',
    duration: '最长 2 年'
  }
];

const filteredProducts = computed(() => {
  return banksProducts.filter(product => {
    if (selectedBank.value && product.name.indexOf(selectedBank.value) === -1) return false;
    if (selectedType.value && product.name.indexOf(selectedType.value) === -1) return false;
    if (selectedAmount.value && product.amount !== selectedAmount.value) return false;
    return true;
  });
});

const loanTrendData = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
  datasets: [{
    label: '贷款金额（万元）',
    data: [900, 950, 970, 1000, 1200, 1300],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

const loanTypeDistribution = {
  labels: ['种植贷款', '农机贷款', '养殖贷款', '其他贷款'],
  datasets: [{
    data: [300, 200, 400, 100],
    backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384', '#E7E9ED']
  }]
};

const smartMatch = () => {
  // 处理智能匹配的逻辑
};

const apply = (product) => {
  // 处理申请产品的逻辑
};
</script>

<style scoped>
/* 更新英雄区域样式 */
.hero-section {
  background-image: url('@/assets/images/loanproducts_head.jpg'); /* 使用指定图片 */
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
  margin-right: 10px;
}

.hero-section button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #45a049;
}

/* 更新功能区样式 */
.features-container {
  background-color: #f9f9f9;
  padding: 0 150px; /* 上下为 0，左右为 150px */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.products-container {
  background-color: #f9f9f9;
  padding: 10px 10px; /* 上下为 0，左右为 100px */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.chart-item {
  background-color: #f9f9f9;
  display: inline-block;
  width: 49%;
}

/* 新增贷款产品筛选样式 */
.loan-product-filter {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.loan-product-filter-container {
  display: flex;
  justify-content: flex-end; /* 新增：使内容靠右对齐 */
}

.loan-product-filter select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
}

.loan-product-filter button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.loan-product-filter button:hover {
  background-color: #45a049;
}
</style>