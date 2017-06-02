/**
 * Created by Administrator on 2017/4/5.
 * 存放通用的js脚本
 */

//设置轮播图
function setBanner() {

    //获得所有小圆点
    var $circleLis = $(".circle-list li");

    //获得所有轮播图
    var $bannerLis = $(".banner-list li");

    //当前展示的轮播图下标
    var thatIndex = 0;

    //用于创建定时器
    var timer = null;

    //如果点击了某个小圆点
    $circleLis.on("click", function() {

        //如果当前鼠标点击的小圆点的下标不是当前正在展示的图片的下标
        //展示当前鼠标点击的小圆点下标对应的图片
        if($(this).index() != thatIndex) {

            //将当前鼠标点击的小圆点的下标设为需要播放的轮播图图的下标
            thatIndex = $(this).index();

            //选中当前用户点击的小圆点
            $(this).addClass("current").siblings("li").removeClass("current");

            //清除当前正在播放的轮播图
            $bannerLis.removeClass("active");

            //获得需要播放的图片
            var $banner = $bannerLis.eq(thatIndex);

            //播放轮播图
            $banner.addClass("active");
            $banner.css("opacity", "0");
            animate($banner[0], {opacity : 100}, 40);
        }
    });

    //创建定时器，实现自动播放轮播图
    timer = setInterval(autoPlayBanner, 3000);

    //当鼠标放在轮播图上，暂停播放轮播图
    $(".banner-list").mouseenter(function() {
        clearInterval(timer);
    });

    //当鼠标离开轮播图，继续播放轮播图
    $(".banner-list").mouseleave(function() {
        timer = setInterval(autoPlayBanner, 3000);
    });

    //自动播放轮播图
    function autoPlayBanner() {

        //获得需要播放轮播图的下标
        thatIndex = ++thatIndex > $bannerLis.length - 1 ? 0 : thatIndex;

        //选中小圆点
        $circleLis.removeClass("current");
        $circleLis.eq(thatIndex).addClass("current");

        //清除当前正在播放的轮播图
        $bannerLis.removeClass("active");

        //获得需要播放的轮播图
        var $banner = $bannerLis.eq(thatIndex);

        //播放轮播图
        $banner.addClass("active");
        $banner.css("opacity", "0");
        animate($banner[0], {opacity : 100}, 40);
    }
}


/***
 * 获得服务器端发送过来的数据
 * @param url 服务器的url地址
 * @param method 请求方式
 * @param dataType 数据的类型
 * @param parem 传递的参数
 * @param callback 回调函数
 */
function getData(url, method, dataType, parem, callback) {
    $.ajax({
        url: url,
        type: method,
        dataType: dataType,
        data: parem,
        success:callback,

    });
}


/***
 * 设置地址
 * @param id 用于设置地址的标签的id选择器名称
 * @param data 地址数据
 * @param flag 地址的标志位(1:省，2:市，3:区)
 * @param callback 回调函数
 */
function setAddress(id, data, flag, callback) {

    $("#" + id + " .select-options").children("li").remove();

    //遍历json数组
    $.each(data, function(index, obj) {
        var $li = $("<li></li>").html(obj.name).attr("value", obj.code);
        $("#" + id + " .select-options").append($li);
    });

    var code = $("#" + id + " .select-options").children("li:eq(0)").attr("value");
    var name = $("#" + id + " .select-options").children("li:eq(0)")[0].innerHTML;
    $("#" + id + " .select-name").html(name);

    if(flag != null) {
        var parem = {"citycode": code, "flag": flag};
        getData(config.addressUrl, 'get', 'jsonp', parem, callback);
    }
}


/**
 * 改变地址
 * @param id 展示地址的标签的id选择器名称
 * @param flag 地址的标志位(1:省，2:市，3:区)
 * @param callback 回调函数
 */
function changeAddress(id, flag, callback) {

    $("#" + id).mouseenter(function() {
        $("#" + id + " .select-options").show();
    });

    $("#" + id).mouseleave(function() {
        $("#" + id + "  .select-options").hide();
    });

    $("#" + id + " .select-options li").click(function() {
        $("#" + id + " .select-name").html($(this)[0].innerHTML);
        $("#" + id + " .select-options").hide();

        var code = $(this).attr("value");

        if(flag != null) {
            var code = $(this).attr("value");
            var parem = {"citycode": code, "flag": flag};
            getData(config.addressUrl, 'get', 'jsonp', parem, callback);
        }
    });
}


/***
 * 为标签设置overflow-y属性
 * @param id 标签的id选择器名称
 */
function setOverflowY(id) {

    var $dom = $("#" + id + " .select-options");
    var $li = $("#" + id + " .select-options li")
    var height = $dom.height();

    if(height < 122) {
        $dom.css("overflow-y", "inherit");
        $li.css("width", "100%");
    } else {
        $dom.css("overflow-y", "scroll");
        $li.css("width", "93px");
    }
}


/***
 * 创建分页效果
 * @param num 一共有num条数据
 * @param amount 每页显示amount条数据
 * @param startIndex 每页第一条数据的下标
 * @param className 将分页效果添加的类名为className的标签下
 * @param callback 回调函数
 */
