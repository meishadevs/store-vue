
<!-- 注册页的头部组件 -->

<template>
  <header class="register-head">
    <div class="logo-bar">
      <div class="inner-c clearfix">
        <div class="logo fl">
          <router-link to="/">电商网</router-link>
        </div>
        <h3>欢迎注册</h3>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

    //组件名称
    name: "RegisterHead"
  };
</script>

<style scoped>
  .register-head {
    width: 100%;
  }

  .logo-bar {
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
