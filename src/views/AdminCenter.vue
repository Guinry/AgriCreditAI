<template>
  <div class="admin-center">
    <!-- 左侧导航栏 -->
    <aside class="sidebar">
      <ul>
        <li :class="{ active: currentTab === '农户信用评分' }" @click="currentTab = '农户信用评分'">农户信用评分</li>
        <li :class="{ active: currentTab === '贷款产品管理' }" @click="currentTab = '贷款产品管理'">贷款产品管理</li>
        <li :class="{ active: currentTab === '银行用户管理' }" @click="currentTab = '银行用户管理'">银行用户管理</li>
        <li :class="{ active: currentTab === '数据监控' }" @click="currentTab = '数据监控'">数据监控</li>
      </ul>
    </aside>

    <!-- 右侧内容区域 -->
    <main class="content">
      <h2>{{ currentTab }}</h2>

      <!-- 农户信用评分内容 -->
      <div v-if="currentTab === '农户信用评分'" class="credit-score-section">
        <div class="stats">
          <div class="stat-item">
            <van-icon name="contact" />
            <p>总农户数</p>
            <h3>12,458</h3>
            <span>+8.2% 较上月</span>
          </div>
          <div class="stat-item">
            <van-icon name="gold-coin" />
            <p>平均信用分</p>
            <h3>726</h3>
            <span>+2.4% 较上月</span>
          </div>
        </div>

        <div class="chart-container">
          <div id="creditScoreChart"></div>
        </div>

        <div class="recent-records">
          <h3>最近评分记录</h3>
          <table>
            <thead>
            <tr>
              <th>农户姓名</th>
              <th>身份证号</th>
              <th>信用评分</th>
              <th>评分时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(record, index) in recentRecords" :key="index">
              <td>{{ record.name }}</td>
              <td>{{ record.idCard }}</td>
              <td>{{ record.score }}</td>
              <td>{{ record.time }}</td>
              <td>
                <van-icon name="edit" />
                <van-icon name="delete" />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';

const currentTab = ref('农户信用评分');

const recentRecords = [
  {
    name: '赵建国',
    idCard: '330106198505153245',
    score: 785,
    time: '2023-08-15 14:30:25'
  },
  // 其他记录...
];

onMounted(() => {
  nextTick(() => { // 确保 DOM 渲染完成后再初始化 ECharts
    const chartDom = document.getElementById('creditScoreChart');
    if (chartDom && chartDom.clientWidth > 0 && chartDom.clientHeight > 0) { // 检查 chartDom 是否存在且尺寸有效
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
          data: ['500-550', '551-600', '601-650', '651-700', '701-750', '751-800', '801-850', '851-900']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130, 50],
          type: 'bar'
        }]
      };
      myChart.setOption(option);
    } else {
      console.error('Chart container not found or has invalid dimensions!');
    }
  });
});
</script>

<style scoped>
.admin-center {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
}

.sidebar li.active {
  background-color: #e9ecef;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.chart-container {
  height: 400px; /* 确保有明确的高度 */
  width: 100%; /* 确保有明确的宽度 */
  margin-bottom: 20px;
}

.recent-records table {
  width: 100%;
  border-collapse: collapse;
}

.recent-records th, .recent-records td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>