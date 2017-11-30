<!-- 导航栏组件 -->

<template>
  <nav class="navBar">

    <!-- 版心 s -->
    <div class="inner-c clearfix">

      <!-- 商品分类 s -->
      <div class="shopClass fl">
        <h3>全部商品分类</h3>
      </div>
      <!-- 商品分类 e -->

      <!-- 水平导航条 -->
      <ul class="nav fl clearfix">
        <li v-bind:class="{active: currentNavIndex == 1}" @click="changeNavIndex(1)"><router-link to="/cate">数码城</router-link></li>
        <li v-bind:class="{active: currentNavIndex == 2}" @click="changeNavIndex(2)"><router-link to="/cate">天黑黑</router-link></li>
        <li v-bind:class="{active: currentNavIndex == 3}" @click="changeNavIndex(3)"><router-link to="/cate">团购</router-link></li>
        <li v-bind:class="{active: currentNavIndex == 4}" @click="changeNavIndex(4)"><router-link to="/cate">发现</router-link></li>
        <li v-bind:class="{active: currentNavIndex == 5}" @click="changeNavIndex(5)"><router-link to="/cate">二手卖</router-link></li>
        <li v-bind:class="{active: currentNavIndex == 6}" @click="changeNavIndex(6)"><router-link to="/cate">名品会</router-link></li>
      </ul>
      <!-- 水平导航条 s -->

    </div>
    <!-- 版心 e -->

  </nav>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {

    //组件名称
    name: 'navBar',

    computed: mapState([
      //当前选中的导航项的索引
      //映射 this.currentNavIndex 为 store.state.currentNavIndex
      'currentNavIndex'
    ]),

    methods: {

      //使用对象展开运算符将此对象混入到外部对象中
      ...mapActions([

        //改变当前选中的导航项的索引
        'changeNavIndex'
      ])
    }
  };
</script>

<style scoped>
  .navBar {
    width: 100%;
    height: 35px;
    background-color: #1369c0;
    display: table;
  }

  .shopClass {
    float: left;
  }

  .shopClass h3 {
    width: 149px;
    height: 35px;
    padding-left: 40px;
    color: rgb(255, 255, 255);
    background: url(../assets/images/icon/arrow-down.png) 148px center no-repeat;
    font: 16px/35px 微软雅黑, "microsoft yahei";
  }

  .nav {
    float: left;
  }

  .nav li {
    width: 100px;
    height: 35px;
    font: 14px/35px 微软雅黑, "microsoft yahei";
    text-align: center;
    cursor: pointer;
    float: left;
  }

  .nav li:hover,
  .nav li.active {
    background-color: #4593fd;
  }

  .nav li a {
    width: 100px;
    height: 35px;
    color: #fff;
    display: block;
  }
</style>
