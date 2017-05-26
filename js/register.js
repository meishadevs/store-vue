/**
 * Created by Administrator on 2017/5/26.
 * 注册页面上的js脚本
 */

$(function () {

    //注册一个账号
    registeredAccount();
});

//注册一个账号
function registeredAccount() {
    
    $(".buttonRegister").on('click', function () {

        //阻止事件冒泡
        event.stopPropagation();
        
        var flag = checkUsername();
    });
}


//检测用户名
function checkUsername() {
    
}
