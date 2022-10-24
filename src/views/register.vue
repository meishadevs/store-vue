<template>
  <div class="register">
    <register-head></register-head>
    <section class="register-box">
      <form @click.stop="recoverStatus()">
        <ul class="register">
          <!-- 用户名 s -->
          <li class="username">
            <div class="item-content clearfix">
              <div class="register-item">
                <i>*</i>
                用户名：
              </div>
              <div class="input-item">
                <input
                  class="icon-username input-username"
                  spellcheck="false"
                  v-model="userDetail.userName"
                  :class="{ error: usernameStatus == 2 }"
                  @click="usernameStatus = 0"
                />
              </div>
            </div>
            <!-- 当用户还没有输入用户名时，提示用户名的格式 s -->
            <div class="tips" v-if="usernameStatus == 0">
              3~15个字符，可使用字母、数字、下划线，需以字母开头
            </div>
            <!-- 当用户还没有输入用户名时，提示用户名的格式 e -->
            <!-- 显示用户名的检测结果 s -->
            <div
              class="notice-info"
              v-if="usernameStatus != 0"
              :class="{ success: usernameStatus == 1 }"
            >
              <span class="notice-icon"></span>
              <span class="notice-content">{{ usernameNotice }}</span>
            </div>
            <!-- 显示用户名的检测结果 e -->
          </li>
          <!-- 用户名 e -->
          <!-- 密码 s -->
          <li class="password">
            <div class="item-content clearfix">
              <div class="register-item">
                <i>*</i>
                密码：
              </div>
              <div class="input-item">
                <input
                  class="icon-password input-password"
                  type="password"
                  v-model="userDetail.password"
                  :class="{ error: passwordStatus == 2 }"
                  @click="passwordStatus = 0"
                />
              </div>
            </div>
            <div class="tips" v-if="passwordStatus == 0">
              6~16个字符，区分大小写
            </div>
            <div
              class="notice-info"
              v-if="passwordStatus != 0"
              :class="{ success: passwordStatus == 1 }"
            >
              <span class="notice-icon"></span>
              <span class="notice-content">{{ passwordNotice }}</span>
            </div>
          </li>
          <!-- 密码 e -->
          <!-- 用户第二次输入密码 s -->
          <li class="second-password">
            <div class="item-content clearfix">
              <div class="register-item">
                <i>*</i>
                确认密码：
              </div>
              <div class="input-item">
                <input
                  class="icon-password input-second-password"
                  type="password"
                  v-model="userDetail.secondPassword"
                  :class="{ error: secondPasswordStatus == 2 }"
                  @click="secondPasswordStatus = 0"
                />
              </div>
            </div>
            <div class="tips" v-if="secondPasswordStatus == 0">
              请再次填写密码
            </div>
            <div
              class="notice-info"
              v-if="secondPasswordStatus != 0"
              :class="{ success: secondPasswordStatus == 1 }"
            >
              <span class="notice-icon"></span>
              <span class="notice-content">{{ secondPasswordNotice }}</span>
            </div>
          </li>
          <!-- 用户第二次输入密码 e -->
          <!-- 邮箱 s -->
          <li class="email">
            <div class="item-content clearfix">
              <div class="register-item">
                <i>*</i>
                邮箱：
              </div>
              <div class="input-item">
                <input
                  class="input-email"
                  spellcheck="false"
                  v-model="userDetail.email"
                  :class="{ error: emailStatus == 2 }"
                  @click="emailStatus = 0"
                />
              </div>
            </div>
            <div class="tips" v-if="emailStatus == 0">填写您的邮箱</div>
            <div
              class="notice-info"
              v-if="emailStatus != 0"
              :class="{ success: emailStatus == 1 }"
            >
              <span class="notice-icon"></span>
              <span class="notice-content">{{ emailNotice }}</span>
            </div>
          </li>
          <!-- 邮箱 e -->
          <!-- 服务条款 s -->
          <li class="clause">
            <div class="item-content clearfix">
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="agree"
                  v-model="userDetail.isAccept"
                  @click="acceptStatus = 0"
                />
                <label for="agree">我已阅读并同意</label>
                <a href="javascript:;">《用户注册协议》</a>
              </div>
              <div class="notice-info" v-if="acceptStatus == 2">
                <span class="notice-icon"></span>
                <span class="notice-content">{{ acceptNotice }}</span>
              </div>
            </div>
          </li>
          <!-- 服务条款 e -->
          <!-- 注册按钮 s -->
          <li class="submit">
            <div class="item-content">
              <input
                type="button"
                value="立即注册"
                class="buttonRegister"
                @click.stop="handleSubmit()"
              />
            </div>
          </li>
          <!-- 注册按钮 e -->
        </ul>
      </form>
    </section>
    <div class="hr-40"></div>
    <site-foot></site-foot>
  </div>
</template>

<script>
import SiteFoot from '@/components/SiteFoot';
import RegisterHead from '@/components/RegisterHead';
import {
  checkEmail,
  checkAccept,
  checkUsername,
  checkPassword
} from '@/libs/util';
import { register } from '@/api/user';

