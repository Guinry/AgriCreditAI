<template>
  <div class="loan-calculator-container">
    <div class="loan-calculator">
      <div class="input-group-container top-container">
        <div class="input-group top-group">
          <label>贷款金额（万元）</label>
          <input type="number" v-model="loanAmount" placeholder="万元" value="">
        </div>
        <div class="input-group top-group">
          <label>贷款期限</label>
          <input type="number" v-model="loanTerm" placeholder="年" value="">
        </div>
      </div>
      <div class="input-group-container bottom-container">
        <div class="input-group bottom-group">
          <label>年利率</label>
          <input type="number" v-model="interestRate" placeholder="%" step="0.01" value="3.85">
        </div>
        <div class="input-group bottom-group">
          <label>还款方式</label>
          <select v-model="repaymentMethod">
            <option value="等额本息">等额本息</option>
            <option value="等额本金">等额本金</option>
          </select>
        </div>
      </div>
      <button @click="calculate">计算还款</button>
      <p>每月还款额：{{ monthlyPayment }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const loanAmount = ref(''); // 修改: 初始值设为空
const loanTerm = ref(''); // 修改: 初始值设为空
const interestRate = ref('3.85');
const repaymentMethod = ref('等额本息');
const loanRepaymentPeriod = ref(1);

const monthlyPayment = computed(() => {
  if (!loanAmount.value || !loanTerm.value || !interestRate.value) {
    return '0.00'; // 修改: 默认值改为 '0.00'
  }
  const principal = parseFloat(loanAmount.value) * 10000; // 贷款金额转换为元
  const rate = parseFloat(interestRate.value) / 100 / 12; // 月利率
  const n = parseFloat(loanTerm.value) * 12; // 总期数（月）

  let payment = 0;
  if (repaymentMethod.value === '等额本息') {
    payment = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
  } else if (repaymentMethod.value === '等额本金') {
    payment = (principal / n) + (principal - (principal * (loanRepaymentPeriod.value - 1)) / n) * rate;
  }
  return payment.toFixed(2); // 修改: 保留两位小数
});

function calculate() {
  // 更新还款期数（用于等额本金计算）
  loanRepaymentPeriod.value = 1;
}
</script>

<style scoped>
.loan-calculator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.loan-calculator {
  width: 700px; /* 放大宽度 */
  height: 300px; /* 放大高度 */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.input-group-container {
  display: flex;
  justify-content: space-between; /* 水平方向上有一定距离 */
  align-items: center; /* 添加：垂直居中 */
  margin-bottom: 15px; /* 修改：减少底部间距 */
}

.top-container, .bottom-container {
  width: 100%;
}

.input-group {
  width: calc(50% - 20px); /* 确保两个输入框各占一半宽度并留出更多间距 */
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 18px; /* 增加标签字体大小 */
}

.loan-calculator input {
  width: 90%;
  padding: 15px; /* 增加内边距 */
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px; /* 增加字体大小 */
}

.loan-calculator select {
  width: 100%;
  padding: 15px; /* 增加内边距 */
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 18px; /* 增加字体大小 */
}

.loan-calculator button {
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 15px; /* 修改：减少顶部间距 */
  font-size: 18px; /* 修改：字体稍微放大 */
}

.loan-calculator button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.loan-calculator p {
  margin-top: 15px; /* 修改：减少顶部间距 */
  font-size: 20px; /* 增加字体大小 */
  font-weight: bold;
}
</style>