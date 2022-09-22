<template>
<Card class="wrapper">
  <Row >
    <Col span="24" class="ivu-txt-center">
    <span class="wrapper-image"></span>
    </Col>
  </Row>
   <Row class="notice-info">
    <Col span="24" >
    页面正在建设中，敬请期待！
     </Col>
  </Row>
</Card>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {
  },

  created() {
  },

  mounted() {
  },

  methods: {
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: ~"calc( 100% - 20px)";
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper-image {
    width: 272px;
    height: 254px;
    display: inline-block;
    background-image: url("~@/assets/images/web_build.png");
    background-repeat: no-repeat;
    background-position: center center;
  }
  .notice-info{
    text-align:center;
    font-size: 16px;
    line-height: 60px;
  }
}
</style>
