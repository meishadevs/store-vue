/**
 * Created by Administrator on 2017/4/11.
 * 购物车和结算页的js脚本
 */

$(function() {

    //选择收货地址
    selectAddress();

    //设置商品信息
    setProductInfo();

    //提交收货信息
    submitDeliveryInfo();

    //恢复
    recoverStatus();

    //设置发票信息
    setInvoiceInfo();
    
    //提交订单
    commitOrder();
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

    var flag = 0;

    $(".button-submit").on("click", function(event) {

        //阻止事件冒泡
        event.stopPropagation();

        $(".place .notice-info").css("display", "inline-block");

        //检测收货地址
        flag = checkAddress();

        if (flag == 0) {
            showCheckResult("address", "input-address", 0, "请填写详细的收货地址");
            return;
        } else if (flag == 1) {
            showCheckResult("address", "input-address", 0, "长度应为4~26个字符");
            return;
        } else {
            showCheckResult("address", "input-address", 1, "");
        }

        //检测收货人的姓名
        flag = checkReceiver();

        if (flag == 0) {
            showCheckResult("receiver", "input-receiver", 0, "请填写收货人的姓名");
            return;
        } else if (flag == 1) {
            showCheckResult("receiver", "input-receiver", 0, "长度应为2~10个字符");
            return;
        } else {
            showCheckResult("receiver", "input-receiver", 1, "");
        }

        //检测手机号
        flag = checkPhoneNum();

        if(flag == 0) {
            showCheckResult("phone", "input-phone", 0, "请填写您的手机号码");
            return;
        } else if (flag == 1) {
            showCheckResult("phone", "input-phone", 0, "请填写正确的手机号码");
            return;
        } else {
            showCheckResult("phone", "input-phone", 1, "");
        }

        //检测区号/电话号码/分机号
        flag = checkNumber();

        if(flag == 1) {
            showCheckResult("tel-phone", "input-area", 0, "区号或电话号码格式不正确");
            showCheckResult("tel-phone", "input-tel", 0, "区号或电话号码格式不正确");
            showCheckResult("tel-phone", "input-extension", 0, "区号或电话号码格式不正确");
            return;
        } else if (flag == 2) {
            showCheckResult("tel-phone", "input-area", 1, "");
            showCheckResult("tel-phone", "input-tel", 1, "");
            showCheckResult("tel-phone", "input-extension", 1, "");
        } else if (flag == 3) {

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


        $('.receive-info .show-result').fadeIn();
        $('.receive-info .show-result').fadeOut(3000);

        //创建Json对象，记录收货信息
        var deliveryInfo = {
            'province': strProvince,
            'city': strCity,
            'area': strArea,
            'address': address,
            'receiver': receiver,
            'phoneNum': phoneNum,
            'areaNum': areaNum,
            'telNum': telNum,
            'extensionNum': extensionNum
        };

        //将收货信息保存在本地
        localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
    });
}


//检测收货地址
function checkAddress() {

    //获得用户输入的收货地址
    var address = resetData("input-address");

    if (address.length == 0) {
        return 0
    }

    if (address.length < 4 || address.length > 26) {
        return 1;
    }

    return 2;
}


//检测收货人
function checkReceiver() {

    //获得收货人的姓名
    var receiver = resetData("input-receiver");

    if (receiver.length == 0) {
        return 0
    }

    if (receiver.length < 2 || receiver.length > 10) {
        return 1;
    }

    return 2;
}


//检测手机号码
function checkPhoneNum() {

    //获得手机号码
    var phoneNum = resetData("input-phone");

    if (phoneNum.length == 0) {
        return 0
    }

    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phoneNum))) {
        return 1;
    }

    return 2;
}


