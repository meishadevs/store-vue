<template>
  <div class="change-page">
    <span
      class="page-item"
      :class="{
        'disabled': curPage <= 1
      }"
      @click="handlePreChange"
    >
      &lt;&lt;上一页
    </span>
    <span
      v-for="page in totalPage"
      :key="page"
      class="page-item"
      :class="{
        'page-current': page === curPage
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </span>
    <span
      class="page-item"
      :class="{
        'disabled': curPage >= totalPage
      }"
      @click="handleNextPage"
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

  watch: {
    curPage() {
      this.$emit('update:currentPage', this.curPage);
      this.$emit('current-change', this.curPage);
    }
  },

  created() {
    this.initData();
  },

  methods: {
    initData() {
      // 当前页数
      this.curPage = this.currentPage;

      // 计算总页数
      this.totalPage = Math.ceil(this.total / this.pageSize);
    },

    // 上一页
    handlePreChange() {
      if (this.curPage > 1) {
        this.curPage -= 1;
        this.$emit('prev-click', this.curPage);
      }
    },

    // 下一页
    handleNextPage() {
      if (this.curPage < this.totalPage) {
        this.curPage += 1;
        this.$emit('next-click', this.curPage);
      }
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

  .page-item {
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
    color: #2953a6;
    display: inline-block;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #f40;
    }
  }

  .page-current {
     color: #fff;
     background-color: #f40;
     cursor: default;
  }

  .disabled {
    color: #ccc;
    background-color: #efefef;
    cursor: not-allowed;

    &:hover {
      color: #ccc;
      background-color: #efefef;
    }
  }
}
</style>
