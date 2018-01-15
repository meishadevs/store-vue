<!-- 网站首页 -->

<template>
  <div id="index">
    <collSite></collSite>
    <topBar></topBar>
    <siteHead></siteHead>
    <navBar></navBar>
    <section class="product-cate-banner inner-c clearfix">
      <div class="product-cate-box">
        <productCateNav></productCateNav>
      </div>
      <div class="banner-box">
        <banner></banner>
      </div>
    </section>
    <indexShowProduct v-bind:productInfo="indexProductList[0]"></indexShowProduct>
    <indexShowProduct v-bind:productInfo="indexProductList[1]"></indexShowProduct>
    <div class="hr-40"></div>
    <siteFoot></siteFoot>
    <goTop></goTop>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import siteHead from '../components/siteHead';
  import navBar from '../components/navBar';
  import productCateNav from '../components/productCateNav';
  import banner from '../components/banner';
  import indexShowProduct from '../components/indexShowProduct';
  import siteFoot from '../components/siteFoot';
  import goTop from '../components/goTop.vue';
  import {mapState, mapActions} from 'vuex';

  export default {

    //设置当前组件名称为index
    name: 'index',

    data() {
      return {
        //网站首页的商品列表
        indexProductList: [
          {
            "icon": './static/images/icon/product-icon.png',
            "title": '家用电器',
            "more": '更多',
            "leftImage": './static/images/ad.jpg',
            "topProduct": [
              {
                "image": './static/images/shouji.png',
                "name": 'HTC渴望8系列',
                "price": '1899.00'
              },
              {
                "image": './static/images/shouji-1.jpg',
                "name": '红米Note4',
                "price": '1399.00'
              },
              {
                "image": './static/images/shouji-2.jpg',
                "name": '魅蓝Note5',
                "price": '1099.00'
              },
              {
                "image": './static/images/shouji-3.jpg',
                "name": '华为荣耀8青春版',
                "price": '1599.00'
              }
            ],
            "bottomProduct": [
              {
                "image": './static/images/sanxing.png',
                "name": 'Samsung三星GALAXY Grand2',
                "price": '1999.00'
              },
              {
                "image": './static/images/shouji-4.jpg',
                "name": 'Huawei/华为PLE-703L 4G',
                "price": '1599.00'
              },
              {
                "image": './static/images/shouji-5.jpg',
                "name": 'vivo X9 前置双摄 高清自拍',
                "price": '2798.00'
              },
              {
                "image": './static/images/shouji-6.jpg',
                "name": 'OPPO A57 前置6500万 3+32G',
                "price": '1599.00'
              }
            ]
          },
          {
            "icon": './static/images/icon/product-icon.png',
            "title": '食品酒水',
            "more": '更多',
            "leftImage": './static/images/ad1.jpg',
            "topProduct": [
              {
                "image": './static/images/food.png',
                "name": '三月美食狂享购',
                "price": '50.00'
              },
              {
                "image": './static/images/food2.png',
                "name": '乐事薯片三连罐',
                "price": '19.90'
              },
              {
                "image": './static/images/food3.png',
                "name": '进口零食大礼包',
                "price": '88.00'
              },
              {
                "image": './static/images/food4.png',
                "name": '禧客手撕面包',
                "price": '28.80'
              }
            ],
            "bottomProduct": [
              {
                "image": './static/images/food1.png',
                "name": '康比特 维他保咀嚼片 60片',
                "price": '600.00'
              },
              {
                "image": './static/images/food5.png',
                "name": '新疆正品野生新鲜果原汁',
                "price": '165.00'
              },
              {
                "image": './static/images/food6.png',
                "name": '天地壹号苹果醋饮料330ml',
                "price": '4.60'
              },
              {
                "image": './static/images/food7.png',
                "name": '可尔必思发酵型牛奶浓缩汁',
                "price": '58.80'
              }
            ]
          }
        ]
      };
    },

    //设置index组件中引入的组件
    components: {
      collSite,
      topBar,
      siteHead,
      navBar,
      productCateNav,
      banner,
      indexShowProduct,
      siteFoot,
      goTop
    },

    //计算属性
    computed: mapState([

      //当前选中的导航项的索引
      //映射 this.currentNavIndex 为 srore.state.currentNavIndex
      'currentNavIndex'
    ]),

    methods: {

      //使用对象展开运算符将此对象混入到外部对象中
      ...mapActions([

        //改变当前选中的导航项的索引
        'changeNavIndex'
      ])
    },

    //初始化
    mounted() {
      this.$nextTick(function () {
        document.title = '电商网首页';
        document.body.style.backgroundColor = '#fff';
        window.scrollTo(0, 0);

        //改变当前选中的导航项的索引
        this.changeNavIndex(1);
      });
    }
  };
</script>

<style scoped>
  .product-cate-banner .product-cate-box {
    float: left;
  }

  .product-cate-banner .banner-box {
    float: left;
  }
</style>
