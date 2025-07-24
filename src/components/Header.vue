<template>
  <header class="header">
    <div class="logo-nav-container">
      <img src="@/assets/images/logo.png" alt="农业贷款服务平台标志" class="logo-image">
      <nav>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/news">资讯中心</router-link></li>
          <!-- 其他导航项 -->
          <li><router-link to="/loan-products">贷款产品</router-link></li>
          <li><router-link to="#">申请指南</router-link></li>
          <li><router-link to="#">关于我们</router-link></li>
        </ul>
      </nav>
      <div class="actions">
        <button><router-link to="/login">登录</router-link></button>
        <button><router-link to="/register">注册</router-link></button> <!-- 添加注册链接 -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px; /* 修改: 增加左右内边距 */
  background-color: #f8f9fa; /* 更改背景颜色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

/* 修改: 图标样式 */
.logo-image {
  height: 40px; /* 调整图片高度以适应布局 */
  width: auto; /* 自动调整宽度保持比例 */
  margin-right: 80px; /* 修改: 进一步增加 logo 和导航栏之间的间距 */
}

/* 修改: 导航容器样式 */
.logo-nav-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none; /* 移除下划线 */
  color: #2c3e50; /* 设置初始颜色 */
  font-size: 16px;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #4CAF50; /* 链接悬停时的颜色 */
  text-decoration: none; /* 悬停时也移除下划线 */
}

/* 添加：处理 .actions 内部的 <router-link> 样式 */
.actions button a {
  text-decoration: none;
  color: inherit; /* 继承父元素颜色 */
}

.actions {
  display: flex;
  align-items: center;
  margin-left: auto; /* 修改: 确保 actions 右对齐 */
}

.actions button {
  border: 2px solid #4CAF50; /* 修改: 边框颜色改为绿色 */
  padding: 8px 16px; /* 修改: 缩小按钮大小 */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px; /* 修改: 减小字体大小 */
  margin: 4px 8px; /* 修改: 增加按钮间距 */
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.actions button:first-child { /* 登录按钮 */
  background-color: white; /* 修改: 登录按钮背景颜色改为白色 */
  color: #4CAF50; /* 修改: 登录按钮文本颜色改为绿色 */
}

.actions button:last-child { /* 注册按钮 */
  background-color: #4CAF50; /* 修改: 注册按钮背景颜色改为绿色 */
  color: white; /* 修改: 注册按钮文本颜色改为白色 */
}

.actions button:hover {
  background-color: #45a049; /* 按钮悬停时的颜色 */
}
</style>
<script setup lang="ts">
</script>