<template>
  <div class="loan-calculator">
    <input type="number" v-model="loanAmount" placeholder="贷款金额（万元）">
    <input type="number" v-model="loanTerm" placeholder="贷款期限">
    <input type="number" v-model="interestRate" placeholder="年利率">
    <select v-model="repaymentMethod">
      <option value="等额本息">等额本息</option>
      <option value="等额本金">等额本金</option>
    </select>
    <button @click="calculate">计算还款</button>
    <p>每月还款额：{{ monthlyPayment }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const loanAmount = ref(0);
const loanTerm = ref(0);
const interestRate = ref(0);
const repaymentMethod = ref('等额本息');

const monthlyPayment = computed(() => {
  // 计算公式...
  return 0;
});

function calculate() {
  // 计算逻辑...
}
</script>

<style scoped>
.loan-calculator {
  max-width: 400px;
  margin: 0 auto;
}

.loan-calculator input,
.loan-calculator select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.loan-calculator button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.loan-calculator p {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>