
<!-- 商品信息展示页的导航栏组件 -->

<template>
  <nav class="proinfo-nav-bar">
    <ul class="nav clearfix">
      <li v-bind:class="{active: curIndex == 1}" @click="changeNavIndex(1)">
        <span class="intro"></span>
        商品介绍
      </li>
      <li v-bind:class="{active: curIndex == 2}" @click="changeNavIndex(2)">
        <span class="appra"></span>
        商品评价
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

  // 组件名称
  name: 'ProinfoNavBar',

  // 获取从父组件中传递过来的数据
  props: ['selectIndex'],

  data() {
    return {
      curIndex: 0
    }
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      this.curIndex = this.selectIndex
    })
  },

  methods: {

    // 改变导航项
    changeNavIndex: function(index) {
      this.curIndex = index
      this.bus.$emit('select-nav', this.curIndex)
    }
  }
}
</script>

<style lang="less" scoped>
  .proinfo-nav-bar ul {
    width: 786px;
  }

  .proinfo-nav-bar li {
    width: 393px;
    height: 42px;
    font: 14px/42px "宋体", "SimSun";
    background-color: #F3F3F3;
    text-align: left;
    border-bottom: solid 1px #ccc;
    cursor: pointer;
    color: #000;
    float: left;
  }

  .proinfo-nav-bar .nav li.active {
    background-color: #0479CA;
    color: #fff;
  }

  .proinfo-nav-bar .intro,
  .proinfo-nav-bar .appra {
    width: 40px;
    height: 35px;
    margin: 3px 10px 0 128px;
    float: left;
  }

  .proinfo-nav-bar li .intro {
    background: url("~@/assets/images/icon/intro.png") right center no-repeat;
  }

  .proinfo-nav-bar li.active .intro {
    background: url("~@/assets/images/icon/intro-active.png") right center no-repeat;
  }

  .proinfo-nav-bar li .appra {
    background: url("~@/assets/images/icon/appra.png") right center no-repeat;
  }

  .proinfo-nav-bar li.active .appra {
    background: url("~@/assets/images/icon/appra-active.png") right center no-repeat;
  }
</style>
