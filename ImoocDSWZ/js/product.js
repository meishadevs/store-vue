/**
 * Created by Administrator on 2017/5/18.
 * 处理商品对象的js脚本
 */

//商品对象
function Product() {

    //商品图片
    this.productImage = '';

    //商品名称
    this.productName = '';

    //商品价格
    this.productPrice = '';

    //商品评论的数量
    this.commentNum = '';
}

Product.prototype = {

    bindDOM : function () {

        var tag = '';
        tag += '<li class="brick-item">';
        tag += '<a href="proinfo.html">';
        tag += '<div class="p-image">';
        tag += '<img src="' + this.productImage + '" width="150" height="150" alt="">';
        tag += '</div>';
        tag += '<div class="p-name">' + this.productName + '</div>';
        tag += '<div class="p-price"><span class="num">' + this.productPrice + '</span>元</div>';
        tag += '<p class="p-comment">' + this.commentNum + '人评价</p>';
        tag += '</a>';
        tag += '</li>';

        return tag;
    }
}
