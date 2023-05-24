<template>
  <div id="index">
    <coll-site></coll-site>
    <top-bar></top-bar>
    <site-head></site-head>
    <nav-bar></nav-bar>
    <div class="inner-c">
      <section class="product-cate-banner clearfix">
        <div class="product-cate-box">
          <product-cate-nav></product-cate-nav>
        </div>
        <div class="banner-box">
          <banner :bannerData="bannerList"></banner>
        </div>
      </section>
      <index-show-product :productInfo="indexProductList[0]"></index-show-product>
      <index-show-product :productInfo="indexProductList[1]"></index-show-product>
    </div>
    <div class="hr-40"></div>
    <site-foot></site-foot>
    <go-top></go-top>
  </div>
</template>

<script>
import GoTop from '_c/GoTop';
import TopBar from '_c/TopBar';
import NavBar from '_c/NavBar';
import Banner from '_c/Banner';
import CollSite from '_c/CollSite';
import SiteHead from '_c/SiteHead';
import SiteFoot from '_c/SiteFoot';
import ProductCateNav from '_c/ProductCateNav';
import IndexShowProduct from '_c/IndexShowProduct';
import { mapState, mapMutations } from 'vuex';
import { getPublishBanner } from '@/api/banner';

export default {
  name: 'home',

  data() {
    return {
      bannerList: [],

      // 网站首页的商品列表
      indexProductList: [
        {
          icon: 'icon/product-icon.png',
          title: '家用电器',
          more: '更多',
          leftImage: 'ad.jpg',
          topProduct: [
            {
              image: 'shouji.png',
              name: 'HTC渴望8系列',
              price: '1899.00'
            },
            {
              image: 'shouji-1.jpg',
              name: '红米Note4',
              price: '1399.00'
            },
            {
              image: 'shouji-2.jpg',
              name: '魅蓝Note5',
              price: '1099.00'
            },
            {
              image: 'shouji-3.jpg',
              name: '华为荣耀8青春版',
              price: '1599.00'
            }
          ],
          bottomProduct: [
            {
              image: 'sanxing.png',
              name: 'Samsung三星GALAXY Grand2',
              price: '1999.00'
            },
            {
              image: 'shouji-4.jpg',
              name: 'Huawei/华为PLE-703L 4G',
              price: '1599.00'
            },
            {
              image: 'shouji-5.jpg',
              name: 'vivo X9 前置双摄 高清自拍',
              price: '2798.00'
            },
            {
              image: 'shouji-6.jpg',
              name: 'OPPO A57 前置6500万 3+32G',
              price: '1599.00'
            }
          ]
        },
        {
          icon: 'icon/product-icon.png',
          title: '食品酒水',
          more: '更多',
          leftImage: 'ad1.jpg',
          topProduct: [
            {
              image: 'food.png',
              name: '三月美食狂享购',
              price: '50.00'
            },
            {
              image: 'food2.png',
              name: '乐事薯片三连罐',
              price: '19.90'
            },
            {
              image: 'food3.png',
              name: '进口零食大礼包',
              price: '88.00'
            },
            {
              image: 'food4.png',
              name: '禧客手撕面包',
              price: '28.80'
            }
          ],
          bottomProduct: [
            {
              image: 'food1.png',
              name: '康比特 维他保咀嚼片 60片',
              price: '600.00'
            },
            {
              image: 'food5.png',
              name: '新疆正品野生新鲜果原汁',
              price: '165.00'
            },
            {
              image: 'food6.png',
              name: '天地壹号苹果醋饮料330ml',
              price: '4.60'
            },
            {
              image: 'food7.png',
              name: '可尔必思发酵型牛奶浓缩汁',
              price: '58.80'
            }
          ]
        }
      ]
    };
  },

  // 引入的外部组件
  components: {
    GoTop,
    TopBar,
    NavBar,
    Banner,
    SiteHead,
    CollSite,
    SiteFoot,
    ProductCateNav,
    IndexShowProduct
  },

  computed: {
    ...mapState({
      currentNavIndex: state => state.user.currentNavIndex
    })
  },

  created() {
    this.getPublishBanner();
  },

  // 初始化
  mounted() {
    this.initData();
  },

  methods: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapMutations([
      // 改变当前选中的导航项的索引
      'changeNavIndex'
    ]),

    initData() {
      this.$nextTick(function() {
        document.body.style.backgroundColor = '#fff';
        window.scrollTo(0, 0);

        // 改变当前选中的导航项的索引
        this.changeNavIndex(1);
      });
    },

    // 获得已发布的轮播图
    getPublishBanner() {
      getPublishBanner()
        .then((res) => {
          this.bannerList = res.data.list;
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    }
  }
};
</script>

<style lang="less" scoped>
  .product-cate-banner .product-cate-box,
  .product-cate-banner .banner-box {
    float: left;
  }
</style>
