/**
 * Created by Administrator on 2017/3/31.
 * 公共部分的js脚本
 */

$(function() {

    //将网站添加至收藏夹
    collectionSite();

    //检查用户状态
    checkUserStatus();

    //获得搜索列表
    getSearchList();

    //搜索数据
    searchData();

    //导航栏切换
    changeNav();

    //回到顶部
    gotoTop();

    //设置购物车上商品的数量
    setProductNum();
});


//将网站添加至收藏夹
function collectionSite() {
    $(".collection").on('click', function () {
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏夹失败，请使用Ctrl+D添加！")
    });
}


//检查用户状态
function checkUserStatus() {

    var username = localStorage.getItem("username");

    //如果用户名存在
    if (username.length >= 3) {

        var tag = '欢迎';
        tag += '<a class="showUsername" href="javascript:;">' + username + '</a>';
        tag += '来到慕课网&nbsp;';
        tag += '<a class="exit" href="javascript:;">[退出]</a>';
        $(".topbar .rightArea").html(tag);

        //点击退出按钮
        $(".topbar .exit").on('click', function () {
            var tag = '欢迎来到慕课网&nbsp;';
            tag += '<a class="loginLink" href="login.html">[登录]</a>&nbsp;';
            tag += '<a class="registerLink" href="register.html">[免费注册]</a>';
            $(".topbar .rightArea").html(tag);
        });

    //如果用户名不存在
    } else {

        var tag = '欢迎来到慕课网&nbsp;';
        tag += '<a class="loginLink" href="login.html">[登录]</a>&nbsp;';
        tag += '<a class="registerLink" href="register.html">[免费注册]</a>';
        $(".topbar .rightArea").html(tag);
    }
}


//获得搜索列表
function getSearchList() {

    //鼠标离开搜索区域，清除搜索结果列表
    $(".search-box").mouseleave(function() {
        $(".search-box ul").remove();
    });

    //当松开键盘上的按键后,调用此方法
    $(".search-text").keyup(function() {

        //每当产生新的搜索结果之前，删除以前的搜索结果
        $(".search-box ul").remove();

        //获得用户输入的关键字
        var key = $(".search-text").val();

        var parem = {
            'code': 'utf-8',
            'q': key,
            '_ksTS': '1490839958568_2749',
            'jsonpCallback': 'jsonp2750',
            'area': 'b2c',
            'k': 1,
            'bucketid': 7,
            'src': 'tmall_pc'
            };

        getData(config.taobaoUrl, 'get', 'jsonp', parem, getSearchResult);
    });
}


//获得搜索结果
function getSearchResult(data) {

    var arrayData = data.result;

    //获得用户输入的关键字
    var key = $(".search-text").val();

    //展示搜索结果列表
    showSearchList(arrayData, key);

    //选择一个搜索结果
    selectResult(arrayData);
}


//展示搜索结果列表
function showSearchList(array, keyWord) {

    //如果没有搜索到数据，就不创建搜索结果列表
    if(array.length <= 0) {
        return;
    }

    var tag = "<ul class='result-list'>";

    //遍历搜索结果
    $.each(array, function(index, result) {

        tag += "<li class='clearfix' value=" + index + ">";

        //获得关键字在搜索结果中的位置
        var index = result[0].indexOf(keyWord);

        //如果搜索结果中不存在用户输入的关键字
        if(index == -1) {
            tag += "<p class='proName'>" + result[0] + "</p>";

        //搜索结果中存在用户输入的关键字
        } else {

            //关键词在搜索结果的起始位置
            if(index == 0) {

                tag += "<p class='proName'>" + "<em>" + keyWord + "</em>"+ result[0].substring(keyWord.length) +"</p>";

            //关键词在搜索结果的结束位置
            } else if(index == result[0].length - keyWord.length) {

                tag += "<p class='proName'>" + result[0].substring(0, result[0].length - keyWord.length) + "<em>" + keyWord + "</em>" + "</p>";

                //关键词在搜索结果的其他位置
            } else {

                //将搜索结果以关键字为分隔符切割
                var arrayInfo = result[0].split(keyWord);

                tag += "<p class='proName'>";

                for(var i = 0; i < arrayInfo.length - 1; i++) {

                    tag += arrayInfo[i];
                    tag += "<em>" + keyWord + "</em>";
                }

                tag += arrayInfo[arrayInfo.length - 1];

                tag += "</p>"
            }
        }

        //搜索到的结果数量
        tag += "<p class='resultNum'>约" + result[1] + "个商品</p>";

        tag += "</li>"
    });

    tag += "</ul>";

    $(".search-box").append(tag);
}


//选择一个搜索结果
function selectResult(array) {

    //获得所有用于展示搜索结果的li标签
    var $lis = $(".result-list li");

    //遍历li标签
    $.each($lis, function(index, ele) {

        //给每个li标签添加一个点击事件
        ele.onclick = function() {

            //获得当前选中的li标签的value属性的值
            var value = $(this).attr("value");

            //清除搜索结果列表
            $(".search-box ul").remove();

            //获得当前选中的搜索结果，并且将搜索结果设置到搜索框中
            $(".search-text").val(array[value][0]);
        }
    });
}


//搜索数据
function searchData() {

    //点击搜索按钮
    $(".search-btn").click(function () {
        var keyWord = $(".search-text ").val();
        window.location = config.baiduUrl + "?wd=" + keyWord;
    });
}


//导航栏切换
function changeNav() {
    var $lis = $(".nav li");
    $.each($lis, function(index, ele) {

        $(ele).click(function() {

            $(this).addClass("active").siblings("li").removeClass("active");

            //将当前选中的导航项的下标保存在本地
            localStorage.setItem("active", $(this).index());
        });
    });
}


//回到顶部
function gotoTop() {
    var goTop = $("goTop");

    var leader = 0;
    var target = 0;
    var timer = null;

    //监听浏览器滑动
    $(window).scroll(function () {

        //如果滑动了浏览器的滑块，显示回到顶部按钮
        $(document).scrollTop() > 0 ? $("#goTop").show() : $("#goTop").hide();

        //把滑块滑动的距离给起始位置
        leader = $(document).scrollTop();
    });

    //个回到顶部按钮添加一个点击事件
    $("#goTop").on("click", function () {

        clearInterval(timer);

        target = 0;

        timer = setInterval(function()
        {
            leader = leader + (target - leader ) / 10;

            //去往页面的某个位置
            window.scrollTo(0,leader);

            if(leader == target)
            {
                clearInterval(timer);
            }
        }, 10);
    });
}


//设置购物车上商品的数量
function setProductNum() {

    //获得商品的数量
    var productNum = parseInt(localStorage.getItem('productNum'));
    if (isNaN(productNum)) {
        productNum = 1;
    }

    $(".shopCar .shopNum").text(productNum);
}
