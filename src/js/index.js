/**
 * Created by Administrator on 2017/3/31.
 * 网站首页的js脚本
 */

$(function() {

    //处理商品分类上的逻辑
    setShopClass();

    //图片轮播
    setBanner();
});

//处理商品分类上的逻辑
function setShopClass() {

    //鼠标放在商品分类导航栏上
    $(".shopClass-item").mouseenter(function() {

        $(this).addClass("active").siblings("dl").removeClass("active");

        $(".shopClass-list .cate-item").css("display", "none");

        $(".shopClass-list .cate-item")
            .eq($(this).index())
            .css("display", "block");
    });

    //鼠标离开商品分类导航栏
    $(".shopClassBar").mouseleave(function() {

        $(".shopClass-item").removeClass("active");
        $(".shopClass-list .cate-item").css("display", "none");
    });
}









