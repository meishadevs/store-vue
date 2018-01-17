
<!-- 登录页的头部组件 -->

<template>
  <header class="login-head">
    <div class="logo-bar">
      <div class="inner-c clearfix">
        <div class="logo fl">
          <router-link to="/">电商网</router-link>
        </div>
        <h3>欢迎登录</h3>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

    //组件名称
    name: "LoginHead"
  };
</script>

<style scoped>
  .login-head {
    width: 100%;
  }

  .login-head .logo-bar {
    width: 100%;
    background-color: #1d7ad9;
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
