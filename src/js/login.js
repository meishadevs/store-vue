/**
 * Created by Administrator on 2017/5/29.
 * 网站登录页上的js脚本
 */

$(function () {

    //读取用户信息
    readUserInfo();

    //登录
    loginAccount();

    //恢复
    recoverStatus();
});


//获得登录账号时返回的信息
var getLoginInfo = function (data) {

    //用户名不存在
    if (data == 1) {
        $(".show-result")
            .html('<span class="text">您输入的用户名不存在</span><button class="close-btn"><i class="fa fa-times"></i></button>')
            .css("visibility", "visible");

        $(".close-btn").on("click", function () {
            $(".show-result")
                .html("")
                .css("visibility", "hidden");
        });

    //密码错误
    } else if (data == 2) {
        $(".show-result")
            .html('<span class="text">您输入的密码与用户名不匹配</span><button class="close-btn"><i class="fa fa-times"></i></button>')
            .css("visibility", "visible");

        $(".close-btn").on("click", function () {
            $(".show-result")
                .html("")
                .css("visibility", "hidden");
        });

    //登录成功
    } else if (data == 3) {

        var time = 3;

        $(".show-result")
            .html("登录成功&nbsp;<span class='time'>3</span>&nbsp;秒后跳转到网站首页")
            .css("visibility", "visible");

        var timer = setInterval(function () {

            time -= 1;
            $(".show-result .time").text(time);

            if (time == 0) {
                clearInterval(timer);

                localStorage.setItem("username", $(".input-username").val());
                window.location = "index.html";
            }
        }, 1000);
    }
}


//登录账号
function loginAccount() {

    $(".buttonlogin").on('click', function () {

        //阻止事件冒泡
        event.stopPropagation();

        //显示用户名的检测结果
        if(!showUsernameResult()) {
            return;
        }

        //显示密码的检测结果
        if (!showPasswordResult()) {
            return;
        }

        var checked = document.getElementById("remember").checked;

        //记住用户名和密码
        if (checked) {
            saveUserInfo();
        }

        var username = $(".input-username").val();
        var password = $(".input-password").val();

        //登录
        var parem = {"username": username, "password": password};
        getData(config.loginUrl, 'post', 'text', parem, getLoginInfo);
    });
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
    });

    $(".login input").on('click', function () {
        var className = $(this).attr("data-class");

        if (className != undefined) {
            $("." + className + " .tips").show();
            $("." + className + " .notice-info").hide();
        }
    });
}


//保存用户信息
function saveUserInfo() {
    var username = $(".input-username").val();
    var password = $(".input-password").val();

    if (username.length > 0 && password.length > 0) {
        var userInfo = {
            'username': username,
            'password': password
        };

        //将用户信息保存在本地
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
}


//读取用户信息
function readUserInfo() {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo != null) {
        $(".input-username").val(userInfo.username);
        $(".input-password").val(userInfo.password);
    }
}
