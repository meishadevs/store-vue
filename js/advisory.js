/**
 * Created by Administrator on 2017/5/10.
 * 处理商品咨询对象的js脚本
 */

//商品咨询对象
function Advisory() {

    //会员头像
    this.memberImage = "";

    //会员名
    this.memberName = "";

    //会员等级
    this.memberGrade = "";

    //咨询的问题
    this.Question = "";

    //问题的回复
    this.Answer = "";

    //咨询的时间
    this.advisoryTime = "";
}

Advisory.prototype = {
    
    bindDOM : function () {
        var str = '';
        str += '<li class="clearfix">';
        str += '<div class="member-info">';
        str += '<div class="member-image">';
        str += '<img src="' + this.memberImage + '" alt="" />';
        str += '</div>';
        str += '<p class="member-name">' + this.memberName + '</p>';
        str += '<p class="member-grade">' + this.memberGrade + '</p>';
        str += '</div>';
        str += '<div class="shop-advisory">';
        str += '<div class="top clearfix">';
        str += '<div class="advisory-name">';
        str += '[商品咨询]';
        str += '</div>';
        str += '<div class="advisory-time">';
        str += this.advisoryTime;
        str += '</div>';
        str += '</div>';
        str += '<div class="advisory-content">';
        str += '<div class="question">';
        str += this.Question;
        str += '</div>';
        str += '<div class="answer">';
        str += '<span>慕课网回复：</span>' + this.Answer +'';
        str += '<div class="triangle"></div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</li>';

        return str;
    }
}


