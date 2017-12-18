
<!-- 注册页的头部组件 -->

<template>
  <header class="register-header">
    <div class="logo-bar">
      <div class="inner-c clearfix">
        <div class="logo fl">
          <router-link to="/">慕课网</router-link>
        </div>
        <h3>欢迎注册</h3>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'registerHeader'
  };
</script>

<style scoped>
  @media (max-width: 1006px) {
    body {
      display: table;
    }
  }

  .register-header {
    width: 100%;
    display: table;
  }

  .logo-bar {
    height: 85px;
    background-color: #1D7AD9;
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
    font: 22px/87px "微软雅黑", "microsoft yahei";
    color: #fff;
    float: left;
  }
</style>
