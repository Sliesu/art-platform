<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left">
        <h3 class="footer-title">彩虹云创意设计平台</h3>
        <p class="footer-contact">联系方式：yihang_0913@qq.com</p>
      </div>
      <div class="right">
        <p class="footer-link">相关链接：</p>
        <ul class="footer-menu">
          <li><a href="#">首页</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">服务</a></li>
          <li><a href="#">作品案例</a></li>
          <li><a href="#">联系我们</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {

  width:100%;
  height: auto;

}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
}

.footer-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-contact {
  color: #888;
}

.footer-link {
  margin-bottom: 10px;
}

.footer-menu {
  list-style: none;
  padding: 0;
}

.footer-menu li {
  display: inline-block;
  margin-right: 10px;
}

.footer-menu li:last-child {
  margin-right: 0;
}

.footer-menu a {
  color: #333;
  text-decoration: none;
}

.footer-menu a:hover {
  color: #000;
}
</style>
