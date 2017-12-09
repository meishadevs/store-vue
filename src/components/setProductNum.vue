<!-- 设置商品数量组件 -->

<template>
  <div class="set-product-num clearfix">
    <div class="reduce" v-bind:class="{disabled: productNum <= 1}" @click="reduceProductNum">-</div>
    <div class="input-number">
      <input class="product-num" v-model="productNum" v-on:keyup="changeNum()" @keydown="">
    </div>
    <div class="plus" v-bind:class="{disabled: productNum >= limitProductNum}" @click="addProductNum">+</div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {

    //组件名称
    name: 'setProductNum',

    //父组件中传过来的数据
    props: ['limitProductNum'],

    data() {
      return {
        //商品数量
        productNum: 1,

        timer: null
      };
    },

    methods: {
      ...mapActions([
        'setProductNum'
      ]),

      //增加商品数量
      addProductNum: function () {

        if (this.productNum >= this.limitProductNum) {
          return;
        }

        this.productNum++;

        this.bus.$emit('change-num', this.productNum);
      },

      //减少商品数量
      reduceProductNum: function () {

        if (this.productNum <= 1) {
          return;
        }

        this.productNum--;
        this.bus.$emit('change-num', this.productNum);
      },

      changeNum: function () {

        //每两秒钟判断一次
        setTimeout(() => {

          //如果productNum不是数字
          //如果productNum的值为0
          //如果productNum的值超过了取值范围
          //如果productNum没有值
          if (isNaN(this.productNum) || this.productNum === 0 ||
            this.productNum.length === 0) {

            this.productNum = 1;
          }

          if (this.productNum >= this.limitProductNum) {
            this.productNum = this.limitProductNum;
          }

          this.bus.$emit('change-num', this.productNum);

        }, 2000);

        this.bus.$emit('change-num', this.productNum);
      }
    }
  };
</script>

<style scoped>
  .set-product-num {
    margin-right: 1px;
    float: left;
  }

  .set-product-num div {
    height: 32px;
    line-height: 32px;
    margin-left: -1px;
    float: left;
  }

  .set-product-num .reduce,
  .set-product-num .plus {
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

  .set-product-num input {
    width: 50px;
    height: 100%;
    text-align: center;
    background-color: #fff;
    border: solid 1px #B2B2B2;
  }

  .set-product-num .disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>
