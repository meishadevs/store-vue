/**
 * Created by Administrator on 2017/4/5.
 * 商品分类页的js脚本
 */

$(function () {

    //设置导航栏
    setNav();

    //图片轮播
    setBanner();
});


//设置导航栏
function setNav() {

    //获得导航栏中导航项的数量
    var length = $(".nav li").length;

    //获得储存在本地的导航项的下标
    var index = parseInt(localStorage.getItem("active"));
    localStorage.setItem("active", 0);

    if(index >= 0 && index < length) {
        $(".nav li").eq(index).addClass("active").siblings("li").removeClass("active");
    }
}