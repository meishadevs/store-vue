/**
 * Created by Administrator on 2017/5/7.
 * 商品筛选页的js脚本
 */

$(function () {

    //隐藏筛选项
    hideFilterItem();
});

//隐藏筛选项
function hideFilterItem() {
    $(".screeningBody a").on("click", function () {
        var className = $(this).attr("data");
        var position = $(this).attr("position");
        $("." + className).hide();
        $("." + position).show();
        $("." + position + "-text").html(this.innerHTML);
    });
}