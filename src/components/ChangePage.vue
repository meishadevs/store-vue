<template>
  <div class="change-page">
    <span
      class="page-prev"
      @click="changePage(--curPage)"
    >
      &lt;&lt;上一页
    </span>
    <span
      v-for="page in createArrNum(1, curPage)"
      :key="page"
      @click="changePage(page)"
    >
      {{ page }}
    </span>
    <span
      class="page-next"
      @click="changePage(++curPage)"
    >
      下一页&gt;&gt;
    </span>
  </div>
</template>

<script>
export default {
  name: 'ChangePage',

  props: {
    // 数据总数
    total: {
      type: Number,
      default: 0
    },

    // 每页展示数据条数
    pageSize: {
      type: Number,
      default: 5
    },

    // 当前页数
    currentPage: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      // 当前页数
      curPage: 1,

      // 总页数
      totalPage: 0
    };
  },

  created() {
    this.initData();
  },

  methods: {
    initData() {
      this.curPage = this.currentPage;
    },

    // 创建数组,保存分页按钮上的数字
    createArrNum(value, totalPage) {
      var arr = [];
      for (let i = 0; i < totalPage - 1; i++) {
        arr[i] = value + i;
      }

      return arr;
    },

    // 实现翻页逻辑
    changePage(curPage) {
      this.curPage = curPage;

      // 触发翻页组件中的事件
      this.bus.$emit('change-page', this.curPage);
    }
  }
};
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
  user-select: none;
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
