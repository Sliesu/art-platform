<template>
  <div class="common-layout">
    <!-- 使用 el-container 组件 -->
    <el-container>
      <!-- 使用 el-header 组件 -->
      <el-header class="page-header">
        <!-- 在 header 中添加 logo 和导航栏 -->
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div class="nav">
          <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">课程</el-menu-item>
            <el-menu-item index="3">教师</el-menu-item>
            <el-menu-item index="4">关于</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <!-- 使用 el-main 组件 -->
      <el-main class="page-content">
        <!-- 在 main 中添加轮播图和课程列表 -->
        <div class="carousel">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="courses">
          <h2>精选课程</h2>
          <el-row :gutter="20">
            <el-col :span="6" v-for="(course, index) in courses" :key="index">
              <div class="course-card">
                <img :src="course.image" alt="course image" />
                <h3>{{ course.name }}</h3>
                <p>{{ course.description }}</p>
                <span>{{ course.price }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <!-- 使用 el-footer 组件 -->
      <el-footer class="page-footer">
        <!-- 在 footer 中添加版权信息和友情链接 -->
        <div class="footer-left">
          <p>© 2023 教学平台. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <p>友情链接：</p>
          <ul>
            <li><a href="#">必应搜索</a></li>
            <li><a href="#">Element UI</a></li>
            <li><a href="#">Vue.js</a></li>
          </ul>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  data() {
    return {
      activeIndex: "1", // 当前激活的导航栏索引
      carouselItems: [ // 轮播图数据
        {
          title: "欢迎来到教学平台",
          content: "这里有最优质的课程和最专业的教师，让你轻松学习新知识"
        },
        {
          title: "掌握最新的技术",
          content: "我们提供最前沿的技术课程，让你跟上时代的步伐"
        },
        {
          title: "享受最佳的体验",
          content: "我们的平台采用最先进的设计和开发，让你感受最流畅的操作和最美观的界面"
        }
      ],
      courses: [ // 课程数据
        {
          name: "Vue.js入门",
          description: "学习Vue.js的基本概念和用法，掌握数据绑定、组件、路由等功能",
          image: "@/assets/vue.png",
          price: "免费"
        },
        {
          name: "Element UI实战",
          description: "学习Element UI的常用组件和布局方式，快速搭建美观的网页界面",
          image: "@/assets/element.png",
          price: "免费"
        },
        {
          name: "JavaScript高级",
          description: "学习JavaScript的高级特性和语法，深入理解原型、闭包、异步等概念",
          image: "@/assets/js.png",
          price: "99元"
        },
        {
          name: "HTML5与CSS3",
          description: "学习HTML5和CSS3的新特性和标准，创建符合规范的网页文档和样式",
          image: "@/assets/html.png",
          price: "49元"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
/* 设置网页的根元素占满整个视口的宽度 */
html, body {
  width: 100%;
}

/* 设置网页的所有元素为零边距 */
* {
  margin: 0;
}

/* 设置网页的所有元素为边框盒模型 */
* {
  box-sizing: border-box;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #34b5c0;
}

.logo {
  width: 200px;
  height: 80px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.nav {
  width: 500px;
}

.nav .el-menu {
  background-color: transparent;
}

.nav .el-menu-item {
  color: white;
}

.nav .el-menu-item.is-active {
  color: #34b5c0;
  background-color: white;
}

.page-content {
  min-height: calc(100vh - 160px); /* 设置最小高度为视口高度减去 header 和 footer 的高度 */
}

.carousel {
  margin-top: 20px;
}

.carousel h3 {
  color: white;
}

.carousel p {
  color: white;
}

.courses {
  margin-top: 20px;
}

.courses h2 {
  text-align: center;
}

.course-card {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px; /* 添加阴影效果 */
}

.course-card img {
  width: 100%;
  height: auto;
}

.course-card h3 {
  text-align: center;
}
.course-card p {
  margin: 10px;
  font-size: 14px;
  color: #666;
}

.course-card span {
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #34b5c0;
}
</style>
