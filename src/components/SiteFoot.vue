
<!-- 网站的脚部组件 -->

<template>
  <footer class="site-foot">

      <!-- 网站信息 s -->
      <p class="info clearfix">
        <a href="javascript:;">电商网简介</a>
        <span>|</span>
        <a href="javascript:;">电商网公告</a>
        <span>|</span>
        <a href="javascript:;">招纳贤士</a>
        <span>|</span>
        <a href="javascript:;">联系我们</a>
        <span>|</span>
        <a href="javascript:;">客服热线：400-675-1234</a>
      </p>
      <!-- 网站信息 e -->

      <!-- 版权信息 s -->
      <p class="copyright">Copyright © 2017 - 2020&nbsp;电商网版权所有&nbsp;&nbsp;&nbsp;京ICP备09037834号&nbsp;&nbsp;&nbsp;京ICP证B1034-8373号&nbsp;&nbsp;&nbsp;北京市公安局朝阳分局备案编号：123456789123</p>
      <!-- 版权信息 e -->

      <!-- 底部小图标 s -->
      <div class="foot-icon">
        <a href="javascript:;" class="foot-icon-1">经营性网站备案中心</a>
        <a href="javascript:;" class="foot-icon-2">可信网站信用评估</a>
        <a href="javascript:;" target="_blank" class="foot-icon-3">网络警察提醒您</a>
        <a href="javascript:;" class="foot-icon-4">诚信网站</a>
        <a href="javascript:;" target="_blank" class="foot-icon-5">中国互联网举报中心</a>
        <a href="javascript:;" target="_blank" class="foot-icon-6">网络举报APP下载</a>
      </div>
      <!-- 底部小图标 e -->
  </footer>
</template>

<script>
  export default {

    //组件名称
    name: "SiteFoot"
  };
</script>

<style scoped>
  .site-foot {
    width: 100%;
    height: 224px;
    background-color: #d4d4d4;
    font-family: "新宋体", "NSimSun";
    color: #000;
    position: relative;
  }

  .site-foot a,
  .site-foot span {
    color: #000;
    float: left;
  }

  .site-foot .info {
    transform: translateX(-50%);
    position: absolute;
    top: 56px;
    left: 50%;
  }

  .site-foot .info span {
    width: 6px;
    height: 14px;
    padding: 0 5px;
  }

  .site-foot .copyright {
    padding-top: 83px;
    text-align: center;
  }

  .site-foot .foot-icon {
    transform: translateX(-50%);
    position: absolute;
    top: 135px;
    left: 50%;
  }

  .foot-icon a {
    width: 103px;
    height: 32px;
    margin-right: 9px;
    background: url("../../static/images/icon/ico_footer.png");
    background-repeat: no-repeat;
    text-indent: -1000px;
    overflow: hidden;
  }

  .foot-icon .foot-icon-1 {
    background-position: 0 -151px;
  }

  .foot-icon .foot-icon-2 {
    background-position: -104px -151px;
  }

  .foot-icon .foot-icon-3 {
    background-position: 0 -184px;
  }

  .foot-icon .foot-icon-4 {
    background-position: -105px -184px;
  }

  .foot-icon .foot-icon-5 {
    background-position: 0 -217px;
  }

  .foot-icon .foot-icon-6 {
    background-position: -104px -217px;
  }
</style>
