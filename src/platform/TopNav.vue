<template>
  <div class="topnav" :class="{ responsive: isResponsive }" id="navBar">
    <el-dropdown trigger="click" class="icon">
      <div class="icon-wrapper">
        <el-icon class="fold-icon"><Fold /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="dropdown-item">
            <router-link to="/home">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item class="dropdown-item">
            <router-link to="/leaflet">宣传页</router-link>
          </el-dropdown-item>
          <el-dropdown-item class="dropdown-item">
            <router-link to="/platform/teachingfile">创意作品</router-link>
          </el-dropdown-item>
          <el-dropdown-item class="dropdown-item">
            <router-link to="/usercenter/CourseInfo">我的信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item class="dropdown-item">
            <router-link to="/login">登录/注册</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <i class="el-icon-search"></i>
    <router-link to="/home" active-class="active">首页</router-link>
    <router-link to="/leaflet" active-class="active">宣传页</router-link>
    <router-link to="/platform/teachingfile" active-class="active">创意作品</router-link>
    <router-link to="/usercenter/CourseInfo" active-class="active">我的信息</router-link>
    <router-link to="/login" active-class="active">登录/注册</router-link>
  </div>
</template>

<script>
import { Fold } from "@element-plus/icons";
export default {
  name: "TopNav",
  components: {
    Fold,
  },
  data() {
    return {
      isResponsive: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isResponsive = window.innerWidth <= 1200;
    },
  },
};
</script>

<style scoped>
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

.icon-wrapper {
  width: 40px;
  height: 89px; /* 设置与 <el-header> 相同的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(82, 81, 81, 0.49);
  transform: translateY(-29px);
}

.topnav .icon {
  display: none;
}

.topnav.responsive .icon {
  position: absolute;
  display: flex;
  right: 0; /* 修改为left */
  top: calc(55% - (40px /2)); /* 修改为居中对齐 */
}

.topnav .fold-icon {
  color: white;
  font-size:30px; /* 修改为30px */
}

.topnav.responsive a {
  display:none; /* 修改为none */
}
.dropdown-item a {
  text-decoration: none;
  color: #25afcb;
}

.dropdown-item a:active {
  color: #0f65da;
}

@media screen and (max-width:1200px) { /* 修改为1200px */
  .topnav .icon{
    display:block; /* 修改为block */
  }
}
</style>
