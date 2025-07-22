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
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: props.data.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data.datasets[0].data,
        type: 'line',
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
});
</script>

<style scoped>
/* 添加样式 */
</style>