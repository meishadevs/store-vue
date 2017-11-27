
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';

//使用Vuex状态管理器
Vue.use(Vuex);

const state = {

  //用户名是否登录了
  isLogin: true,

  //是否显示蒙版
  isShowMask: false,

  //用户名
  username: 'meishadevs',

  //商品的数量
  productNum: 0,

  //当前选中的导航项的索引
  currentNavIndex: 1,

  //网站首页的商品列表
  indexProductList: [
    {
      'icon': '../src/assets/images/icon/product-icon.png',
      'title': '家用电器',
      'more': '更多',
      'leftImage': '../src/assets/images/ad.jpg',
      'topProduct': [
        {
          'image': '../src/assets/images/shouji.png',
          'name': 'HTC渴望8系列',
          'price': '1899.00'
        },
        {
          'image': '../src/assets/images/shouji-1.jpg',
          'name': '红米Note4',
          'price': '1399.00'
        },
        {
          'image': '../src/assets/images/shouji-2.jpg',
          'name': '魅蓝Note5',
          'price': '1099.00'
        },
        {
          'image': '../src/assets/images/shouji-3.jpg',
          'name': '华为荣耀8青春版',
          'price': '1599.00'
        }
      ],
      'bottomProduct': [
        {
          'image': '../src/assets/images/sanxing.png',
          'name': 'Samsung三星GALAXY Grand2',
          'price': '1999.00'
        },
        {
          'image': '../src/assets/images/shouji-4.jpg',
          'name': 'Huawei/华为PLE-703L 4G',
          'price': '1599.00'
        },
        {
          'image': '../src/assets/images/shouji-5.jpg',
          'name': 'vivo X9 前置双摄 高清自拍',
          'price': '2798.00'
        },
        {
          'image': '../src/assets/images/shouji-6.jpg',
          'name': 'OPPO A57 前置6500万 3+32G',
          'price': '1599.00'
        }
      ]
    },
    {
      'icon': '../src/assets/images/icon/product-icon.png',
      'title': '食品酒水',
      'more': '更多',
      'leftImage': '../src/assets/images/ad1.jpg',
      'topProduct': [
        {
          'image': '../src/assets/images/food.png',
          'name': '三月美食狂享购',
          'price': '50.00'
        },
        {
          'image': '../src/assets/images/food2.png',
          'name': '乐事薯片三连罐',
          'price': '19.90'
        },
        {
          'image': '../src/assets/images/food3.png',
          'name': '进口零食大礼包',
          'price': '88.00'
        },
        {
          'image': '../src/assets/images/food4.png',
          'name': '禧客手撕面包',
          'price': '28.80'
        }
      ],
      'bottomProduct': [
        {
          'image': '../src/assets/images/food1.png',
          'name': '康比特 维他保咀嚼片 60片',
          'price': '600.00'
        },
        {
          'image': '../src/assets/images/food5.png',
          'name': '新疆正品野生新鲜果原汁',
          'price': '165.00'
        },
        {
          'image': '../src/assets/images/food6.png',
          'name': '天地壹号苹果醋饮料330ml',
          'price': '4.60'
        },
        {
          'image': '../src/assets/images/food7.png',
          'name': '可尔必思发酵型牛奶浓缩汁',
          'price': '58.80'
        }
      ]
    }
  ]
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
