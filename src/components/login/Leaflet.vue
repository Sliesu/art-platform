<template>
  <div class="page">
    <div class="content">
      <div class="branding">
        <h1 class="rainbow">彩虹云</h1>
        <h1 class="title">创意设计平台</h1>
        <p class="enter" @click="redirectToLogin">立即进入></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    redirectToLogin() {
      window.location.href = '../home';
    },
  },
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

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.branding {
  text-align: center;
}

.rainbow {
  font-size: 120px;
  align-items: center;
  margin-bottom: -80px; /* 调整标签之间的下边距 */
  background: linear-gradient(
      45deg,
      #0048ff,
      #0080ff,
      #00b8ff,
      #00f0ff,
      #00ffed,
      #00ffca,
      #00ffa7,
      #00ff84,
      #00ff61,
      #00ff3e,
      #00ff1b,
      #00ff00
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title{
  color:#ffffff;
  align-items: center;
  font-size: 120px;
}


.branding p.enter {
  font-size: 35px;
  color: rgba(190, 190, 190, 0.85);
  cursor: pointer;
  align-items: center;
}

@media screen and (max-width:800px) {
  .title {
    color: #ffffff;
    align-items: center;
    font-size: 10vw; /* 使用vw单位，按照视口宽度的10%来调整字体大小 */
  }

  .branding p.enter {
    font-size: 5vw; /* 使用vw单位，按照视口宽度的3.5%来调整字体大小 */
    color: rgba(190, 190, 190, 0.85);
    cursor: pointer;
    align-items: center;
    /*position: relative; !* 设置相对定位 *!*/
    transform: translateY(200px); /* 设置垂直方向的平移变换 */
    margin-top: auto; /* 设置自动的上边距 */
  }

  .rainbow {
    font-size: 20vw; /* 使用vw单位，按照视口宽度的10%来调整字体大小 */
    align-items: center;
    margin-bottom: -6.7vw; /* 调整标签之间的下边距 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
