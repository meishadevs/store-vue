/**
 * Created by Administrator on 2017/4/5.
 * 商品信息展示页的js脚本
 */

$(function() {

    //Tab切换
    tableChange();

    //选择收货地址
    selectAddress();

    //选择商品的颜色
    selectColor();

    //选择商品的规格
    selectStyle();

    //增加商品数量
    addProduct();

    //减少商品数量
    reduceProduct();

    //检测商品数量是否合法
    checkProductNum();

    //选择产品图片
    selectProductImg();

    //放大产品图片
    zoomProductImg();

    //获得商品咨询信息
    getAdvisory();

    //展示商品咨询信息
    intoAdvisory();

    //保存商品的信息
    saveProductInfo();
});


//Table切换
function tableChange() {

    var $lis = $(".topArea .nav-bar li");
    var $tabLis = $(".table li");

    $lis.on("click", function() {
        $(this).addClass("active").siblings("li").removeClass("active");

        $tabLis.eq($(this).index()).css("display", "block").siblings("li").css("display", "none");
    });
}


//获得所有的省份
var province = function(data) {

    setAddress("province", data);

    //切换省
    changeAddress("province");
}


//选择收货地址
function selectAddress() {

    //发送请求获取省份信息
    var parem = {"citycode": 0, "flag": 1};
    getData(config.addressUrl, 'get', 'jsonp', parem, province);
}


//选择商品的颜色
function selectColor() {
    $(".select-color .des-item").on("click", function() {
        $(this).addClass("des-item-active").siblings().removeClass("des-item-active");
        $(".productColor").html($(this)[0].innerHTML);
    });
}


//选择商品的规格
function selectStyle() {
    $(".select-style .des-item").on("click", function() {
        $(this).addClass("des-item-active").siblings().removeClass("des-item-active");
        $(".productStyle").html($(this)[0].innerHTML);
    });
}


//增加商品数量
function addProduct() {

    //用于记录商品数量
    var proNum = 0;
    $(".plus").on("click", function() {

        //获得当前的商品数量
        proNum = parseInt($(".product-num").val());

        //如果proNum不是数字
        if(isNaN(proNum)) {
            proNum = 1;

        //proNum是数字
        } else {

            //限制一次只能购买9件商品
            if(proNum < 9) {
                proNum++;
            }
        }

        $(".product-num").val(proNum);
    });

}


//减少商品数量
function reduceProduct() {

    //用于记录商品数量
    var proNum = 0;

    $(".reduce").on("click", function() {

        //获得当前的商品数量
        proNum = parseInt($(".product-num").val());

        if(isNaN(proNum)) {
            proNum = 1;
        } else {
            if(proNum > 1) {
                proNum--;
            }
        }

        $(".product-num").val(proNum);
    });
}


//检测商品数量是否合法
function checkProductNum() {

    //用于记录商品的数量
    var proNum = 0;
    var text = null;

    $(".product-num").keyup(function() {

        text = $(".product-num").val();

        //如果在数量框中输入了商品的数量
        if(text.length != 0) {

            //获得当前的商品数量
            proNum = parseInt(text);

            //如果输入的商品数量不在一个合理的范围之内
            if(!(proNum >= 1 && proNum <= 9)) {
                $(".product-num").val(1)
            }
        }
    });
}


//选择产品图片
function selectProductImg() {

    var length = $(".small li").length;

    //鼠标放在小图上
    $(".small li").mouseenter(function() {

        $(this).addClass("active").siblings("li").removeClass("active");

        //当前选中的图片的索引
        var index = $(this).index() + 1;

        //根据图片的索引，设置产品图片
        $(".middle-box img").attr("src", "images/middlepad" + index + ".jpg");
        $(".big-box img").attr("src", "images/bigpad" + index + ".jpg");
    });
}