//检测号码
function checkNumber() {

    //获得区号
    var areaNum = resetData("input-area");

    //获得电话号码
    var telNum = resetData("input-tel");

    //获得分机号
    var extensionNum = resetData("input-extension");

    console.log("extensionNum:", extensionNum);

    if (areaNum.length == 0 && telNum.length == 0 && extensionNum.length == 0) {
        return 3;
    }

    if ((areaNum.length >= 3 && !isNaN(areaNum)) &&
        (telNum.length >= 5 && !isNaN(telNum)) &&
        (extensionNum.length == 0)) {
        return 2;
    }

    if ((areaNum.length >= 3 && !isNaN(areaNum)) &&
        (telNum.length >= 5 && !isNaN(telNum)) &&
        (extensionNum.length > 0 && !isNaN(extensionNum))) {
        return 2;
    }

    return 1;
}

function recoverStatus() {

    $(document).on("click", function() {

        //隐藏收货地址输入错误产生的提示信息
        if(checkAddress() != 2) {
            hideCheckResult("address", "input-address");
        }

        //隐藏收货人姓名输入错误产生的提示信息
        if(checkReceiver() != 2) {
            hideCheckResult("receiver", "input-receiver");
        }

        //隐藏手机号码输入错误产生的提示信息
        if(checkPhoneNum() != 2) {
            hideCheckResult("phone", "input-phone");
        }

        //隐藏区号/电话号码/分机号输入错误产生的提示信息
        if(checkNumber() != 2) {
            hideCheckResult("tel-phone", "input-area");
            hideCheckResult("tel-phone", "input-tel");
            hideCheckResult("tel-phone", "input-extension");
        }
    });

    $(".receive-content input").on('click', function () {
        var className = $(this).attr("data-class");

        if (className != undefined) {
            $("." + className + " .tips").show();
            $("." + className + " .notice-info").hide();
        }
    });
}


//设置发票信息
function setInvoiceInfo() {

    //选择发票的类型
    selectInvoiceInfo("invoice-type");

    //选择发票的抬头
    selectInvoiceInfo("invoice-header");

    //保存发票信息
    saveInvoiceInfo();
    
    //取消发票信息
    cancelInvoiceInfo();
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


//保存发票信息
function saveInvoiceInfo() {
    $(".invoice-content .save").on('click', function () {

        //获取发票信息
        getInvoiceInfo();

        $('.invoice-info .show-result').fadeIn();
        $('.invoice-info .show-result').fadeOut(3000);
    });
}


//取消发票信息
function cancelInvoiceInfo() {
    $(".invoice-content .cancel").on('click', function () {

        //是否需要发票
        $("#use-invoice").attr("checked", false);

        //发票的类型
        var invoiceType = $("#invoice-type li:eq(0)").html();
        $("#invoice-type .select-name").html(invoiceType);

        //发票抬头
        var invoiceHeader =  $("#invoice-header li:eq(0)").html();
        $("#invoice-header .select-name").html(invoiceHeader);

        //开发票人的姓名
        var invoiceName = $(".invoice-name").val("");

        getInvoiceInfo();
    });
}


//获取发票信息
function getInvoiceInfo() {

    //是否需要发票
    var flag = $('#use-invoice').is(':checked');

    //获取当前选中的发票类型
    var invoiceType = $('#invoice-type .select-name').html();

    //获取发票抬头
    var invoiceHeader = $("#invoice-header .select-name").html();

    //获取开票人的姓名
    var invoiceName = $(".invoice-name").val();

    //创建Json数组，保存发票信息
    var invoiceInfo = {
        'flag': flag,
        'invoiceType': invoiceType,
        'invoiceHeader': invoiceHeader,
        'invoiceName': invoiceName
    };

    //将发票信息保存在本地
    localStorage.setItem('invoiceInfo', JSON.stringify(invoiceInfo));
}


//提交订单
function commitOrder() {
    $('.order-content .commit').on('click', function () {
        $('.delivery-info .show-result').fadeIn();
        $('.delivery-info .show-result').fadeOut(3000);
    });
}


//设置商品信息
function setProductInfo() {

    //获得商品的数量
    var productNum = parseInt(localStorage.getItem('productNum'));
    if (isNaN(productNum)) {
        productNum = 1;
    }

    var price = 1999;
    var totalPrice = price * productNum;

    $("#productNum").text(productNum);
    $("#totalPrice").text(totalPrice + ".00");
    $('.total em').text("￥" + totalPrice + ".00");
}
