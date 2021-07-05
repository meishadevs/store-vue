
<!-- 商品分类组件 -->

<template>
  <div class="product-cate">
    <h3 class="title">{{ productCateData.title }}</h3>
    <dl class="cate-item" v-for="cate in productCateData.cateList">
      <dt>{{ cate.cateTitle }}</dt>
      <dd>
        <ul>
          <li v-for="content in cate.cateContent">
            <router-link to="/proinfo">{{ content }}</router-link>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

  // 组件名称
  name: 'ProductCate',

  data() {
    return {

      // 商品分类数据
      productCateData: {
        'title': '产品分类',
        'cateList': [
          {
            'cateTitle': '手机通讯',
            'cateContent': ['手机', '对讲机']
          },
          {
            'cateTitle': '运营商',
            'cateContent': ['购机送费', '0元购机', '选号入网']
          },
          {
            'cateTitle': '手机配件',
            'cateContent': ['手机电池', '蓝牙耳机', '充电器/数据线', '手机耳机', '手机贴膜',
              '手机存储卡', '手机保护套', '车载配件', 'iPhone配件']
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .product-cate .title {
    height: 34px;
    text-align: center;
    color: #000;
    font: bold 16px/34px "微软雅黑", "microsoft yahei";
    border-bottom: solid 1px #d7d7d7;
  }

  .product-cate .cate-item {
    padding: 4px 0 0 10px;
    border-bottom: dotted 1px #d7d7d7;
  }

  .product-cate .cate-item:nth-last-child(1) {
    border-bottom: solid 1px #d7d7d7;
  }

  .product-cate .cate-item dt {
    font: bold 14px/24px "微软雅黑", "microsoft yahei";
  }

  .product-cate .cate-item li {
    height: 22px;
    padding-left: 12px;
    font-size: 12px;
    font-family: "新宋体", "NSimSun";
  }

  .product-cate .cate-item li a {
    color: #555;
  }

  .product-cate .cate-item li a:hover {
    color: #c81623;;
  }
</style>
