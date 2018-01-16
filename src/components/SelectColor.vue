
<!-- 颜色选择组件 -->

<template>
  <div class="select-color">
    <span class="des-item"
          v-for="(color, index) in productColor"
          v-bind:class="{active: curIndex == index}"
          @click="selectColor(index)">{{ color }}
    </span>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'SelectColor',

    data() {
      return {

        //商品颜色
        productColor: ['白色', '黑色', '灰色', '红色', '粉红色'],

        //当前选中的颜色的索引
        curIndex: 0
      };
    },

    methods: {

      //选择颜色
      selectColor(index) {

        this.curIndex = index;

        //触发selectColor组件的select-color事件
        this.bus.$emit('select-color', this.productColor[this.curIndex]);
      }
    }
  };
</script>

<style scoped>
  .des-item {
    padding: 9px 10px;
    margin-right: 10px;
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
