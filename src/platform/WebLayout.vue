<template>

  <div class="common-layout">
  <el-header :class="headerClass" class="page-header">
      <div class="logo-container">
        <div class="logo">
          <img src='@/assets/logo.png'/>
        </div>
      </div>
      <!-- <div class='page-title'>
        彩虹云平台
      </div> -->
      <div class='header-search'>
        <input type='text' placeholder='创意/设计/灵感' />
        <div class='search-icon'>
          <search style="width: 1em; height: 1em; margin-right: 8px;color:#b2aeae" />
        </div>
      </div>

      <div :class="topnav" class="topnav" id="myTopnav">
        <i class="el-icon-search"></i>
        <router-link to="/home" active-class="active">首页</router-link>
        <router-link to="/leaflet" active-class="active">宣传页</router-link>
        <router-link to="/platform/teachingfile" active-class="active">创意作品</router-link>
        <router-link to="/usercenter/CourseInfo" active-class="active">我的信息</router-link>
        <router-link to="/login" active-class="active">登录/注册</router-link>
        <a href="javascript:void(0);" class="icon" @click="myFunction()">
          <i class="el-icon-menu"></i>
        </a>
      </div>
    </el-header>

    <el-main class="page-content">
      <transition name="page-transition">
        <keep-alive v-if="keepAlive">
          <router-view name="default" />
        </keep-alive>
        <router-view v-else />
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

export default {
  name: "WebLayout",
  components: {
    TPFooter,
    Search,
  },
  data() {
    return {
      headerClass: "transparent",
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const threshold = 200; // 滚动阈值，根据需要调整

      if (window.pageYOffset > threshold) {
        this.headerClass = "transparent";
      } else {
        this.headerClass ="fixed";
      }
    },
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh; /* 设置元素高度为视口高度 */
  box-sizing: border-box; /* 确保元素的宽度和高度包括内边距和边框 */
}
.page-content {
  width: 100%;
  padding: 0;
  margin: 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 250px;
  height: 100px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.page-title{
  font-size:180%;
  /*font-family: '华文宋体';*/
  color: #ffffff;
  margin-left:20px;
  font-weight: bold;
}
.header-search{
  display: flex;
  margin-left: 550px;
  height: 64px;
  align-items: center;
}
.header-search input{
  border-radius: 10px 0 0 10px;
  height:33px;
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

.topnav {
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap; /* 禁止导航栏换行 */
}

.topnav a {
  display: inline-block;
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  line-height: 60px;
}



.topnav a:hover {
  background-color: rgba(201, 201, 201, 0.49);
  color: rgba(46, 160, 185, 0.71);
  font-weight: bold;
}

.topnav a.active {
  background-color: #25afcb;
  color: white;
  font-weight: bold;
}

.topnav .icon {
  display: none;
}


@media screen and (max-width: 500px) {
  .topnav.responsive {
    display: none;
  }
  .page-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-container {
    text-align: center;
  }
  .logo {
    display: inline-block;
  }
}
.topnav a.scrolled {
  color: black; /* 设置滚动后的字体颜色 */
}

</style>

