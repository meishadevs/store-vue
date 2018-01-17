
<!-- 商品介绍组件 -->

<template>
  <div class="product-intro">
    <div class="image">
      <a href="javascript:;">
        <img src="../../static/images/intro.jpg" alt="">
      </a>
    </div>
    <div class="text-info">
      <div class="info-title clearfix">
        <h3>强烈推荐</h3>
        <h4>货比三家，还选</h4>
      </div>
      <p class="info-content">
        现在就是买mini的好时候！换代清仓直降，但苹果品质不变！A5双核，内置Lightning闪电接口，正反可插，方便人性。小身材，炫丽的7.9英寸显示屏，7.2mm的厚度，薄如铅笔。女生包包随身携带更时尚！facetime视频通话，与密友24小时畅聊不断线。微信倾力打造，你的智能助理。苹果的牌子就不用我说了，1111补仓，存货不多哦！
      </p>
    </div>
    <div class="hr-45"></div>
    <div class="text-info">
      <div class="info-title clearfix">
        <h3>精美图片</h3>
      </div>
      <p class="info-content">
        苹果iPad7.9 英寸显示屏可带来新的iPad体验，绚丽的显示屏，在每一寸画面中呈现灵动鲜活的美妙影像。
        苹果miniMD528CH/A采用500 万像素 iSight 摄像头，清晰记录每一次的幸福。
      </p>
    </div>
    <div class="hr-45"></div>
    <div class="image-info">
      <img src="../../static/images/sy.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: "ProductIntro"
  };
</script>

<style scoped>

  .product-intro .image {
    margin: 30px 0;
    text-align: center;
  }

  .product-intro .text-info {
    padding: 15px;
  }

  .product-intro .info-title {
    border-bottom: solid 2px #ccc;
  }

  .product-intro .info-title h3 {
    width: 73px;
    line-height: 36px;
    margin-bottom: -2px;
    border-bottom: solid 2px #2457A6;
    font-size: 18px;
    color: #2457A6;
    float: left;
  }

  .product-intro .info-title h4 {
    padding: 12px 0 0 5px;
    color: #666666;
    float: left;
  }

  .product-intro .info-content {
    margin-top: 16px;
    font: 14px/22px "宋体", "SimSun";
    color: #656565;
  }

  .product-intro .image-info {
    margin-left: 23px;
  }
</style>
