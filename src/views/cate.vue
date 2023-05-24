<template>
  <div id="cate">
    <coll-site></coll-site>
    <top-bar></top-bar>
    <site-head></site-head>
    <nav-bar></nav-bar>
    <section class="wrapper inner-c clearfix">
      <div class="left-area">
        <cate-menu></cate-menu>
      </div>
      <div class="right-area">
        <banner
          :bannerData="bannerList"
        />
        <cate-show-product
          :productList="cateProductList[0]"
        />
        <cate-show-product
          :productList="cateProductList[1]"
        />
      </div>
    </section>
    <div class="hr-40"></div>
    <site-foot></site-foot>
    <go-top></go-top>
  </div>
</template>

<script>
import CollSite from '_c/CollSite';
import TopBar from '_c/TopBar';
import SiteHead from '_c/SiteHead';
import NavBar from '_c/NavBar';
import CateMenu from '_c/CateMenu';
import Banner from '_c/Banner';
import CateShowProduct from '_c/CateShowProduct';
import SiteFoot from '_c/SiteFoot';
import GoTop from '_c/GoTop';
import { getPublishBanner } from '@/api/banner';

export default {
  // 组件名称
  name: 'cate',

  // 引入的外部组件
  components: {
    CollSite,
    TopBar,
    SiteHead,
    NavBar,
    CateMenu,
    Banner,
    CateShowProduct,
    SiteFoot,
    GoTop
  },

  data() {
    return {
      // 轮播图列表
      bannerList: [],

      // 商品分类页的商品列表
      cateProductList: [
        {
          title: '数码影像',
          content: [
            {
              image: 'shop1.jpg',
              name: "Canon佳能IXU132数码相机粉色1600像素2.7'LCD",
              price: '699.00',
              numStar: '5',
              numComment: '79'
            },
            {
              image: 'shop2.jpg',
              name: 'Canon佳能PowerShotN数码相机白色礼盒装',
              price: '2199.00',
              numStar: '4',
              numComment: '100'
            },
            {
              image: 'shop3.jpg',
              name: '全网底价Fujifilm富士FinePixJX710数码相机粉色',
              price: '349.00',
              numStar: '5',
              numComment: '157'
            },
            {
              image: 'shop4.jpg',
              name: 'Canon佳能EOS60D单反套机（EF-S18-135IS）',
              price: '6099.00',
              numStar: '5',
              numComment: '1322'
            },
            {
              image: 'shop5.jpg',
              name: 'SONY索尼DSC-TX66数码相机粉色（1820万像素/3.3英寸）',
              price: '966.00',
              numStar: '5',
              numComment: '190'
            },
            {
              image: 'shop6.jpg',
              name: 'Canon佳能LEGRIAHFR506摄像机白色',
              price: '2799.00',
              numStar: '5',
              numComment: '78'
            },
            {
              image: 'shop7.jpg',
              name: 'Samsung三星GALAXY Tab33G版T1117英寸平板电脑',
              price: '1698.00',
              numStar: '5',
              numComment: '123'
            },
            {
              image: 'shop8.jpg',
              name: '全网底价Sony索尼NEX-3NL 16-50mm单变焦镜头套装 粉',
              price: '2430.00',
              numStar: '5',
              numComment: '203'
            }
          ]
        },
        {
          title: '娱乐影音',
          content: [
            {
              image: 'shop9.jpg',
              name: 'KSD 凯仕达 USB电脑跳舞毯(即接即用，性价比强纯中文)',
              price: '39.00',
              numStar: '5',
              numComment: '7865'
            },
            {
              image: 'shop10.jpg',
              name: 'Apple 苹果 iPod touch4 32G MD058CH/A 白色多媒体播放',
              price: '1359.00',
              numStar: '5',
              numComment: '16'
            },
            {
              image: 'shop11.jpg',
              name: 'lepow乐泡磐石6000通用型移动电源大黄鸭定制版本',
              price: '139.00',
              numStar: '5',
              numComment: '87'
            },
            {
              image: 'shop12.jpg',
              name: 'Youwin 友多闻 UDN708天乙四核手机平板7英寸 IPS全贴',
              price: '799.00',
              numStar: '5',
              numComment: '87'
            },
            {
              image: 'shop13.jpg',
              name: '天韵 2CJBD 2寸吉他背带（黑色花色）',
              price: '3.00',
              numStar: '5',
              numComment: '19'
            },
            {
              image: 'shop14.jpg',
              name: 'Philips 飞利浦 SPF1127/93 7英寸数码相框 白色',
              price: '259.00',
              numStar: '5',
              numComment: '255'
            },
            {
              image: 'shop15.jpg',
              name: 'ibody Rainbow 蓝牙健康追踪器 蓝色',
              price: '239.00',
              numStar: '5',
              numComment: '19'
            },
            {
              image: 'shop16.jpg',
              name: 'SmartQ 智器 ZWatch 智能手表 开区可穿戴式达人酷毙生活',
              price: '699.00',
              numStar: '5',
              numComment: '16'
            }
          ]
        }
      ]
    };
  },

  created() {
    this.getPublishBanner();
  },

  // 初始化
  mounted() {
    this.$nextTick(function() {
      document.body.style.backgroundColor = '#fff';
      window.scrollTo(0, 0);
    });
  },

  methods: {
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
.wrapper {
  margin-top: 17px;

  .left-area {
    float: left;
  }

  .right-area {
    float: right;
  }
}
</style>
