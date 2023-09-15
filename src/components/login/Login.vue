<template>
  <body class="page">
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>用户登录</span>
        <el-button class="button" text>统一身份认证平台</el-button>
      </div>
    </template>
    <div class="login_container">
      <!-- 登录表单区域 -->
      <el-form size="large">
        <!-- 用户名 -->
        <el-form-item class="form-item">
          <div class="input-with-icon">
            <el-icon class="user-icon" name="el-icon-user"><User /></el-icon>
            <el-input placeholder="用户名" v-model="username" id="input"></el-input>
          </div>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item class="form-item">
          <div class="input-with-icon">
            <el-icon class="lock-icon" name="el-icon-lock"><Lock/></el-icon>
            <el-input placeholder="密码" show-password v-model="password" id="input"></el-input>
          </div>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item class="form-item">
          <div class="input-with-icon">
            <el-icon class="edit-icon" name="el-icon-edit"><Edit/></el-icon>
            <el-input class="code" placeholder="验证码" v-model="code" id="input"></el-input>
            <a>
              <img/>
            </a>
          </div>
        </el-form-item>
        <!-- 记住我 -->
        <el-form-item>
          <el-checkbox label="记住我" class="rememberMe"></el-checkbox>
        </el-form-item>

      </el-form>
      <Particles />
      <!-- 登录按钮 -->
      <el-form-item style="justify-content: center;display: flex;">
        <el-button type="primary" >登 录</el-button>
      </el-form-item>
    </div>

  </el-card>
  </body>
</template>

<script>
import Particles from './Particles.vue';
import {User} from "@element-plus/icons";
import {Lock} from "@element-plus/icons";
import {Edit} from "@element-plus/icons";
export default {
  name: 'LoginPage',
  components: {
    Particles,
    User,
    Lock,
    Edit
  },
  data(){
    return{
      username: '',
      password: '',
      code:'',
    }
  }

};
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("@/assets/loginBackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.login_container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 400px;
  flex-direction: column;
  align-items: center;
}

.box-card {
  background-color: rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(10px);
  float: left;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  font-size: 14px;
}

.code {
  flex: 1;
}

.rememberMe {
  margin-left: 0;
}


.form-item {
  display: flex;
  align-items: center;
}

#input{
  width: 400px;
}

.input-with-icon {
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 20px;
}

.user-icon,
.lock-icon,
.edit-icon {
  margin-right: 20px;
  font-size: 20px;
}
</style>
