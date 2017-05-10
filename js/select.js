/**
 * Created by Administrator on 2017/5/7.
 * 商品筛选页的js脚本
 */

$(function () {

    //隐藏筛选项
    hideFilterItem();

    //显示筛选项
    showFilterItem();
});


//隐藏筛选项
function hideFilterItem() {
    $(".screeningBody a").on("click", function () {
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