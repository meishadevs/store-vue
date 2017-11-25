<!-- 网站首页 -->

<template>
  <div id="index">
    <collSite></collSite>
    <topBar></topBar>
    <headerBar></headerBar>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import headerBar from '../components/headerBar';

  export default {

    //设置当前组件名称为index
    name: 'index',

    //设置index组件中引入的组件
    components: {
      collSite,
      topBar,
      headerBar
    }
  };
</script>

<style scoped>

</style>
