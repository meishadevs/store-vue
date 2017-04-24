/**
 * Created by Administrator on 2017/4/11.
 * 购物车和结算页的js脚本
 */

$(function() {

    //选择收货地址
    selectAddress();

    //提交收货信息
    submitDeliveryInfo();

    //恢复
    recoverStatus();

    //设置发票信息
    setInvoiceInfo();
});

//获得市下面的所有区
var area = function(data) {

    setAddress("area", data);

    setOverflowY("area");

    //切换区
    changeAddress("area");
}

//处理市的数据
var city = function(data) {

    setAddress("city", data, 3, area);

    setOverflowY("city");

    //切换市
    changeAddress("city", 3, area);
}


//处理省份数据
var province = function(data) {

    setAddress("province", data, 2, city);

    setOverflowY("city");

    //切换省
    changeAddress("province", 2, city);
}


//选择收货地址
function selectAddress() {

    //发送请求获取省份信息
    var parem = {"citycode": 0, "flag": 1};
    getData(config.addressUrl, 'get', 'jsonp', parem, province);
}


//提交收货信息
function submitDeliveryInfo() {

    $(".button-submit").on("click", function(event) {

        //阻止事件冒泡
        event.stopPropagation();

        $(".place .notice-icon").css("display", "inline-block");

        //如果收货地址输入不正确
        if(!checkAddress()) {
            showCheckResult("address", "input-address", 0);
            return;

        } else {
            showCheckResult("address", "input-address", 1);
        }

        //如果收货人姓名输入不正确
        if(!checkReceiver()) {
            showCheckResult("receiver", "input-receiver", 0);
            return;
        } else {
            showCheckResult("receiver", "input-receiver", 1);
        }

        //如果手机号码输入不正确
        if(!checkPhoneNum()) {
            showCheckResult("phone", "input-phone", 0);
            return;
        } else {
            showCheckResult("phone", "input-phone", 1);
        }

        //如果区号输入不正确
        if(!checkAreaNum()) {
            showCheckResult("tel-phone", "input-area", 0, "您输入的区号不正确");
            return;
        }

        //如果电话号码输入不正确
        if(!checkTelNum()) {
            showCheckResult("tel-phone", "input-tel", 0, "您输入的电话号码不正确");
            return;
        }

        //如果分机号输入不正确
        if(!checkExtension()) {
            showCheckResult("tel-phone", "input-extension", 0, "您输入的分机号码不正确");
            return;
        }

        //获得用户输入的信息
        var strProvince = $("#province .select-name")[0].innerHTML;
        var strCity = $("#city .select-name")[0].innerHTML;
        var strArea = $("#area .select-name")[0].innerHTML;
        var address = $(".input-address").val();
        var receiver = $(".input-receiver").val();
        var phoneNum = $(".input-phone").val();
        var areaNum = $(".input-area").val();
        var telNum = $(".input-tel").val();
        var extensionNum = $(".input-extension").val();

        if(telNum.length != 0 && areaNum.length != 0) {
            showCheckResult("tel-phone", "input-tel", 1);
        }
    });
}


//检测收货地址
function checkAddress() {

    var address = $(".input-address").val();

    if(address.length >= 4 && address.length <= 26) {
        return true;
    } else {
        return false;
    }
}


//检测收货人
function checkReceiver() {

    var receiver = $(".input-receiver").val();

    if(receiver.length >= 2 && receiver.length <= 10) {
        return true;
    } else {
        return false;
    }
}


//检测手机号码
function checkPhoneNum() {
    var phoneNum = $(".input-phone").val();

    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phoneNum))){
        return false;
    } else {
        return true;
    }
}


//检测区号
function checkAreaNum() {

    var areaNum = $(".input-area").val();

    //区号必须是4位数字
    if((areaNum.length == 4 || areaNum.length == 3) && !isNaN(areaNum)) {
        return true;
    } else {
        return false;
    }
}


//检测电话号码
function checkTelNum() {
    var telNum = $(".input-tel").val();

    //电话号码必须是7位数字
    if(telNum.length == 7 && !isNaN(telNum)) {
        return true;
    } else {
        return false;
    }
}


//检测分机号码
function checkExtension() {

    var extensionNum = $(".input-extension").val();

    if(extensionNum.length == 0) {
        return true;
    } else {
        if(isNaN(extensionNum)) {
            return false;
        } else {
            return true;
        }
    }
}


/**
 * 显示检测的结果
 * @param className 标签的类名
 * @param inputClassName 输入框的类名
 * @param flag 用于标记检测成功还是失败(0:失败 1:成功)
 * @param text 修改检测结果的内容
 */
function showCheckResult(className, inputClassName, flag, text) {

    //如果输入的信息验证失败
    if(flag == 0) {

        $("." + className + " ." + inputClassName).css("border-color", "#e22");
        $("." + className + " .notice-icon").css("display", "inline-block");
        $("." + className + " .notice-content").css("display", "inline-block");

        if(text != undefined) {
            $("." + className + " .notice-content")[0].innerHTML = text;
        }

    //如果输入的信息验证成功
    } else if(flag == 1) {

        $("." + className + " .notice-icon").css({
            "display" : "inline-block",
            "background-position" : "0px -117px"
        });
    }
}


/**
 * 隐藏检测结果
 * @param className 标签的类名
 * @param inputClassName 输入框的类名
 */
function hideCheckResult(className, inputClassName) {
    $("." + className + " ." + inputClassName).css("border-color", "#C2C2C2");
    $("." + className + " .notice-icon").css("display", "none");
    $("." + className + " .notice-content").css("display", "none");
}


function recoverStatus() {

    $(document).on("click", function() {

        //隐藏收货地址输入错误产生的提示信息
        if(!checkAddress()) {
            hideCheckResult("address", "input-address");
        }

        //隐藏收货人姓名输入错误产生的提示信息
        if(!checkReceiver()) {
            hideCheckResult("receiver", "input-receiver");
        }

        //隐藏手机号码输入错误产生的提示信息
        if(!checkPhoneNum()) {
            hideCheckResult("phone", "input-phone");
        }

        //隐藏区号输入错误产生的提示信息
        if(!checkAreaNum()) {
            hideCheckResult("tel-phone", "input-area");
        }

        //隐藏电话号码输入错误产生的提示信息
        if(!checkTelNum()) {
            hideCheckResult("tel-phone", "input-tel");
        }

        //隐藏分机号输入错误产生的提示信息
        if(!checkExtension()) {
            hideCheckResult("tel-phone", "input-extension");
        }
    });
}


//设置发票信息
function setInvoiceInfo() {

    //选择发票的类型
    selectInvoiceInfo("invoice-type");

    //选择发票的抬头
    selectInvoiceInfo("invoice-header");
}


function selectInvoiceInfo(id) {

    //设置overflox-y属性
    setOverflowY(id);

    //显示下拉列表标签的列表项
    $("#" + id).on("mouseenter", function() {
        $("#" + id + " .select-options").show();
    });

    //隐藏下拉列表标签的列表项
    $("#" + id).on("mouseleave", function() {
        $("#" + id + " .select-options").hide();
    });

    $("#" + id + " li").on("click", function() {
        $("#" + id + " .select-name")[0].innerHTML = this.innerHTML;
    });
}