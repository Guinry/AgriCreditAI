<template>
  <div class="bank-center">
    <!-- 左侧导航栏 -->
    <aside class="sidebar">
      <ul>
        <li :class="{ active: currentTab === '贷款产品管理' }" @click="currentTab = '贷款产品管理'">贷款产品管理</li>
        <li :class="{ active: currentTab === '贷款申请审批' }" @click="currentTab = '贷款申请审批'">贷款申请审批</li>
        <li :class="{ active: currentTab === '贷款需求查看' }" @click="currentTab = '贷款需求查看'">贷款需求查看</li>
      </ul>
    </aside>

    <!-- 右侧内容区域 -->
    <main class="content">
      <h2>{{ currentTab }}</h2>

      <!-- 贷款产品管理内容 -->
      <div v-if="currentTab === '贷款产品管理'" class="loan-products-management">
        <button class="add-product-btn" @click="addProduct">+ 新增贷款产品</button>

        <table class="loan-products-table">
          <thead>
            <tr>
              <th>产品名称</th>
              <th>利率</th>
              <th>期限</th>
              <th>额度范围</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in displayedProducts" :key="index">
              <td>{{ product.name }}</td>
              <td>{{ product.rate }}</td>
              <td>{{ product.term }}</td>
              <td>{{ product.amountRange }}</td>
              <td>
                <button class="edit-btn" @click="editProduct(product)">修改</button>
                <button class="delete-btn" @click="deleteProduct(product)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="pagination">
          <button :disabled="currentPage === 1" @click="prevPage">上一页</button>
          <span>第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
          <button :disabled="currentPage === totalPages" @click="nextPage">下一页</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentTab = ref('贷款产品管理');

const loanProducts = ref([
  {
    name: '个人信用贷款',
    rate: '4.5%',
    term: '12-36个月',
    amountRange: '5万-50万'
  },
  {
    name: '房屋抵押贷款',
    rate: '3.8%',
    term: '1-20年',
    amountRange: '50万-500万'
  },
  {
    name: '小微企业贷款',
    rate: '5.2%',
    term: '6-24个月',
    amountRange: '10万-200万'
  },
  {
    name: '汽车消费贷款',
    rate: '4.8%',
    term: '12-60个月',
    amountRange: '10万-100万'
  },
  {
    name: '装修分期贷款',
    rate: '5.5%',
    term: '12-48个月',
    amountRange: '5万-80万'
  }
]);

const itemsPerPage = ref(5);
const currentPage = ref(1);

const totalItems = computed(() => loanProducts.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return loanProducts.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const addProduct = () => {
  // 添加产品逻辑
};

const editProduct = (product) => {
  // 编辑产品逻辑
};

const deleteProduct = (product) => {
  // 删除产品逻辑
};
</script>

<style scoped>
.bank-center {
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

.loan-products-management {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-product-btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.loan-products-table {
  width: 100%;
  border-collapse: collapse;
}

.loan-products-table th,
.loan-products-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.loan-products-table th {
  background-color: #f2f2f2;
}

.edit-btn,
.delete-btn {
  background-color: transparent;
  border: none;
  color: #28a745;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
}

.delete-btn {
  color: #dc3545;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>