<template>

  <div class="page">
    <el-header :class="headerClass" class="page-header">
      <div class="logo-container">
        <div class="logo">
          <img src='@/assets/logo.png'/>
        </div>
      </div>
      <!--    <div class='page-title'>-->
      <!--      创意设计平台-->
      <!--    </div>-->

      <div class='header-search'>
        <input type='text' placeholder='创意/设计/灵感' />
        <div class='search-icon'>
          <search style="width: 1em; height: 1em; margin-right: 8px;color:#b2aeae" />
        </div>
      </div>
      <top-nav/>
      <i class="el-icon-menu"></i>
    </el-header>

    <el-main class="page-content" >
      <transition name="page-transition">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </el-main>

    <el-footer class="page-bottom">
      <t-p-footer/>
    </el-footer>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons";
import TPFooter from "@/platform/TPFooter";
import TopNav from "@/platform/TopNav";

export default {
  name: "WebLayout",
  components: {
    TopNav,
    TPFooter,
    Search,
  },
  data() {
    return {
      headerClass: "fixed",
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const threshold = 500; // 滚动阈值，根据需要调整

      if (window.pageYOffset < threshold) {
        this.headerClass = "fixed";
      } else {
        this.headerClass ="transparent";
      }
    },
  },
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

.page {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh; /* 设置元素高度为视口高度 */
  box-sizing: border-box; /* 确保元素的宽度和高度包括内边距和边框 */
}
.page-content {
  width: auto;
  margin : 0;
  padding : 0;
  height: auto;
  box-sizing: border-box; /* 确保元素的宽度和高度包括内边距和边框 */
  border: none; /* 移除边框 */
  overflow: hidden; /* 隐藏内容溢出部分，确保不出现滚动条 */
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  z-index: 999;
  backdrop-filter: blur(10px); /* 添加高斯模糊效果，值可根据需要进行调整 */
  transition: background-color 0.3s; /* 添加过渡效果 */
}

.transparent {
  /*background-color: transparent !important; !* 设置背景颜色为透明 *!*/
  background-color: rgba(95, 99, 100, 0.28) !important; /* 固定在顶部时设置背景颜色为不透明 */
}


.fixed {
  background-color: rgba(52, 181, 192, 1) !important; /* 固定在顶部时设置背景颜色为不透明 */
}

.page-bottom {
  width:100%;
  height: auto;
  background-color: #dcdcdc;
  /*max-width: 1200px;*/
}



.left,
.right {
  margin-bottom: 10px;
}

.left span,
.right span {
  display: block;
}

a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

a:hover {
  color: #fff;
}

.logo-container {
  width: 100%;
  text-align: center;
  align-items: center;
  margin-bottom: 10px; /* 添加一个底部间距 */
}

.logo {
  width: 250px;
  height: 100px;
  display: flex;
  margin-top: 10px; /* 添加一个顶部间距 */
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.page-title {
  font-size: 180%;
  /*font-family: '华文宋体';*/
  color: #ffffff;
  margin-left: 10px; /* 调整左边距为10px */
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  align-self: center; /* 使用 align-self 属性使其垂直居中 */
  margin-top: 10px; /* 添加顶部间距，与 logo 分隔开 */
}

.header-search{
  display: flex;
  margin-left: 100px;
  margin-right: 40px;
  height: 64px;
  align-items: center;
}
.header-search input{
  border-radius: 10px 0 0 10px;
  height:35px;
  width:220px;
  padding-left:10px;
  margin-left:20px;
  border:1px solid #ffffff;
}

.header-search .search-icon{
  width:33px;
  height:35px;
  background-color: #cee8ed;
  border-radius: 0 10px 10px 0px;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center;
}

.header-search .iconfont{
  font-size:24px;
  color:#fff;
}

@media screen and (max-width: 800px) {
  /*.page-header {*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/
  .logo-container {
    text-align: center;
    max-width:80%; /* 修改为80% */
  }
  .logo {
    display: inline-block;
    max-width:80%; /* 修改为80% */
  }
  .page-title{
    display:none; /* 隐藏搜索框 */
  }
  .header-search{
    display:none; /* 隐藏搜索框 */
  }
}

@media screen and (max-width:500px) { /* 添加一个媒体查询 */

  .logo{
    max-width:60%; /* 修改为60% */
  }
  .page-title{
    display:none; /* 隐藏搜索框 */
  }
  .header-search{
    display:none; /* 隐藏搜索框 */
  }
}

</style>

