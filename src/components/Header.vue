<template>
  <header class="header">
    <div class="logo-nav-container">
      <img src="@/assets/images/logo.png" alt="农业贷款服务平台标志" class="logo-image">
      <nav>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">贷款产品</a></li>
          <li><a href="#">申请指南</a></li>
          <li><a href="#">关于我们</a></li>
        </ul>
      </nav>
      <div class="actions">
        <button>登录</button>
        <button>注册</button>
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
  text-decoration: none;
  color: #2c3e50;
  font-size: 16px;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #4CAF50; /* 链接悬停时的颜色 */
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