
<!-- 收藏网页组件 -->

<template>
  <div class="coll-site" v-show="isShowMask">
    <div class="mask">
      <div class="mask-content">
        <h3 class="top">
          <em>提示信息</em>
          <span><a href="javascript:;" class="close-dialog" @click="hideMask()"></a></span>
        </h3>
        <div class="middle">
          请按 Ctrl+D 键添加到收藏夹
        </div>
        <div class="bottom">
          <button @click="hideMask()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from "vuex";

  export default {

    //组件名称
    name: "CollSite",

    computed: mapState([

      //是否显示蒙版
      //映射 this.isShowMask 为 store.state.isShowMask
      "isShowMask"
    ]),

    methods: {

      //使用对象展开运算符将此对象混入到外部对象中
      ...mapActions([

        //隐藏模板
        "hideMask"
      ])
    }
  };
</script>

<style scoped>
  .coll-site {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
  }

  .coll-site .mask {
    width: 370px;
    height: 144px;
    padding: 8px;
    margin-left: -193px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    position: fixed;
    top: 100px;
    left: 50%;
  }

  .mask .mask-content {
    height: 124px;
    padding-top: 10px;
    background-color: #fff;
  }

  .mask .top {
    height: 20px;
    line-height: 20px;
    margin: 0 10px 8px;
  }

  .mask .top em {
    float: left;
    font-size: 14px;
    font-weight: 700;
    color: #51703E;
  }

  .mask .top span {
    float: right;
    color: #999;
  }

  .mask .top .close-dialog {
    width: 20px;
    height: 20px;
    background: url(../../static/images/icon/cls.gif) no-repeat 0 0;
    display: inline-block;
  }

  .mask .middle {
    height: 52px;
    line-height: 52px;
    margin: 0 10px 10px;
    padding-left: 50px;
    font-size: 14px;
    background: url(../../static/images/icon/info.gif) left center no-repeat;
  }

  .mask .bottom {
    height: 26px;
    padding: 8px 10px;
    text-align: right;
    border-top: 1px solid #CCC;
    background: #F2F2F2;
  }

  .mask .bottom button {
    width: 46px;
    height: 23px;
    font-weight: 700;
    border: 1px solid #235994;
    background-color: #ff8407;
    -moz-box-shadow: 0 1px 0 #E5E5E5;
    -webkit-box-shadow: 0 1px 0 #E5E5E5;
    box-shadow: 0 1px 0 #E5E5E5;
    color: #fff;
    cursor: pointer;
  }
</style>
