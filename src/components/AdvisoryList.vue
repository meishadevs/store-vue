<template>
  <ul class="advisory-list">
    <li
      class="clearfix"
      v-for="(advisory, index) in list"
      :key="index"
    >
      <div class="member-info">
        <div class="member-image">
          <img
            :src="`${$baseUrl}/images/advisoryimages/${advisory.memberImage}`"
            alt=""
          />
        </div>
        <p class="member-name">{{ advisory.memberName }}</p>
        <p class="member-grade">{{ advisory.memberGrade }}</p>
      </div>
      <div class="shop-advisory">
        <div class="top clearfix">
          <div class="advisory-name">[商品咨询]</div>
          <div class="advisory-time">{{ advisory.time }}</div>
        </div>
        <div class="advisory-content">
          <div class="question">{{ advisory.question }}</div>
          <div class="answer">
            <span>电商网回复：</span>{{ advisory.answer }}
            <div class="triangle"></div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'AdvisoryList',

  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
// 咨询列表
.advisory-list {
  margin-left: 67px;

  li {
    margin-bottom: 38px;
  }
}

// 会员信息
.member-info {
  text-align: center;
  float: left;
}

.member-name,
.member-grade {
  height: 18px;
  color: #777777;
}

// 商品咨询
.shop-advisory {
  margin-left: 34px;
  float: left;

  .top {
    width: 540px;
    height: 19px;
    line-height: 19px;
    margin-bottom: 15px;
  }
}

.member-image {
  img {
    width: 35px;
    height: 35px;
    border-radius: 15px;
    display: inline-block;
  }
}

.advisory-name {
  font-size: 14px;
  color: #000;
  font-weight: bold;
  float: left;
}

// 咨询的时间
.advisory-time {
  font-family: "宋体", "SimSun";
  color: #ababab;
  float: right;
}

// 提问
.advisory-content {
  .question {
    margin-bottom: 13px;
    font-family: "宋体", "SimSun";
    color: #777777;
  }
}

// 回答
.answer {
  width: 576px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 20px;
  font-family: "宋体", "SimSun";
  font-size: 12px;
  background-color: #f1f1f1;
  color: #777777;
  position: relative;

  span {
    color: #000000;
    font-weight: bold;
  }

  // 小三角
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent #f3f3f3 transparent;
    border-width: 0 5px 5px 5px;
    position: absolute;
    top: -5px;
    left: 30px;
  }
}
</style>
