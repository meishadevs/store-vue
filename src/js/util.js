/**
 * Created by Administrator on 2017/4/5.
 * 一些通用的js脚本
 */

//图片轮播
function setBanner() {

    //获得小圆点
    var $circleLis = $(".circle-list li");

    //获得轮播图
    var $bannerLis = $(".banner-list li");

    //轮播图中图片的下标
    var thatIndex = 0;

    //用于创建定时器
    var timer = null;

    //给小圆点添加点击事件
    $circleLis.on("click", function() {

        //如果当前用户选中的小圆点的下标与正在播放的轮播图的下标不同
        //才播放当前与用户点击的小圆点对应的轮播图
        if($(this).index() != thatIndex) {

            //设置轮播图的下标为小圆点的下标
            thatIndex = $(this).index();

            //选中当前点击的小圆点
            $(this).addClass("current").siblings("li").removeClass("current");

            //隐藏轮播图
            $bannerLis.removeClass("active");

            //根据小圆点的下标，选中对应的轮播图
            var $banner = $bannerLis.eq(thatIndex);

            //播放轮播图
            $banner.addClass("active");
            $banner.css("opacity", "0");
            animate($banner[0], {opacity : 100}, 40);
        }
    });

    //创建定时器,用于自动播放轮播图
    timer = setInterval(autoPlayBanner, 3000);

    //当鼠标放在轮播图上的时候，暂停播放轮播图
    $(".banner-list").mouseenter(function() {
        clearInterval(timer);
    });

    //当鼠标离开轮播图时，继续播放轮播图
    $(".banner-list").mouseleave(function() {
        timer = setInterval(autoPlayBanner, 3000);
    });

    //自动播放轮播图
    function autoPlayBanner() {

        //如果播放完了最后一张
        //从第1张开始播放
        thatIndex = ++thatIndex > $bannerLis.length - 1 ? 0 : thatIndex;

        //选中小圆点
        $circleLis.removeClass("current");
        $circleLis.eq(thatIndex).addClass("current");

        //隐藏轮播图
        $bannerLis.removeClass("active");

        //根据小圆点的下标，选中对应的轮播图
        var $banner = $bannerLis.eq(thatIndex);

        //播放轮播图
        $banner.addClass("active");
        $banner.css("opacity", "0");
        animate($banner[0], {opacity : 100}, 40);
    }
}


/***
 * 获得数据的通用方法
 * @param url 请求的url
 * @param method 请求的方式
 * @param dataType 请求的数据类型
 * @param data 传递的参数
 * @param callback 回调函数
 * @param jsonp 在一个jsonp请求中重写回调函数的名字,这个值用来替代在 "callback=?"中的callback
 * @param jsonpCallback 为jsonp请求指定一个回调函数名,这个值将用来取代jQuery自动生成的随机函数名
 */
function getData(url, method, dataType, parem, callback) {
    $.ajax({
        url: url,
        type: method,
        dataType: dataType,
        data: parem,
        success:callback
    });
}


/***
 * 设置收货地址
 * @param id 标签的id
 * @param data 从服务器端传过来的数据
 * @param flag 标志位(1:省，2:市，3:区)
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
 * 改变收货地址
 * @param id 标签的id
 * @param flag 标志位(1:省，2:市，3:区)
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
 * 设置标签的overflow-y属性
 * @param id 标签的id
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