function createPage(num, amount, startIndex, className, callback) {

    //计算一共有多少页商品信息
    var totalPage = Math.ceil(num / amount);

    //显示商品的个数
    $(".appra-num").html(num);

    //计算当前显示第几页商品信息
    var pageIndex = (startIndex + amount) / amount;

    var tag = "<div class='rate-page'>";

    //如果当前显示的是第1页的商品信息
    if(pageIndex == 1) {

        //不能点击上一页按钮
        tag += "<span class='page-prev'>&lt;&lt;上一页</span>";

        //如果当前展示的不是第1页的商品咨询信息
    } else {

        //能点击上一页按钮
        tag += "<a href='javascript:;' class='page-prev'>&lt;&lt;上一页</a>";
    }

    //创建分页按钮
    for(var i = 1; i <= totalPage; i++) {
        if(i == pageIndex) {
            tag += "<span>" + i + "</span>";
        } else {
            tag += "<a href='javascript:;'>" + i + "</a>";
        }
    }

    //如果当前显示的是最后一页商品咨询信息
    if(pageIndex == totalPage) {

        //不能点击下一页按钮
        tag += "<span class='page-next'>下一页&gt;&gt;</span>";

        //如果当前展示的不是最后一页的商品咨询信息
    } else {

        //可以点击下一页按钮
        tag += "<a href='javascript:;' class='page-next'>下一页&gt;&gt;</a>";
    }

    tag += "</div>";

    $("." + className + " .rate-page").remove();
    $("." + className).append($(tag))

    //上一页按钮
    $(".page-prev").click(function() {

        //如果上一页按钮可以点击
        if(this.nodeName == "A") {

            //向上翻一页
            pageIndex--;
            startIndex = amount * pageIndex - amount;
            var param = {"flag": 2, "startIndex": startIndex, "amount": amount};
            getData(config.productUrl, 'get', 'jsonp', param, callback);
        }
    });

    //下一页按钮
    $(".page-next").click(function() {

        //如果下一页按钮可以点击
        if(this.nodeName == "A") {

            //向下翻一页
            pageIndex++;
            startIndex = amount * pageIndex - amount;

            var param = {"flag": 2, "startIndex": startIndex, "amount": amount};
            getData(config.productUrl, 'get', 'jsonp', param, callback);

            param = {"flag": 1};
            getData(config.productUrl, 'get', 'jsonp', param, createPage);
        }
    });

    //点击数字，翻页
    var childrens = $(".rate-page")[0].children;
    for(var i = 1; i < childrens.length - 1; i++) {

        $(childrens[i]).click(function() {
            if(this.nodeName == "A") {
                pageIndex = this.innerHTML;
                startIndex = amount * pageIndex - amount;
                var param = {"flag": 2, "startIndex": startIndex, "amount": amount};
                getData(config.productUrl, 'get', 'jsonp', param, callback);
            }
        });
    }
}


/**
 * 重置标签中的数据
 * @param className 标签的类名
 */
function resetData(className) {
    var data = $("." + className).val();
    data = Tools.removeAll(data);
    $("." + className).val(data);

    return data;
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

        $("." + className + " .notice-info").css("display", "inline-block");

        if (inputClassName.length > 0) {
            $("." + className + " ." + inputClassName).css("border-color", "#e22");
        }

        $("." + className + " .notice-content").css("color", "#e22");
        $("." + className + " .notice-icon").css({
            "background-position" : "-17px -100px"
        });

        //如果输入的信息验证成功
    } else if(flag == 1) {

        $("." + className + " .notice-info").css("display", "inline-block");
        $("." + className + " .notice-content").css("color", "#3D882D");
        $("." + className + " .notice-icon").css({
            "background-position" : "0px -117px"
        });
    }

    $("." + className + " .notice-content")[0].innerHTML = text;
}


/**
 * 隐藏检测结果
 * @param className 标签的类名
 * @param inputClassName 输入框的类名
 */
function hideCheckResult(className, inputClassName) {
    $("." + className + " .notice-info").css("display", "none");

    if (inputClassName.length > 0) {
        $("." + className + " ." + inputClassName).css("border-color", "#C2C2C2");
    }
}


/**
 * 隐藏提示信息
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


//检测用户名
function checkUsername() {
    var username = resetData("input-username");
    var char = username.charAt(0);

    if (username.length == 0) {
        return 1;
    }

    if (username.length < 3 || username.length > 15) {
        return 2;
    }

    var Regx = /^[A-Za-z]*$/;
    if (!Regx.test(char)) {
        return 3;
    }

    Regx = /^[A-Za-z0-9_]*$/;
    if (!Regx.test(username)) {
        return 4;
    }

    return 5;
}


//检测密码
function checkPassword() {
    var password = resetData("input-password");

    if (password.length == 0) {
        return 1;
    }

    if (password.length < 6 || password.length > 16) {
        return 2;
    }

    return 3;
}


//显示用户名的检测结果
function showUsernameResult() {

    //检测用户名
    hideNotice("username");
    var flag = checkUsername();

    if (flag ==  1) {
        showCheckResult("username", "input-username", 0, "请填写用户名");
        return false;
    } else if (flag == 2) {
        showCheckResult("username", "input-username", 0, "长度应为3~15个字符");
        return false;
    } else if (flag == 3) {
        showCheckResult("username", "input-username", 0, "用户名必需以英文字母开头");
        return false;
    } else if (flag == 4){
        showCheckResult("username", "input-username", 0, "用户名需由字母、数字或下划线组成");
        return false;
    } else if (flag == 5) {
        showCheckResult("username", "input-username", 1, "用户名填写正确");
        return true;
    }
}


//显示密码的检测结果
function showPasswordResult() {

    //检测密码
    hideNotice("password");
    var flag = checkPassword();

    if (flag == 1) {
        showCheckResult("password", "input-password", 0, "请填写密码");
        return false;
    } else if (flag == 2) {
        showCheckResult("password", "input-password", 0, "密码长度应为6~16个字符");
        return false;
    } else if (flag == 3) {
        showCheckResult("password", "input-password", 1, "您的密码输入正确");
        return true;
    }
}
