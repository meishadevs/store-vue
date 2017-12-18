
<!-- 登录页的头部组件 -->

<template>
  <header class="login-header">
    <div class="logo-bar">
      <div class="inner-c clearfix">
        <div class="logo fl">
          <router-link to="/">慕课网</router-link>
        </div>
        <h3>欢迎登录</h3>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>
  .login-header {
    width: 100%;
    height: 85px;
    display: table;
  }

  .login-header .logo-bar {
    width: 100%;
    height: 87px;
    background-color: #1d7ad9;
    display: table;
  }

  .logo-bar .logo {
    padding-top: 14px;
    padding-left: 390px;
  }

  .logo-bar .logo a {
    width: 112px;
    height: 59px;
    background: url(../../static/images/logo.png) no-repeat;
    text-indent: -1000px;
    float: left;
  }

  .logo-bar h3 {
    margin-left: 22px;
    color: rgb(255, 255, 255);
    float: left;
    font: 22px/87px 微软雅黑, "microsoft yahei";
  }
</style>
