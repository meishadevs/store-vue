
<!-- 电商网站的登录页 -->

<template>
  <div class="login">
    <loginHeader></loginHeader>
    <!-- 注册成功时显示注册结果 s -->
    <div class="show-result" v-if="resultStatus == 1">
      登录成功
      <span class="time">{{ numTime }}</span>
      秒后跳转到{{ content }}
    </div>
    <!-- 注册成功时显示注册结果 e -->
    <!-- 登录失败时，显示注册结果 s -->
    <div class="show-result" v-if="resultStatus === 2">
      <span class="text">{{ resultContent }}</span>
      <button class="close-btn" @click="resultStatus = 0">
        <i class="fa fa-times"></i>
      </button>
    </div>
    <!-- 登录失败时，显示注册结果-->
    <section class="login-box">
      <form>
        <ul class="login" @click="recoverStatus()">
          <!-- 用户名 s -->
          <li class="username">
            <div class="item-content clearfix">
              <div class="login-item">
                <i>*</i>
                用户名：
              </div>
              <div class="input-item">
                <input class="icon-username input-username"
                       spellcheck="false"
                        v-model="username"
                        v-bind:class="{error: usernameStatus == 2}"
                        @click="usernameStatus = 0">
              </div>
            </div>
            <div class="tips" v-if="usernameStatus == 0">3~15个字符，可使用字母、数字、下划线，需以字母开头</div>
            <div class="notice-info" v-if="usernameStatus != 0" v-bind:class="{success: usernameStatus == 1}">
              <span class="notice-icon"></span>
              <span class="notice-content">{{ usernameNotice }}</span>
            </div>
          </li>
          <!-- 用户名 e -->
          <!-- 密码 s -->
          <li class="password">
            <div class="item-content clearfix">
              <div class="login-item">
                <i>*</i>
                密码：
              </div>
              <div class="input-item">
                <input class="icon-password input-password"
                       type="password"
                       v-model="password"
                       v-bind:class="{error: passwordStatus == 2}"
                       @click="passwordStatus = 0">
              </div>
            </div>
            <div class="tips" v-if="passwordStatus == 0">6~16个字符，区分大小写</div>
            <div class="notice-info" v-if="passwordStatus != 0" v-bind:class="{success: passwordStatus == 1}">
              <span class="notice-icon"></span>
              <span class="notice-content">{{ passwordNotice }}</span>
            </div>
          </li>
          <!-- 密码 e -->
          <!-- 记住用户名和密码 s -->
          <li class="remember-password">
            <div class="item-content clearfix">
              <div class="checkbox-item">
                <input type="checkbox" id="remember" v-model="isRemember">
                <label for="remember">记住用户名和密码</label>
              </div>
            </div>
          </li>
          <!-- 记住用户名和密码 e -->
          <!-- 登录按钮 s -->
          <li class="submit">
            <div class="item-content">
              <input type="button" value="登录" class="buttonlogin" @click.stop="login()">
            </div>
          </li>
          <!-- 登录按钮 e -->
        </ul>
      </form>
    </section>
    <div class="hr-40"></div>
    <foot></foot>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import loginHeader from '../components/loginHeader';
  import foot from '../components/foot';
  import Util from '../js/Util';

  export default {

    name: 'login',

    components: {
      loginHeader,
      foot
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {
        document.title = '电商网站的登录页';
        document.body.style.backgroundColor = '#fff';
        this.readUserInfo();
      });
    },

    data() {
      return {

        //用户名
        username: null,

        //用户名的状态 0:还未检测用户名 1:用户名输入正确 2:用户名输入错误
        usernameStatus: 0,

        //检测用户名时显示的提示信息
        usernameNotice: null,

        //密码
        password: null,

        //密码的状态，0:还未检测密码 1:密码输入正确 2:密码输入错误
        passwordStatus: 0,

        //检测密码时显示的提示信息
        passwordNotice: null,

        //标记是否记住用户名和密码
        isRemember: false,

        //注册的结果 0:隐藏登录结果 1:登录成功 2:登录失败
        resultStatus: 0,

        resultContent: null,

        numTime: 3,

        content: '网站首页'
      };
    },

    methods: {

      ...mapActions([
        'changeLoginStatus',
        'setUsername'
      ]),

      //登录
      login: function () {

        this.usernameStatus = Util.checkUsername(this.username).usernameStatus;
        this.usernameNotice = Util.checkUsername(this.username).usernameNotice;

        //如果用户名检测失败，不往下执行
        if (!Util.checkUsername(this.username).flag) {
          return;
        }

        this.passwordStatus = Util.checkPassword(this.password).passwordStatus;
        this.passwordNotice = Util.checkPassword(this.password).passwordNotice;

        //如果密码检测失败，不往下执行
        if (!Util.checkPassword(this.password).flag) {
          return;
        }

        //使用axios发送post请求，登录
        this.axios({
          method: 'post',
          url: this.loginUrl,
          data: this.qs.stringify({
            username: this.username,
            password: this.password
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {

          //用户名不存在
          if (res.data === 1) {
            this.resultStatus = 2;
            this.resultContent = '您输入的用户名不存在';

            //密码错误
          } else if (res.data === 2) {
            this.resultStatus = 2;
            this.resultContent = '您输入的密码与用户名不匹配';

            //登录成功
          } else if (res.data === 3) {

            //记住用户名和密码
            if (this.isRemember) {
              this.saveUserInfo();
            }

            this.resultStatus = 1;
            this.changeLoginStatus(true);
            this.setUsername(this.username);

            //登录成功后是否进入购物车页
            let isCart = parseInt(this.$route.params.isCart);

            //登录成功后进入购物车页
            if (isCart) {
              this.content = '购物车和结算页';

              //登录成功后进入网站首页
            } else {
              this.content = '网站首页';
            }

            //创建定时器
            let timer = setInterval(() => {

              this.numTime--;

              if (this.numTime <= 0) {
                clearInterval(timer);

                //登录成功后进入购物车页
                if (isCart) {
                  this.content = '购物车和结算页';
                  this.$router.push('/cart');

                //登录成功后进入网站首页
                } else {
                  this.content = '网站首页';
                  this.$router.push('/');
                }
              }
            }, 1000);
          }
        });
      },

      //恢复状态
      recoverStatus: function () {

        if (this.usernameStatus !== 1) {
          this.usernameStatus = 0;
          this.usernameNotice = '';
        }

        if (this.passwordStatus !== 1) {
          this.passwordStatus = 0;
          this.passwordNotice = '';
        }
      },

      //保存用户信息
      saveUserInfo: function () {

        //使用Cookie保存用户名
        document.cookie = 'username=' + this.username + ';'
          + 'expires=' + new Date('2020-1-1').toGMTString() + ';';

        //使用Cookie保存密码
        document.cookie = 'password=' + this.password + ';'
          + 'expires=' + new Date('2020-1-1').toGMTString() + ';';
      },

      //读取用户信息
      readUserInfo: function () {

        //读取保存在Cookie中的用户名和密码
        let arr = this.username = document.cookie.split(';');
        this.username = arr[0].split('=')[1];
        this.password = arr[1].split('=')[1];
      }
    }
  };
</script>

<style scoped>
  .login-box {
    width: 628px;
    padding-top: 10px;
    margin: 10px auto 100px;
    border: solid 1px #ccc;
  }

  .login li {
    height: 70px;
    vertical-align: top;
  }

  .login-item {
    width: 190px;
    height: 38px;
    font: 14px/38px "宋体", "SimSun";
    color: #999999;
    text-align: right;
    float: left;
  }

  .input-item {
    float: left;
  }

  .input-item input {
    width: 263px;
    height: 36px;
    line-height: 36px;
    padding-left: 5px;
    font-size: 16px;
    border: solid 1px #ccc;
  }

  .icon-username {
    background: url(../../static/images/icon/user.jpg) 245px center no-repeat;
  }

  .tips {
    height: 14px;
    line-height: 14px;
    margin-left: 190px;
    padding: 2px 0 6px;
    color: #999;
  }

  .notice-info {
    margin-top: 3px;
    margin-left: 190px;
    color: #e22;
  }

  .notice-info .notice-icon {
    width: 16px;
    height: 16px;
    vertical-align: top;
    background: url(../../static/images/icon/warning-icon.png) -17px -100px no-repeat;
    display: inline-block;
  }

  .icon-password {
    background: url(../../static/images/icon/password.jpg) 245px center no-repeat;
  }

  .login .remember-password {
    height: 15px;
  }

  .remember-password .checkbox-item {
    margin-left: 190px;
  }

  .remember-password .checkbox-item input {
    position: relative;
    top: 2px;
  }

  .submit input {
    width: 263px;
    height: 52px;
    margin-left: 190px;
    margin-top: 10px;
    font: 22px/52px "微软雅黑";
    color: #fff;
    text-align: center;
    background: #5a98de;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    border-color: transparent;
    cursor: pointer;
    display: inline-block;
  }

  .item-content .error {
    border-color: #EE2222;
  }

  .success .notice-icon {
    background-position: 0px -117px;
  }

  .success .notice-content {
    color: #3D882D;
  }

  .show-result {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #ff6d28;
    position: relative;
  }

  .show-result .close-btn {
    width: 26px;
    height: 26px;
    line-height: 24px;
    margin-left: 274px;
    background: #f86621;
    border-radius: 2px;
    vertical-align: text-bottom;
    font-size: 18px;
    color: #ffcbb3;
    border: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 7px;
  }

  .show-result .time {
    color: #000;
  }
</style>
