
<!-- 手机款式选择组件 -->

<template>
  <div class="select-style clearfix">
    <span class="des-item"
         v-for="(style, index) in productStyle"
         v-bind:class="{active: curIndex == index}"
         @click="selectStyle(index)">{{ style }}
    </span>
  </div>
</template>

<script>
  export default {

    name: 'selectStyle',

    data() {
      return {

        //产品款式
        productStyle: ['WIFI 16G', 'WIFI 64G', 'WIFI 32G', 'WIFI Cellular 32G', 'WIFI Cellular 64G', 'WIFI Cellular 16G'],

        //当前选中的产品款式的索引
        curIndex: 0
      };
    },

    methods: {

      //选择款式
      selectStyle: function (index) {
        this.curIndex = index;

        //触发selectStyle组件的select-style事件
        this.bus.$emit('select-style', this.productStyle[this.curIndex]);
      }
    }
  };
</script>

<style scoped>
  .des-item {
    padding: 3px 7px;
    margin-right: 10px;
    margin-bottom: 8px;
    border: solid 1px #ccc;
    background-color: #fff;
    color: #666;
    cursor: pointer;
    float: left;
  }

  .des-item:hover,
  .active {
    border: solid 1px #317EE7;
    color: #333;
  }
</style>
