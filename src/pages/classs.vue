<!-- 商品分类页 -->

<template>
  <div id="classs">
    <topBar></topBar>
    <headerBar></headerBar>
    <navBar></navBar>
  </div>
</template>

<script>
  import topBar from '../components/topBar';
  import headerBar from '../components/headerBar';
  import navBar from '../components/navBar';

  export default {

    //组件名称
    name: 'classs',

    components: {
      topBar,
      headerBar,
      navBar
    }

  };
</script>

<style scoped>

</style>
