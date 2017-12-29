/**
 * Created by Administrator on 2017/12/29.
 * 一些通用代码
 */

export default {

  //检测用户名
  checkUsername: function (username) {

    //如果用户没有输入用户名
    if (username === '' || username === null) {
      return {
        usernameStatus: 2,
        usernameNotice: '请填写用户名',
        flag: false
      };
    }

    //如果用户名的长度不符合规则
    if (username.length < 3 || username.length > 15) {
      return {
        usernameStatus: 2,
        usernameNotice: '长度应为3~15个字符',
        flag: false
      };
    }

    //如果用户名的首字母不是英文字母
    if (!(/^[A-Za-z]/.test(username))) {
      return {
        usernameStatus: 2,
        usernameNotice: '用户名必须以英文字母开头',
        flag: false
      };
    }

    //检测用户名不符合规则
    if (!(/^[a-zA-Z0-9_]*$/.test(username))) {
      return {
        usernameStatus: 2,
        usernameNotice: '用户名须由字母数字下划线组成',
        flag: false
      };
    }

    //用户名验证成功
    return {
      usernameStatus: 1,
      usernameNotice: '用户名填写成功',
      flag: true
    };
  },

  //检测密码
  checkPassword: function (password) {

    //如果用户没有输入密码
    if (password === null || password === '') {
      return {
        passwordStatus: 2,
        passwordNotice: '请填写密码',
        flag: false
      };
    }

    //如果密码的长度不符合规则
    if (password.length < 6 || password.length > 16) {
      return {
        passwordStatus: 2,
        passwordNotice: '密码长度应为6~16个字符',
        flag: false
      };
    }

    //密码验证成功
    return {
      passwordStatus: 1,
      passwordNotice: '密码验证成功',
      flag: true
    };
  },

  //检测用户第二次输入的密码
  checkSecondPassword: function (password, secondPassword) {

    //如果用户没有输入密码
    if (secondPassword === null || secondPassword === '') {
      return {
        secondPasswordStatus: 2,
        secondPasswordNotice: '请再次填写密码',
        flag: false
      };
    }

    //如果用户两次输入的密码不一样
    if (password !== secondPassword) {
      return {
        secondPasswordStatus: 2,
        secondPasswordNotice: '两次填写的密码不一致',
        flag: false
      };
    }

    //用户第二次输入的密码验证成功
    return {
      secondPasswordStatus: 1,
      secondPasswordNotice: '您的密码输入正确',
      flag: true
    };
  },

  //检测邮箱
  checkEmail: function (email) {

    //如果用户没有输入邮箱
    if (email === null || email === '') {
      return {
        emailStatus: 2,
        emailNotice: '请填写您的邮箱地址',
        flag: false
      };
    }

    let reg = /^\w+([_\.\-]\w+)*@\w+([_\-\.]\w+)*\.\w+([_\.]\w+)*$/;

    //如果用户输入的邮箱的格式不正确
    if (!reg.test(email)) {
      return {
        emailStatus: 2,
        emailNotice: '邮箱格式不正确',
        flag: false
      };
    }

    //邮箱验证成功
    return {
      emailStatus: 1,
      emailNotice: '您填写的邮箱格式正确',
      flag: true
    };
  },

  //检测是否接受服务条款
  checkAccept: function (isAccept) {

    //如果用户没有接受服务条款
    if (!isAccept) {
      return {
        acceptStatus: 2,
        acceptNotice: '请接受服务条款',
        flag: false
      };

      //如果用户接受了服务条款
    } else {
      return {
        acceptStatus: 1,
        acceptNotice: '',
        flag: true
      };
    }
  }
};
