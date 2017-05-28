/**
 * Created by Administrator on 2017/5/26.
 * 注册页面上的js脚本
 */

$(function () {

    //注册账号
    registeredAccount();

    //恢复
    recoverStatus();
});


//获得注册账号时，返回的信息
var getRegisterInfo = function (data) {

    //注册成功
    if (data == 1) {
        var time = 3;

        $(".show-result")
            .html("注册成功&nbsp;<span class='time'>3</span>&nbsp;秒后跳转到登录页")
            .show();

        var timer = setInterval(function () {

            time -= 1;
            $(".show-result .time").text(time);

            if (time == 0) {
                clearInterval(timer);
                window.location = "login.html";
            }
        }, 1000);

    //注册失败
    } else if(data == 0) {
        $(".show-result")
            .html('<span class="text">注册失败</span><button class="close-btn"><i class="fa fa-times"></i></button>')
            .show();

        $(".close-btn").on("click", function () {
            $(".show-result")
                .html("")
                .hide();
        });

    //用户名已存在
    } else if (data == 2) {
        $(".show-result")
            .html('<span class="text">用户名已存在</span><button class="close-btn"><i class="fa fa-times"></i></button>')
            .show();

        $(".close-btn").on("click", function () {
            $(".show-result")
                .html("")
                .hide();
        });
    }
}


//注册账号
function registeredAccount() {
    var flag;

    $(".buttonRegister").on('click', function () {

        //阻止事件冒泡
        event.stopPropagation();

        //隐藏用户名输入的提示信息
        hideNotice("username");

        //检测用户名
        if (checkUsername() != 5) {
            return;
        }

        //隐藏密码输入的提示信息
        hideNotice("password");

        //检测密码
        if (checkPassword() != 3) {
            return;
        }

        //隐藏第二次密码输入的提示信息
        hideNotice("password-again");

        //检测第二次输入的密码
        if (checkSecondPassword() != 3) {
            return;
        }

        //隐藏邮箱输入的提示信息
        hideNotice("email");

        //检测邮箱
        if (checkEmail() != 3) {
            return;
        }

        //检测是否接受服务条款
        if (isAgree() == 0) {
            return;
        }

        //获得用户输入的信息
        var username = $(".input-username").val();
        var password = $(".input-password").val();
        var email = $(".input-email").val();

        //注册账号
        var parem = {"username": username, "password": password, "email": email};
        getData(config.registerUrl, 'post', 'text', parem, getRegisterInfo);
    });
}


//检测用户名
function checkUsername() {
    var username = resetData("input-username");
    var char = username.charAt(0);

    if (username.length == 0) {
        showCheckResult("username", "input-username", 0, "请填写用户名");
        return 1;
    }

    if (username.length < 3 || username.length > 15) {
        showCheckResult("username", "input-username", 0, "长度应为3~15个字符");
        return 2;
    }

    var Regx = /^[A-Za-z]*$/;
    if (!Regx.test(char)) {
        showCheckResult("username", "input-username", 0, "用户名必需以英文字母开头");
        return 3;
    }

    Regx = /^[A-Za-z0-9_]*$/;
    if (!Regx.test(username)) {
        showCheckResult("username", "input-username", 0, "用户名需由字母、数字或下划线组成");
        return 4;
    }

    showCheckResult("username", "input-username", 1, "您填写的用户名正确");
    return 5;
}


//检测密码
function checkPassword() {
    var password = resetData("input-password");

    if (password.length == 0) {
        showCheckResult("password", "input-password", 0, "请填写密码");
        return 1;
    }

    if (password.length < 6 || password.length > 16) {
        showCheckResult("password", "input-password", 0, "密码长度应为6~16个字符");
        return 2;
    }

    showCheckResult("password", "input-password", 1, "您的密码输入正确");
    return 3;
}


//检测第二次输入的密码
function checkSecondPassword() {
    var password = resetData("input-password");
    var passwordSecond = resetData("input-password-again");

    if (passwordSecond.length == 0) {
        showCheckResult("password-again", "input-password-again", 0, "请再次填写密码");
        return 1;
    }

    if (password != passwordSecond) {
        showCheckResult("password-again", "input-password-again", 0, "两次填写的密码不一致");
        return 2;
    }

    showCheckResult("password-again", "input-password-again", 1, "您的密码输入正确");
    return 3;
}


function checkEmail() {
    var email = resetData("input-email");

    if (email.length == 0) {
        showCheckResult("email", "input-email", 0, "请填写您的邮箱地址");
        return 1;
    }

    var reg =  /^\w+([_\.\-]\w+)*@\w+([_\-\.]\w+)*\.\w+([_\.]\w+)*$/;

    if (!reg.test(email)) {
        showCheckResult("email", "input-email", 0, "邮箱的格式不正确");
        return 2;
    }

    showCheckResult("email", "input-email", 1, "您填写的邮箱正确");
    return 3;
}


//判断是否同意服务条款
function isAgree() {
    var checked = document.getElementById("agree").checked;

    if (checked == 0) {
        showCheckResult("clause", "", 0, "请接受服务条款");
        return 0;
    }

    return 1
}


function recoverStatus() {

    $(document).on("click", function() {

        //隐藏用户名输入错误产生的提示信息
        if(checkUsername() != 5) {
            hideCheckResult("username", "input-username");
            showNotice("username");
        }

        //隐藏密码输入错误产生的提示信息
        if(checkPassword() != 3) {
            hideCheckResult("password", "input-password");
            showNotice("password");
        }

        //隐藏第二次密码输入错误产生的提示信息
        if(checkSecondPassword() != 3) {
            hideCheckResult("password-again", "input-password-again");
            showNotice("password-again");
        }

        //隐藏邮箱输入错误产生的提示信息
        if(checkEmail() != 4) {
            hideCheckResult("email", "input-email");
            showNotice("email");
        }

        if (isAgree() != 1) {
            hideCheckResult("clause", "");
            showNotice("clause");
        }
    });

    $(".register input").on('click', function () {
        var className = $(this).attr("data-class");

        if (className != undefined) {
            $("." + className + " .tips").show();
            $("." + className + " .notice-info").hide();
        }
    });
}


/**
 * 隐藏提示用户输入的提示信息
 * @param className 类名
 */
function hideNotice(className) {
    $("." + className + " .tips").hide();
}


/**
 * 显示提示信息
 * @param className 类名
 */
function showNotice(className) {
    $("." + className + " .tips").show();
}