export default {
  name: 'register',

  // 引入的外部组件
  components: {
    RegisterHead,
    SiteFoot
  },

  mounted() {
    this.$nextTick(() => {
      document.title = '注册页';
      document.body.style.backgroundColor = '#fff';
      window.scrollTo(0, 0);
    });
  },

  data() {
    return {
      // 用户详情
      userDetail: {
        // 用户名
        userName: '',

        // 密码
        password: '',

        // 用户第二次输入的密码
        secondPassword: '',

        // 邮箱
        email: '',

        // 是否接受服务条款
        isAccept: false,
        isAgree: 0
      },

      // 用户名的状态，0:还未检测用户名 1:用户名输入正确 2用户名输入错误
      usernameStatus: 0,

      // 密码的状态，0:还未检测密码 1:密码输入正确 2:密码输入错误
      passwordStatus: 0,

      // 第二次输入的密码的状态，0:还未检测用户第二次输入的密码 1:密码输入正确 2:密码输入错误
      secondPasswordStatus: 0,

      // 邮箱的状态，0:还未检测邮箱 1:邮箱输入正确 2:邮箱输入错误
      emailStatus: 0,

      // 服务条款的状态，0:还未检测服务条款 1:接受了服务条款 2:没有接受服务条款
      acceptStatus: 0,

      // 检测用户名时显示的提示信息
      usernameNotice: '',

      // 检测密码时显示的提示信息
      passwordNotice: '',

      // 检测用户第二次输入的密码时显示的提示信息
      secondPasswordNotice: '',

      // 检测邮箱时显示的提示信息
      emailNotice: '',

      // 检测是否接受服务条款时显示的提示信息
      acceptNotice: '',

      resultContent: '',

      // 注册的结果 -1:隐藏注册结果 0:注册失败 1:注册成功 2:用户名已存在
      resultStatus: -1
    };
  },

  methods: {
    // 注册账号
    handleSubmit() {
      // 获得用户名的检测结果
      this.usernameStatus = checkUsername(this.userDetail.userName).usernameStatus;
      this.usernameNotice = checkUsername(this.userDetail.userName).usernameNotice;

      // 获得密码的检测结果
      this.passwordStatus = checkPassword(this.userDetail.password).passwordStatus;
      this.passwordNotice = checkPassword(this.userDetail.password).passwordNotice;

      // 获得用户第二次输入的密码的检测结果
      this.secondPasswordStatus = checkPassword(this.userDetail.secondPassword).passwordStatus;
      this.secondPasswordNotice = checkPassword(this.userDetail.secondPassword).passwordNotice;

      // 获得邮箱的检测结果
      this.emailStatus = checkEmail(this.userDetail.email).emailStatus;
      this.emailNotice = checkEmail(this.userDetail.email).emailNotice;

      // 获得用户是否接受服务条款的检测结果
      this.acceptStatus = checkAccept(this.userDetail.isAccept).acceptStatus;
      this.acceptNotice = checkAccept(this.userDetail.isAccept).acceptNotice;

      if (
        !checkUsername(this.userDetail.userName).flag ||
        !checkPassword(this.userDetail.password).flag ||
        !checkPassword(this.userDetail.secondPassword).flag ||
        !checkEmail(this.userDetail.email).flag ||
        !checkAccept(this.userDetail.isAccept).flag
      ) {
        return;
      }

      this.userDetail.isAgree = this.userDetail.isAccept ? 1 : 0;

      register(this.userDetail)
        .then(res => {
          this.$message.success(res.msg);

          this.$router.push({
            name: 'home'
          });
        })
        .catch(error => {
          this.$message.error(error.message);
        });
    },

    // 恢复状态
    recoverStatus() {
      // 如果用户名检测失败
      if (this.usernameStatus !== 1) {
        this.usernameStatus = 0;
        this.usernameNotice = '';
      }

      // 如果密码检测失败
      if (this.passwordStatus !== 1) {
        this.passwordStatus = 0;
        this.passwordNotice = '';
      }

      // 如果用户第二次输入的密码检测失败
      if (this.secondPasswordStatus !== 1) {
        this.secondPasswordStatus = 0;
        this.secondPasswordNotice = '';
      }

      // 如果邮箱检测失败
      if (this.emailStatus !== 1) {
        this.emailStatus = 0;
        this.emailNotice = '';
      }

      this.acceptStatus = 0;
    }
  }
};
</script>

<style lang="less" scoped>
.register-box {
  width: 628px;
  padding-top: 10px;
  margin: 10px auto;
  border: solid 1px #ccc;
}

.register li {
  height: 70px;
  vertical-align: top;
}

.register li:nth-of-type(5) {
  height: 38px;
}

.register-item {
  width: 190px;
  height: 38px;
  font: 14px/38px "宋体", "SimSun";
  color: #999999;
  text-align: right;
  float: left;
}

.register-item i {
  color: #ff0000;
  font-style: normal;
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
  background: url("~@/assets/images/icon/user.jpg") 245px center no-repeat;
}

.icon-password {
  background: url("~@/assets/images/icon/password.jpg") 245px center no-repeat;
}

.checkbox-item {
  margin-left: 190px;
}

.checkbox-item input {
  position: relative;
  top: 2px;
}

.checkbox-item label {
  color: #333333;
}

.checkbox-item a {
  color: #005aa0;
}

.submit-item {
  margin-left: 190px;
}

.submit input {
  width: 263px;
  height: 52px;
  margin-left: 190px;
  margin-top: 10px;
  font: 22px/52px "微软雅黑", "Microsoft YaHei";
  color: #fff;
  text-align: center;
  background: #69b946;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  cursor: pointer;
  display: inline-block;
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
  background: url("~@/assets/images/icon/warning-icon.png") -17px -100px
    no-repeat;
  display: inline-block;
}

.item-content .error {
  border-color: #ee2222;
}

.success .notice-icon {
  background-position: 0px -117px;
}

.success .notice-content {
  color: #3d882d;
}

.show-result {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: #ff6d28;
  color: #fff;
  position: relative;
}

.show-result .close-btn {
  width: 26px;
  height: 26px;
  line-height: 24px;
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
