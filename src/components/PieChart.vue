<template>
  <div ref="chart" :style="{ width: '100%', height: '300px' }"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const chart = ref(null);

onMounted(() => {
  const myChart = echarts.init(chart.value);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '贷款类型分布',
        type: 'pie',
        radius: '50%',
        data: props.data.datasets[0].data.map((value, index) => ({
          value,
          name: props.data.labels[index]
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option);
});
</script>

<style scoped>
/* 添加样式 */
</style>