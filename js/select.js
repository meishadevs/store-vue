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
        $("." + className).hide();
    });
}