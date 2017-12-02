
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
      <div class="brand" v-if="brand != null">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;" @click="setBrand(null)">品牌：<em>{{ brand }}</em></a>
      </div>
      <div class="screen-size" v-if="screenSize != null">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;" @click="setScreenSize(null)">屏幕尺寸：<em>{{ screenSize }}</em></a>
      </div>
      <div class="operating-system" v-if="operatingSystem != null">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;" @click="setOperatingSystem(null)">操作系统：<em>{{ operatingSystem }}</em></a>
      </div>
      <div class="running-memory" v-if="runningMemory != null">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;" @click="setRunningMemory(null)">运行内存：<em>{{ runningMemory }}</em></a>
      </div>
      <div class="network-type" v-if="networkType != null">
        <span>&nbsp;&gt;&nbsp;</span>
        <a href="javascript:;" @click="setNetworkType(null)">网络类型：<em>{{ networkType }}</em></a>
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
    ]),

    methods: {
      ...mapActions([
        'setBrand',
        'setScreenSize',
        'setOperatingSystem',
        'setRunningMemory',
        'setNetworkType'
      ])
    }
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
    /*display: none;*/
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
