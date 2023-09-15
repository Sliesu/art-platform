<template>
  <div class="page">
    <div class="content">
      <div class="branding">
        <h1 class="rainbow">彩虹云</h1>
        <h1> 创意设计平台</h1>
        <p @click="redirectToLogin">立即进入></p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "HomePage",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },

  methods: {
    methods: {
      redirectToLogin() {
        window.location.href = '/login2';
      }
    },
    toRegister() {
      this.$router.push('/register');
    }
  }
}
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
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
}

.branding {
  text-align: center;
  color: #fff;
}

.rainbow {
  font-size: 120px;
  margin-bottom: -80px; /* 调整便签之间的下边距 */
  background: linear-gradient(45deg, #0048ff, #0080ff, #00b8ff, #00f0ff, #00ffed, #00ffca, #00ffa7, #00ff84, #00ff61, #00ff3e, #00ff1b, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.branding h1 {
  font-size: 120px;

}
.branding p {
  font-size: 35px;
  color: rgba(190, 190, 190, 0.85);
}


</style>