//放大产品图片
function zoomProductImg() {

    //鼠标放在承载中等大小图片的盒子上
    $(".middle-box").mouseenter(function () {

        //显示放大镜
        $(".magnifier").show();

        //显示大图
        $(".big-box").show();
    });

    //鼠标离开承载中等大小图片的盒子上
    $(".middle-box").mouseleave(function () {

        //隐藏放大镜
        $(".magnifier").hide();

        //隐藏大图
        $(".big-box").hide();
    });

    $(".middle-box").mousemove(function (event) {

        //计算放大镜的位置
        var left = event.pageX - $(this).offsetParent().offset().left - $(".magnifier").width() / 2;
        var top = event.pageY - $(this).offsetParent().offset().top - $(".magnifier").height() / 2;

        //放大镜在水平方向上移动的最大距离
        var maxLeft = $(".middle-box").width() - $(".magnifier").width();

        //放大镜在竖直方向上移动的最大距离
        var maxTop = $(".middle-box").height() - $(".magnifier").height();

        if (left < 0) {
            left = 0;
        } else if (left > maxLeft) {
            left = maxLeft;
        }

        if (top < 0) {
            top = 0;
        } else if (top > maxTop) {
            top = maxTop;
        }

        //设置放大镜的位置
        $(".magnifier").css({
            left: left + "px",
            top: top + "px"
        });

        //大图的偏移量
        var bigLeft = -left * $(".big-box img").width() / $(".middle-box").width() + "px";
        var bigTop = -top * $(".big-box img").height() / $(".middle-box").height() + "px";

        //移动大图
        $(".big-box img").css({
            left: bigLeft,
            top: bigTop
        });
    });
}


//展示商品的咨询信息
var showAdvisory = function(data) {

    var tag = '';

    $.each(data, function(index, obj) {

        //实例化商品咨询对象
        var advisory = new Advisory();
        advisory.memberImage = obj.memberimage;
        advisory.memberName =  obj.membernum;
        advisory.memberGrade = obj.membergrade;
        advisory.advisoryTime = obj.time;
        advisory.Question = obj.question;
        advisory.Answer = obj.answer;
        tag += advisory.bindDOM();
    });

    $(".advisory-list").html(tag);
}


//展示分页
function showPage(data) {

    //计算一共有多少页商品咨询信息
    var totalPage = Math.ceil(data / config.advisoryAmount);

    //显示商品咨询的条数
    $(".appra-num").html(data);

    //计算当前显示的是第几页商品咨询信息
    var pageIndex = (config.advisoryStartIndex + config.advisoryAmount) / config.advisoryAmount;

    var tag = "<div class='rate-page'>";

    //如果当前显示的是第1页的商品咨询信息
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

    $(".advisory-box .rate-page").remove();
    $(".advisory-box").append($(tag))

    //上一页按钮
    $(".page-prev").click(function() {

        //如果上一页按钮可以点击
        if(this.nodeName == "A") {

            //向上翻一页
            pageIndex--;
            config.advisoryStartIndex = config.advisoryAmount * pageIndex - config.advisoryAmount;
            getAdvisory();
        }
    });

    //下一页按钮
    $(".page-next").click(function() {

        //如果下一页按钮可以点击
        if(this.nodeName == "A") {

            //向下翻一页
            pageIndex++;
            config.advisoryStartIndex = config.advisoryAmount * pageIndex - config.advisoryAmount;
            getAdvisory();
        }
    });

    //点击数字，翻页
    var childrens = $(".rate-page")[0].children;
    for(var i = 1; i < childrens.length - 1; i++) {

        $(childrens[i]).click(function() {
            if(this.nodeName == "A") {
                pageIndex = this.innerHTML;
                config.advisoryStartIndex = config.advisoryAmount * pageIndex - config.advisoryAmount;
                getAdvisory();
            }
        });
    }
}


//获得商品咨询信息
function getAdvisory() {

    //发送get请求，获得商品咨询的信息
    var param = {"flag": 2, "startIndex": config.advisoryStartIndex, "amount": config.advisoryAmount};
    getData(config.advisoryUrl, 'get', 'jsonp', param, showAdvisory);

    //发送get请求，获得商品咨询信息的条数
    param = {"flag": 1};
    getData(config.advisoryUrl, 'get', 'jsonp', param, showPage);
}


//展示商品咨询信息
function intoAdvisory() {
    var flag = localStorage.getItem('flag');
    localStorage.setItem('flag', 0);

    if (flag == 1) {
        window.scrollTo(0, 725);
        $(".topArea .nav-bar li:eq(1)").addClass("active").siblings("li").removeClass("active");
        $(".table li:eq(1)").eq($(this).index()).css("display", "block").siblings("li").css("display", "none");
    }
}


//保存商品的信息
function saveProductInfo() {

    $('.buy').on('click', function () {

        //获得商品的数量
        var productNum = $('.product-num').val();
        localStorage.setItem("productNum", productNum);
    });
}








