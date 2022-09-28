
<!-- 顶部通栏组件 -->

<template>
  <div class="top-bar">
    <div class="inner-c clearfix">
      <div class="left-area">
        <a href="javascript:;" class="collection" @click="showMask()">收藏电商网</a>
      </div>
      <div class="right-area">
        <!-- 如果用户登录了 s -->
        <div v-if="isLogin">
          欢迎<a class="show-username" href="javascript:;">{{ username }}</a>来到电商网
          <a class="exit" href="javascript:;" @click="exitAccount()">[退出]</a>
        </div>
        <!-- 如果用户登录了 e -->
        <!-- 如果用户没有登录 s-->
        <div v-else>
          欢迎来到电商网
          <router-link class="login-link" to="/login">[登录]</router-link>
          <router-link class="register-link" to="/register">[免费注册]</router-link>
        </div>
        <!-- 如果用户没有登录 e -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TopBar',

  computed: {
    ...mapState({
      username: state => state.user.username,
      isLogin: state => state.user.isLogin
    })
  },

  methods: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapMutations([

      // 显示模板
      'showMask',

      // 退出
      'exit',

      // 设置用户名
      'setUsername',

      'changeLoginStatus'
    ]),

    // 退出账户
    exitAccount() {
      this.exit();
      this.$router.push('/');
    }
  }
};
</script>

<style lang="less" scoped>
  .top-bar {
    width: 100%;
    height: 38px;
    font: 12px/38px "宋体", "SimSun";
    background-color: #f7f7f7;
    color: #666;
  }

  .top-bar .left-area {
    float: left;
  }

  .top-bar .left-area .collection {
    padding-left: 17px;
    background: url("~@/assets/images/icon/collection.jpg") left center no-repeat;
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
