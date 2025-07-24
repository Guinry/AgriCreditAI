<template>
  <div class="news-page">
    <Header />

    <section class="hero-section">
      <h1>创新金融科技，服务三农发展</h1>
      <p>运用科技手段，提供智能化金融服务，助力农业现代化</p>
    </section>

    <section class="agricultural-news">
      <h2>最新农业资讯</h2>
      <van-row gutter="20">
        <van-col span="8" v-for="(item, index) in agricultureNews" :key="index">
          <van-card
              :desc="item.desc"
              :title="item.title"
              :thumb="item.thumb"
              @click="navigateToFullArticle(item.link)"
          >
            <template #footer>
              <span class="read-more">阅读全文 →</span>
            </template>
          </van-card>
        </van-col>
      </van-row>
    </section>

    <!-- 助农贷款资讯 -->
    <section class="loan-news">
      <h2>助农贷款资讯</h2>
      <van-list>
        <van-cell
            v-for="(loanItem, index) in loanNews"
            :key="index"
            :title="loanItem.title"
            :label="loanItem.date"
            is-link
            @click="navigateToFullArticle(loanItem.link)"
        >
          <template #icon>
            <img :src="loanItem.thumb" alt="Loan Image" style="width: 60px; height: 60px;" />
          </template>
        </van-cell>
      </van-list>
    </section>

    <!-- 分页 -->
    <div class="pagination-container">
      <van-pagination
          v-model="currentPage"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          @change="handlePageChange"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue'; // 引入 Header 组件
import Footer from '@/components/Footer.vue'; // 引入 Footer 组件
import { Card as VanCard, Col as VanCol, Row as VanRow, Cell as VanCell, List as VanList, Pagination as VanPagination } from 'vant';

const currentPage = ref(1);
const totalItems = ref(10);
const itemsPerPage = ref(5);

const agricultureNews = [
  {
    title: '国家农业政策解读',
    desc: '近日，国务院发布《关于全面推进乡村振兴加快农业农村现代化的意见》，提出了一系列支持农业发展的新政...',
    thumb: 'https://placehold.co/200x200?text=Policy+Image',
    link: '#'
  },
  {
    title: '最新助农政策出台',
    desc: '农业农村部联合财政部推出新一轮助农补贴政策，涉及种植业、养殖业等多个领域，惠及广大农户。',
    thumb: 'https://placehold.co/200x200?text=Policy+Image',
    link: '#'
  },
  {
    title: '智慧农业发展新趋势',
    desc: '随着5G技术和物联网的应用，智慧农业正在迅速发展。大数据分析和人工智能正在改变传统农业生产方式。',
    thumb: 'https://placehold.co/200x200?text=Policy+Image',
    link: '#'
  }
];

const loanNews = [
  {
    title: '农业经营主体贷款支持计划',
    date: '2024-03-15',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  },
  {
    title: '农业科技贷款额度提升',
    date: '2024-03-10',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  },
  {
    title: '乡村振兴专项贷款计划',
    date: '2024-03-05',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  },
  {
    title: '农业保险贷款联动项目',
    date: '2024-02-28',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  },
  {
    title: '绿色农业贷款政策',
    date: '2024-02-20',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  },
  {
    title: '种植业补贴贷款方案',
    date: '2024-02-15',
    thumb: 'https://placehold.co/60x60?text=Loan+Image',
    link: '#'
  }
];

const navigateToFullArticle = (link) => {
  window.location.href = link;
};

const handlePageChange = (page) => {
  console.log('Page changed to:', page);
  // Handle pagination logic here
};
</script>

<style scoped>
/* 更新英雄区域样式 */
.hero-section {
  background-image: url('@/assets/images/news_head.jpg'); /* 使用指定图片 */
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

.agricultural-news,
.loan-news {
  padding: 20px;
}

.read-more {
  color: #07c160;
  cursor: pointer;
}

/* 新增样式 */
.agricultural-news .van-card {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.agricultural-news .van-card:hover {
  transform: translateY(-5px);
}

.agricultural-news .van-card__title {
  font-size: 18px;
  margin-bottom: 10px;
}

.agricultural-news .van-card__desc {
  font-size: 14px;
  color: #666;
}

.agricultural-news .van-card__thumb {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.agricultural-news .van-card__footer {
  padding: 10px;
  border-top: 1px solid #eee;
}

.agricultural-news .read-more {
  display: block;
  text-align: right;
}

/* 助农贷款资讯样式 */
.loan-news {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.loan-news .van-cell {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.loan-news .van-cell:hover {
  transform: translateY(-3px);
}

.loan-news .van-cell__title {
  font-size: 16px;
  color: #333;
}

.loan-news .van-cell__label {
  font-size: 14px;
  color: #666;
}

.loan-news .van-cell__icon img {
  vertical-align: middle;
  margin-right: 10px;
}
</style>