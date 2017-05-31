/**
 * Created by Administrator on 2017/5/7.
 * 商品筛选页的js脚本
 */

$(function () {

    //隐藏筛选项
    hideFilterItem();

    //显示筛选项
    showFilterItem();

    //获得商品信息
    getProductInfo();
});


//隐藏筛选项
function hideFilterItem() {
    $(".screening-box a").on("click", function () {
        var className = $(this).attr("data");
        var position = $(this).attr("position");
        console.log("className:", className);
        console.log("position:", position);
        console.log(this.innerHTML);
        $("." + className).hide();
        $("." + position).show();
        $("." + position + "-text").html(this.innerHTML);
    });
}


//显示筛选项
function showFilterItem() {
    $(".userPosition a").on("click", function () {
        $(this).parent().hide();
        var className = $(this).attr("data-class");
        $("." + className).show();
    });
}


//展示商品信息
var showProductInfo = function(data) {

    var tag = '';

    $.each(data, function(index, obj) {

        //实例化商品对象
        var product = new Product();
        product.productImage = obj.productimage;
        product.productName =  obj.productname;
        product.productPrice = obj.productprice;
        product.commentNum = obj.commentnum;
        tag += product.bindDOM();
    });

    $(".brick-list").html(tag);
}


//展示分页
function showPage(data) {

    //createPage(data, config.productAmount, config.productStartIndex, 'page-box', showProductInfo);

    //计算一共有多少页商品信息
    var totalPage = Math.ceil(data / config.productAmount);
    $(".total-page").html(totalPage);

    //显示商品的个数
    $(".product-num").html(data);

    //计算当前显示第几页商品信息
    var pageIndex = (config.productStartIndex + config.productAmount) / config.productAmount;
    $(".now-page").html(pageIndex);

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

    $(".page-box .rate-page").remove();
    $(".page-box").append($(tag))

    //上一页按钮
    $(".page-prev").click(function() {

        //如果上一页按钮可以点击
        if(this.nodeName == "A") {

            //向上翻一页
            pageIndex--;
            config.productStartIndex = config.productAmount * pageIndex - config.productAmount;
            getProductInfo();
        }
    });

    //下一页按钮
    $(".page-next").click(function() {

        //如果下一页按钮可以点击
        if(this.nodeName == "A") {

            //向下翻一页
            pageIndex++;
            config.productStartIndex = config.productAmount * pageIndex - config.productAmount;
            getProductInfo();
        }
    });

    //点击数字，翻页
    var childrens = $(".rate-page")[0].children;
    for(var i = 1; i < childrens.length - 1; i++) {

        $(childrens[i]).click(function() {
            if(this.nodeName == "A") {
                pageIndex = this.innerHTML;
                config.productStartIndex = config.productAmount * pageIndex - config.productAmount;
                getProductInfo();
            }
        });
    }
}


//获得商品信息
function getProductInfo() {

    //发送get请求，获得商品信息
    var param = {"flag": 2, "startIndex": config.productStartIndex, "amount": config.productAmount};
    getData(config.productUrl, 'get', 'jsonp', param, showProductInfo);

    //发送get请求，获得商品信息的条数
    param = {"flag": 1};
    getData(config.productUrl, 'get', 'jsonp', param, showPage);
}