<!-- 商品分类页 -->

<template>
  <div id="classs">
    <topBar></topBar>
    <headerBar></headerBar>
    <navBar></navBar>
    <section class="wrapper inner-c clearfix">
      <div class="left-area">
        <classMenu></classMenu>
      </div>
      <div class="right-area">
        <banner></banner>
        <classShowProduct v-bind:productList="classProductList[0]"></classShowProduct>
        <classShowProduct v-bind:productList="classProductList[1]"></classShowProduct>
      </div>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
  import topBar from '../components/topBar';
  import headerBar from '../components/headerBar';
  import navBar from '../components/navBar';
  import classMenu from '../components/classMenu';
  import banner from '../components/banner';
  import footerBar from '../components/footerBar';
  import classShowProduct from '../components/classShowProduct';

  export default {

    //组件名称
    name: 'classs',

    components: {
      topBar,
      headerBar,
      navBar,
      classMenu,
      banner,
      classShowProduct,
      footerBar
    },

    data() {
      return {
        //商品分类页的商品列表
        classProductList: [
          {
            'title': '数码影像',
            'content': [
              {
                'image': '../src/assets/images/shop1.jpg',
                'name': 'Canon佳能IXU132数码相机粉色1600像素2.7"LCD',
                'price': '699.00',
                'numStar': '5',
                'numComment': '79'
              },
              {
                'image': '../src/assets/images/shop2.jpg',
                'name': 'Canon佳能PowerShotN数码相机白色礼盒装',
                'price': '2199.00',
                'numStar': '4',
                'numComment': '100'
              },
              {
                'image': '../src/assets/images/shop3.jpg',
                'name': '全网底价Fujifilm富士FinePixJX710数码相机粉色',
                'price': '349.00',
                'numStar': '5',
                'numComment': '157'
              },
              {
                'image': '../src/assets/images/shop4.jpg',
                'name': 'Canon佳能EOS60D单反套机（EF-S18-135IS）',
                'price': '6099.00',
                'numStar': '5',
                'numComment': '1322'
              },
              {
                'image': '../src/assets/images/shop5.jpg',
                'name': 'SONY索尼DSC-TX66数码相机粉色（1820万像素/3.3英寸）',
                'price': '966.00',
                'numStar': '5',
                'numComment': '190'
              },
              {
                'image': '../src/assets/images/shop6.jpg',
                'name': 'Canon佳能LEGRIAHFR506摄像机白色',
                'price': '2799.00',
                'numStar': '5',
                'numComment': '78'
              },
              {
                'image': '../src/assets/images/shop7.jpg',
                'name': 'Samsung三星GALAXY Tab33G版T1117英寸平板电脑',
                'price': '1698.00',
                'numStar': '5',
                'numComment': '123'
              },
              {
                'image': '../src/assets/images/shop8.jpg',
                'name': '全网底价Sony索尼NEX-3NL 16-50mm单变焦镜头套装 粉',
                'price': '2430.00',
                'numStar': '5',
                'numComment': '203'
              }
            ]
          },
          {
            'title': '娱乐影音',
            'content': [
              {
                'image': '../src/assets/images/shop9.jpg',
                'name': 'KSD 凯仕达 USB电脑跳舞毯(即接即用，性价比强纯中文)',
                'price': '39.00',
                'numStar': '5',
                'numComment': '7865'
              },
              {
                'image': '../src/assets/images/shop10.jpg',
                'name': 'Apple 苹果 iPod touch4 32G MD058CH/A 白色多媒体播放',
                'price': '1359.00',
                'numStar': '5',
                'numComment': '16'
              },
              {
                'image': '../src/assets/images/shop11.jpg',
                'name': 'lepow乐泡磐石6000通用型移动电源大黄鸭定制版本',
                'price': '139.00',
                'numStar': '5',
                'numComment': '87'
              },
              {
                'image': '../src/assets/images/shop12.jpg',
                'name': 'Youwin 友多闻 UDN708天乙四核手机平板7英寸 IPS全贴',
                'price': '799.00',
                'numStar': '5',
                'numComment': '87'
              },
              {
                'image': '../src/assets/images/shop13.jpg',
                'name': '天韵 2CJBD 2寸吉他背带（黑色花色）',
                'price': '3.00',
                'numStar': '5',
                'numComment': '19'
              },
              {
                'image': '../src/assets/images/shop14.jpg',
                'name': 'Philips 飞利浦 SPF1127/93 7英寸数码相框 白色',
                'price': '259.00',
                'numStar': '5',
                'numComment': '255'
              },
              {
                'image': '../src/assets/images/shop15.jpg',
                'name': 'ibody Rainbow 蓝牙健康追踪器 蓝色',
                'price': '239.00',
                'numStar': '5',
                'numComment': '19'
              },
              {
                'image': '../src/assets/images/shop16.jpg',
                'name': 'SmartQ 智器 ZWatch 智能手表 开区可穿戴式达人酷毙生活',
                'price': '699.00',
                'numStar': '5',
                'numComment': '16'
              }
            ]
          }
        ]
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '商品分类页';
      });
    }
  };
</script>

<style scoped>
  .wrapper {
    margin-top: 17px;
  }

  .wrapper .left-area {
    float: left;
  }

  .wrapper .right-area {
    float: right;
  }
</style>
