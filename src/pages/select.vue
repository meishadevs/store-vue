<!-- 商品筛选页 -->

<template>
  <div class="select">
    <collSite></collSite>
    <topBar></topBar>
    <myHead></myHead>
    <navBar></navBar>
    <userPosition></userPosition>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import myHead from '../components/myHead';
  import navBar from '../components/navBar';
  import userPosition from '../components/userPosition';

  export default {

    name: 'select',
    components: {
      collSite,
      topBar,
      myHead,
      navBar,
      userPosition
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '商品筛选页';
        document.body.style.backgroundColor = '#f0f0f0';
      });
    }
  };
</script>

<style scoped>

</style>
