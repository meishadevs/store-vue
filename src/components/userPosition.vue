<!-- 用户位置组件 -->

<template>
  <section class="user-position">
    <div class="wrapper clearfix">
      <div class="product-type">
        <strong class="add-style">
          全部搜索结果
        </strong>
        <span>&nbsp;&gt;&nbsp;</span>
        <strong class="add-style">
          手机
        </strong>
      </div>
      <div class="brand">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;">品牌：<em>{{ brand }}</em></a>
      </div>
      <div class="screen-size">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;">屏幕尺寸：<em>{{ screenSize }}</em></a>
      </div>
      <div class="operating-system">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;">操作系统：<em>Android</em></a>
      </div>
      <div class="running-memory">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;">运行内存：<em>{{ runningMemory }}</em></a>
      </div>
      <div class="network-type">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;">网络类型：<em>{{ networkType }}</em></a>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'userPosition',

    computed: mapState([
      'brand',
      'screenSize',
      'operatingSystem',
      'runningMemory',
      'networkType'
    ])
  };
</script>

<style scoped>

  .wrapper {
    width: 959px;
    margin: 0 auto;
  }

  .user-position {
    margin: 25px 0 15px 0;
    font-size: 0;
  }

  .user-position em,
  .user-position a,
  .user-position span,
  .user-position strong {
    font-size: 12px;
    color: #000;
  }

  .product-type,
  .brand,
  .screen-size,
  .operating-system,
  .running-memory,
  .network-type {
    float: left;
  }

  .brand,
  .screen-size,
  .operating-system,
  .running-memory,
  .network-type {
    display: none;
  }

  .user-position a:hover {
    text-decoration: underline;
  }

  .add-style {
    cursor: pointer;
  }

  .add-style:hover {
    text-decoration: underline;
  }
</style>
