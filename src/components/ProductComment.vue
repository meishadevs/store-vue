<template>
  <div class="product-comment">
    <div class="comment-top">
      <h3 class="title">商品评价</h3>
      <div class="comment-content clearfix">
        <!-- 商品评价的分数 s -->
        <div class="score">4.7<em>分</em></div>
        <!-- 商品评价的分数 -->

        <!-- 商品评价描述 s -->
        <div class="des-comment">
          <div class="show-score">
            4.7
            <span class="triangle"></span>
          </div>
          <ul>
            <li class="comment-1">非常不满意</li>
            <li class="comment-2">不满意</li>
            <li class="comment-3">一般</li>
            <li class="comment-4">满意</li>
            <li class="comment-5">非常满意</li>
          </ul>
          <p class="comment-text">共18939位电商网网友参与评分</p>
        </div>
        <!-- 商品评价描述 e -->
      </div>
    </div>
    <!-- 商品咨询 s -->
    <div class="advisory-box clearfix">
      <div class="advisory-title clearfix">
        <div class="all">
          <a
            href="javascript:;"
          >
            全部咨询(<i class="appra-num">{{ totalAdvisory }}</i>)
          </a>
        </div>
        <div class="send">
          <a href="javascript:;">发表咨询</a>
        </div>
      </div>
      <div class="notice">
        提示:因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，且每位咨询者购买情况、提问时间等不同，为此以下回复信息仅供参考！若由此给您带来不便请多多谅解，谢谢！
      </div>
      <advisory-list
        :list="advisoryList"
      />
      <div class="page-box">
        <change-page
          v-if="totalAdvisory > 0"
          :total="totalAdvisory"
          :pageSize="listQuery.pageSize"
          :currentPage.sync="listQuery.pageNumber"
          @prev-click="getAdvisoryList"
          @next-click="getAdvisoryList"
          @current-change="getAdvisoryList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdvisoryList from './AdvisoryList';
import ChangePage from './ChangePage';
import { advisoryList } from '@/api/advisory';

export default {
  name: 'ProductComment',

  components: {
    AdvisoryList,
    ChangePage
  },

  data() {
    return {
      // 商品咨询的总数
      totalAdvisory: 0,

      advisoryList: [],

      listQuery: {
        pageNumber: 1,
        pageSize: 5
      }
    };
  },

  created() {
    this.getAdvisoryList();
  },

  methods: {
    // 获得商品咨询列表
    getAdvisoryList() {
      advisoryList(this.listQuery)
        .then((res) => {
          this.advisoryList = res.data.list;
          this.totalAdvisory = res.data.count;
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    }
  }
};
</script>

<style lang="less" scoped>
/* 商品评价 */
.product-comment {
  background-color: #fff;
}

.comment-top {
  height: 160px;
  padding-left: 10px;
}

/* 商品评价的标题 */
.comment-top .title {
  margin-bottom: 22px;
  font: bold 14px/38px "新宋体", "NSimSun";
}

/* 商品评价得分 */
.comment-top .score {
  font: bold 50px/25px "微软雅黑", "microsoft yahei";
  color: #ff8f00;
  float: left;
}

.comment-top .score em {
  font: bold 18px/25px "微软雅黑", "microsoft yahei";
  color: #65657d;
}

.comment-top .des-comment li {
  float: left;
}

.des-comment {
  width: 450px;
  margin-left: 100px;
  position: relative;
}

.des-comment .show-score {
  width: 25px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  background-color: #7f7f7f;
  color: #fff;
  position: absolute;
  right: 17px;
  top: -22px;
}

/* 小三角 */
.des-comment .show-score .triangle {
  width: 0;
  height: 0;
  border-color: #7f7f7f transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  position: absolute;
  left: 10px;
  top: 14px;
}

.des-comment ul {
  width: 450px;
  height: 16px;
  line-height: 16px;
  background-color: #bdbdbd;
  color: #fff;
}

.des-comment .comment-1 {
  padding: 0 29px 0 26px;
}

.des-comment .comment-2 {
  width: 82px;
}

.des-comment .comment-3 {
  width: 76px;
}

.des-comment .comment-4 {
  width: 65px;
}

.des-comment .comment-5 {
  width: 112px;
}

.des-comment .comment-text {
  padding-top: 7px;
  font-family: "新宋体", "NSimSun";
  font-size: 12px;
  color: #65657d;
}

/* 商品咨询 */
.advisory-box {
  width: 785px;
  margin-top: 15px;
  padding-bottom: 20px;
  background-color: #fff;
}

.advisory-title {
  width: 100%;
  height: 33px;
  margin-bottom: 10px;
  border-bottom: solid 1px #0688ba;
}

.advisory-title .all,
.advisory-title .send {
  width: 132px;
  height: 32px;
  font: 12px/32px "微软雅黑", "microsoft yahei";
  text-align: center;
  border: solid 1px #0688ba;
  border-bottom: solid 1px #fff;
  float: left;
}

.advisory-title a {
  color: #0688ba;
}

/* 发表咨询 */
.advisory-title .send {
  margin-right: 26px;
  border: none;
  text-align: right;
  float: right;
}

.advisory-box .notice {
  width: 734px;
  line-height: 24px;
  padding: 5px 0 5px 20px;
  margin: 0 0 20px 22px;
  background-color: #f3f3f3;
  color: #777777;
}

.page-box {
  margin-left: 130px;
}
</style>
