
<!-- 商品信息展示组件 -->

<template>
  <div class="show-proinfo">
    <h3 class="title">{{ productInfo.productName }}</h3>
    <div class="dl clearfix">
      <div class="dt">慕课价</div>
      <div class="dd">
        <span class="des-money">
          <em>￥</em>{{ productInfo.productPrice }}
        </span>
      </div>
    </div>
    <div class="dl clearfix">
      <div class="dt">优惠</div>
      <div class="dd">
        <span class="hg">
          <i class="hg-icon">满换购</i>购ipad加价优惠够配件或USB充电插座
        </span>
      </div>
    </div>

    <!-- 选择手机的属性 s -->
    <div class="des-position">
      <div class="dl clearfix">
        <div class="dt">送到</div>
        <div class="dd">
          <!-- 地址选择组件 s -->
          <selectAddress></selectAddress>
          <!-- 地址选择组件 e -->
          <span class="the-god">有货，可当日出货</span>
        </div>
      </div>
      <div class="dl clearfix">
        <div class="dt colorSelect">选择颜色</div>
        <!-- 颜色选择组件 s -->
        <selectColor></selectColor>
        <!-- 颜色选择组件 e -->
      </div>
      <div class="dl clearfix">
        <div class="dt des-select-more">选择规格</div>
        <div class="dd">
          <!-- 选择产品规格组件 s -->
          <selectStyle></selectStyle>
          <!-- 选择产品规格组件 e -->
        </div>
      </div>
      <div class="dl">
        <div class="dt">数量</div>
        <div class="dd clearfix">
          <div class="des-number clearfix">
            <div class="reduce">-</div>
            <div class="input-number">
              <input type="text" value="1" class="product-num">
            </div>
            <div class="plus">+</div>
          </div>
          <span class="buy-number">限购<em>9</em>件</span>
        </div>
      </div>
    </div>
    <!-- 选择手机的属性 e -->

    <!-- 显示已经选好的手机的属性 -->
    <div class="show-style clearfix">
      <div class="name">已选择</div>
      <div class="style">
        “
        <span class="product-color">{{ productInfo.productColor }}</span>
        <span class="line"></span>
        <span class="product-style">{{ productInfo.productStyle }}</span>
        ”
      </div>
    </div>
    <!-- 显示已经选好的手机的属性 e -->

    <div class="des-button clearfix">
      <a href="javascript:;" class="buy">加入购物车</a>
      <span class="line"></span>
      <a href="javascript:;" class="buy">立即购买</a>
    </div>

    <p class="notice">注意：此商品可提供普通发票，不提供增值税发票。</p>
  </div>
</template>

<script>
  import selectAddress from '../components/selectAddress';
  import selectColor from '../components/selectColor';
  import selectStyle from '../components/selectStyle';

  export default {

    name: 'showProinfo',

    components: {
      selectAddress,
      selectColor,
      selectStyle
    },

    data() {
      return {

        //商品信息
        productInfo: {
          productName: '全网底价 Apple 苹果 iPad mini 16G wifi版 平板电脑 前白后银 MD531CH/A 银白两色生产批次不同混合发货',
          productPrice: '1999.00',
          productColor: '白色',
          productStyle: 'WIFI 16G'
        }
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {

        //在showProinfo组件创建的钩子函数中监听select-color事件
        this.bus.$on('select-color', color => {
          this.productInfo.productColor = color;
        });

        //在showProinfo组件创建的钩子函数中监听select-style事件
        this.bus.$on('select-style', style => {
          console.log('调用');
          this.productInfo.productStyle = style;
        });
      });
    }
  };
</script>

<style scoped>
  .show-proinfo {
    padding: 10px;
  }

  .show-proinfo .title {
    padding: 13px 25px;
    font: bold 16px/22px "微软雅黑", "microsoft yahei";
    color: #333;
  }

  .show-proinfo .dl {
    margin-bottom: 5px;
  }

  .show-proinfo .dt {
    width: 75px;
    line-height: 25px;
    color: #656;
    text-indent: 17px;
    float: left;
  }

  .show-proinfo .dd {
    padding-left: 75px;
  }

  .des-money {
    font-size: 18px;
    color: #D70000;
  }

  .des-money em {
    font-size: 12px;
  }

  /* 换购 */
  .hg {
    padding-top: 4px;
    display: inline-block;
  }

  .hg-icon {
    width: 55px;
    height: 18px;
    line-height: 18px;
    margin-right: 10px;
    background: url("../../static/images/icon/hg.jpg") left top no-repeat;
    font-style: normal;
    color: #fff;
    text-indent: 16px;
    display: inline-block;
  }

  .des-position {
    padding: 15px 0;
    background-color: #F2F2F2;
  }

  .the-god {
    line-height: 24px;
  }

  .dl .colorSelect {
    line-height: 35px;
  }

  .show-proinfo .des-select-more {
    line-height: 55px;
  }

  .des-number {
    margin-right: 1px;
    float: left;
  }

  .des-number div {
    height: 32px;
    line-height: 32px;
    margin-left: -1px;
    float: left;
  }

  .des-number .reduce,
  .des-number .plus {
    width: 15px;
    height: 100%;
    border: solid 1px #B2B2B2;
    background-color: #EFEFEF;
    text-align: center;
    cursor: pointer;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  .des-number input {
    width: 50px;
    height: 100%;
    text-align: center;
    background-color: #fff;
    border: solid 1px #B2B2B2;
  }

  .buy-number {
    margin-left: 12px;
    line-height: 34px;
    font-weight: bold;
    color: #666666;
    float: left;
  }

  .buy-number em {
    color: #FC7700;
  }

  .show-style {
    margin: 22px 0 0 17px;
  }

  .show-style .name {
    font-weight: bold;
    float: left;
  }

  .show-style .style {
    color: #0479CA;
    font-weight: bold;
    float: left;
  }

  .show-style .style .line {
    width: 2px;
    height: 12px;
    margin: 0 2px 0 4px;
    background-color: #0479CA;
    display: inline-block;
    position: relative;
    top: 2px;
  }

  .des-button {
    margin: 10px 0 0 74px;
  }

  .des-button a {
    width: 136px;
    height: 48px;
    padding: 0px 0 0 68px;
    background: url("../../static/images/icon/car1.jpg") 30px center no-repeat;
    font: 20px/48px "微软雅黑", "microsoft yahei";
    color: #fff;
    background-color: #F98700;
    cursor: pointer;
    float: left;
  }

  /* 立即购买按钮和加入购物车按钮之间的线段 */
  .des-button .line {
    width: 1px;
    height: 48px;
    margin: 0 40px;
    background-color: #E5E5E5;
    float: left;
  }

  /* 注意事项 */
  .show-proinfo .notice {
    margin: 20px 0 0 20px;
    font-family: "SimSun";
    font-size: 12px;
    color: #999999;
  }
</style>
