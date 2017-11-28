<!-- 商品筛选页 -->

<template>
  <div class="select">
    <collSite></collSite>
    <topBar></topBar>
    <headerBar></headerBar>
    <navBar></navBar>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import headerBar from '../components/headerBar';
  import navBar from '../components/navBar';

  export default {

    name: 'select',
    components: {
      collSite,
      topBar,
      headerBar,
      navBar
    }
  };
</script>

<style scoped>

</style>
