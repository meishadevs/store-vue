
<!-- 分类菜单组件 -->

<template>
  <div class="cate-menu">
    <h3 class="product-title">
      <a href="javascript:;" v-for="title in cateData.headTitle">{{ title }}、</a>
    </h3>
    <dl class="product-item" v-for="item in cateData.cateList">
      <dt>{{ item.cateTitle }}</dt>
      <dd>
        <router-link to="/select" v-for="content in item.cateContent" :key="item.id">{{ content }}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'cateMenu',

    data() {
      return {

        //商品分类数据
        cateData: {
          'headTitle': ['手机', '相机', '数码'],
          'cateList': [
            {
              'cateTitle': '手机通讯',
              'cateContent': [
                '全部手机',
                '1080P高清',
                '双卡手机',
                '拍照神器',
                '老年手机',
                '对讲机',
                '联通专区'
              ]
            },
            {
              'cateTitle': '数码相机',
              'cateContent': [
                '卡片机',
                '中长焦',
                '专业便',
                '携自拍神器',
                '防水防摔',
                '一次成像'
              ]
            },
            {
              'cateTitle': '单反',
              'cateContent': [
                '全部',
                '佳能',
                '尼康',
                '宾得',
                '哈苏'
              ]
            },
            {
              'cateTitle': '镜头',
              'cateContent': [
                '单反镜头',
                '微单镜头'
              ]
            },
            {
              'cateTitle': '摄像机',
              'cateContent': [
                '全部',
                '索尼',
                '松下',
                '佳能',
                '三星'
              ]
            },
            {
              'cateTitle': '摄像配件',
              'cateContent': [
                '相机包',
                '相机电池',
                '贴膜',
                '滤镜',
                '三脚架',
                '闪光灯',
                '遮光器',
                '遥控器',
                '专业配件',
                '清洁用品',
                '望远镜'
              ]
            },
            {
              'cateTitle': '数码存储',
              'cateContent': [
                '刻录盘片',
                '盘片附件'
              ]
            },
            {
              'cateTitle': '电子教育',
              'cateContent': [
                '电子书',
                '盒电子词典',
                '幼儿教育',
                '智能学习',
                '录音笔'
              ]
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>
  .cate-menu {
    width: 183px;
    border: solid 1px #d7d7d7;
    background-color: #f3f3f3;
  }

  .cate-menu .product-title {
    height: 34px;
    font: bold 14px/34px "宋体";
    text-align: center;
    border-bottom: solid 1px #cdcdcd;
  }

  .cate-menu .product-title a {
    color: #555;
  }

  .cate-menu .product-item {
    padding: 10px 0 0 20px;
    border-bottom: dotted 1px #cdcdcd;
  }

  .cate-menu .product-item dt {
    height: 30px;
    font-family: "宋体";
    font-weight: bold;
    color: #555;
  }

  .cate-menu .product-item dd {
    font-size: 0;
    font-family: "宋体";
  }
  .cate-menu .product-item dd a {
    width: 81px;
    height: 25px;
    font-size: 12px;
    color: #555;
    display: inline-block;
  }

  .product-item dd a:hover {
    color: #c81623;
  }

  .cate-menu dl:nth-last-child(1){
    border-bottom: none;
  }
</style>
