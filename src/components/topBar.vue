
<!-- 顶部通栏组件 -->

<template>
  <div class="topbar">
    <div class="inner-c clearfix">
      <div class="left-area">
        <a href="javascript:;" class="collection" @click="showMask()">收藏慕课</a>
      </div>
      <div class="right-area">
        <!-- 如果用户登录了 e -->
        <div v-if="isLogin">
          欢迎<a class="show-username" href="javascript:;">{{ username }}</a>来到慕课网&nbsp;<a class="exit" href="javascript:;" @click="exit()">[退出]</a>
        </div>
        <!-- 如果用户登录了 e -->
        <!-- 如果用户没有登录 s-->
        <div v-else>
          欢迎来到慕课网
          <router-link class="login-link" to="/login">[登录]</router-link>
          <router-link class="register-link" to="/register">[免费注册]</router-link>
        </div>
        <!-- 如果用户没有登录 e -->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {

    //设置组件名称
    name: 'topBar',

    data() {
      return {
      };
    },

    computed: mapState([

      //用户名
      //映射 this.username 为 store.state.username
      'username',

      //是否登录了
      //映射 this.isLogin 为 stote.state.isLogin
      'isLogin'
    ]),

    methods: {
      //使用对象展开运算符将此对象混入到外部对象中
      ...mapActions([

        //显示模板
        'showMask',

        //退出
        'exit',

        //设置用户名
        'setUsername'
      ])
    }
  };
</script>

<style scoped>
  .topbar {
    width: 100%;
    height: 38px;
    font: 12px/38px "宋体", 'SimSun';
    background-color: #f7f7f7;
    color: #666;
  }

  .topbar .left-area {
    float: left;
  }

  .topbar .left-area .collection {
    padding-left: 17px;
    background: url(../../static/images/icon/collection.jpg) left center no-repeat;
    font-size: 12px;
    font-weight: bold;
  }

  .right-area {
    float: right;
  }

  .right-area .show-username {
    color: #C81623;
  }
</style>
