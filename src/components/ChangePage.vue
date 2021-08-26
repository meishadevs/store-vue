
<!-- 翻页组件 -->

<template>
  <!-- 如果当前处于第一页 s -->
  <div class="change-page" v-if="indexPage == 1">
    <span class="page-prev">&lt;&lt;上一页</span>
    <span>1</span>
    <a href="javascript:;" v-for="(page, index) in createArrNum(2, totalPage)" :key="index" @click="changePage(page)">{{ page }}</a>
    <a href="javascript:;" class="page-next" @click="changePage(++indexPage)">下一页&gt;&gt;</a>
  </div>
  <!-- 如果当前处于第一页 e -->
  <!-- 如果当前处于最后一页 s -->
  <div class="change-page" v-else-if="indexPage == totalPage">
    <a href="javascript:;" class="page-prev" @click="changePage(--indexPage)">&lt;&lt;上一页</a>
    <a href="javascript:;" v-for="(page, index) in createArrNum(1, totalPage)" :key="index" @click="changePage(page)">{{ page }}</a>
    <span>{{ totalPage }}</span>
    <span class="page-next">下一页&gt;&gt;</span>
  </div>
  <!-- 如果当前处于最后一页 e -->
  <!-- 如果当前处于第一页与最后一页之间 s -->
  <div class="change-page" v-else>
    <a class="page-prev" href="javascript:;" @click="changePage(--indexPage)">&lt;&lt;上一页</a>
    <a href="javascript:;" v-for="(page, index) in createArrNum(1, indexPage)" :key="index" @click="changePage(page)">{{ page }}</a>
    <span>{{ indexPage }}</span>
    <a href="javascript:;" v-for="(page, index) in createArrNum(indexPage + 1, totalPage - indexPage + 1)" :key="index" @click="changePage(page)">{{ page }}</a>
    <a class="page-next" href="javascript:;" @click="changePage(++indexPage)">下一页&gt;&gt;</a>
  </div>
  <!-- 如果当前处于第一页与最后一页之间 e -->
</template>

<script>
export default {

  // 组件名称
  name: 'ChangePage',

  // 获取从父组件中传递过来的数据
  props: ['totalPage', 'curPage'],

  data() {
    return {

      // 当前展示的是第 indexPage 页数据
      indexPage: 1
    }
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      this.indexPage = this.curPage
    })
  },

  // 计算属性
  methods: {

    // 创建数组,保存分页按钮上的数字
    createArrNum(value, totalPage) {
      var arr = []
      for (let i = 0; i < totalPage - 1; i++) {
        arr[i] = value + i
      }

      return arr
    },

    // 实现翻页逻辑
    changePage(indexPage) {
      this.indexPage = indexPage

      // 触发翻页组件中的事件
      this.bus.$emit('change-page', this.indexPage)
    }
  }
}
</script>

<style lang="less" scoped>
  .change-page {
    font-family: tahoma, arial, sans-serif;
    text-align: center;
    font-size: 0;
  }

  .change-page .page-prev {
    border-width: 1px;
  }

  .change-page a,
  .change-page span {
    height: 27px;
    line-height: 27px;
    padding: 5px 14px;
    margin-right: 5px;
    background-color: #fff;
    font-size: 14px;
    border: 1px solid #e5e5e5;
    border-width: 1px 1px 1px 1px;
    vertical-align: top;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #2953a6;
    display: inline-block;
  }

  .change-page span {
    color: #fff;
    background-color: #f40;
  }

  .change-page span.page-prev,
  .change-page span.page-next {
    color: #ccc;
    background-color: #efefef;
  }

  .change-page a:hover {
    color: #f40;
    border: solid 1px #f40;
  }
</style>
