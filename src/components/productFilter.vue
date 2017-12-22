
<!-- 商品筛选组件 -->

<template>
  <div class="product-filter">
    <dl class="clearfix" v-if="brand == null">
      <dt class="fl">{{ productFilterData[0].type }}</dt>
      <dd class="fl clearfix">
        <ul class="fl clearfix">
          <li v-for="content in productFilterData[0].content">
            <a href="javascript:;" @click="setBrand(content)">{{ content }}</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="clearfix" v-if="screenSize == null">
      <dt class="fl">{{ productFilterData[1].type }}</dt>
      <dd class="fl clearfix">
        <ul class="fl clearfix">
          <li v-for="content in productFilterData[1].content">
            <a href="javascript:;" @click="setScreenSize(content)">{{ content }}</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="clearfix" v-if="operatingSystem == null">
      <dt class="fl">{{ productFilterData[2].type }}</dt>
      <dd class="fl clearfix">
        <ul class="fl clearfix">
          <li v-for="content in productFilterData[2].content">
            <a href="javascript:;" @click="setOperatingSystem(content)">{{ content }}</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="clearfix" v-if="runningMemory == null">
      <dt class="fl">{{ productFilterData[3].type }}</dt>
      <dd class="fl clearfix">
        <ul class="fl clearfix">
          <li v-for="content in productFilterData[3].content">
            <a href="javascript:;" @click="setRunningMemory(content)">{{ content }}</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="clearfix" v-if="networkType == null">
      <dt class="fl">{{ productFilterData[4].type }}</dt>
      <dd class="fl clearfix">
        <ul class="fl clearfix">
          <li v-for="content in productFilterData[4].content">
            <a href="javascript:;" @click="setNetworkType(content)">{{ content }}</a>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'productFilter',

    data() {
      return {
        productFilterData: [
          {
            'type': '品牌',
            'content': ['Samsung/三星', 'Apple/苹果', 'Huawei/华为', 'Miui/小米',
              'Lenove/联想', 'Sony/索尼', 'HTC/宏达电', 'Coolpad/酷派', 'Meinu/魅族',
              'Bbk/步步高', 'Oppo/欧珀', 'Motorola/摩托罗拉', 'vivo/维沃', 'Gionee/金立',
              'Letv/乐视']
          },
          {
            'type': '屏幕尺寸',
            'content': ['3.0英寸及以下', '4.5-3.1英寸', '5.0-4.6英寸', '5.5-5.1英寸', '5.6英寸及以上']
          },
          {
            'type': '操作系统',
            'content': ['Android', '苹果iOS', 'Windows Phone', 'Symbian', '非智能机']
          },
          {
            'type': '运行内存',
            'content': ['2G', '3G', '4G', '6G', '8G']
          },
          {
            'type': '网络类型',
            'content': ['双卡单4G', '双卡双4G', '电信4G', '移动4G', '联通4G']
          }
        ]
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {
        this.setBrand(null);
        this.setScreenSize(null);
        this.setOperatingSystem(null);
        this.setRunningMemory(null);
        this.setNetworkType(null);
      });
    },
    
    computed: mapState([
      'brand',
      'screenSize',
      'operatingSystem',
      'runningMemory',
      'networkType'
    ]),

    methods: {
      ...mapActions([
        'setBrand',
        'setScreenSize',
        'setOperatingSystem',
        'setRunningMemory',
        'setNetworkType'
      ])
    }
  };
</script>

<style scoped>
  .product-filter {
    width: 754px;
    background-color: #fff;
    border-top: solid 1px #d9d9d9;
  }

  .product-filter dl {
    padding-top: 10px;
    border-bottom: dashed 1px #d9d9d9;
  }

  .product-filter dt {
    width: 84px;
    margin-right: 40px;
    font-size: 14px;
    text-align: right;
    color: #999999;
  }

  .product-filter ul {
    width: 630px;
  }

  .product-filter li {
    width: 126px;
    height: 24px;
    float: left;
  }

  .product-filter li a {
    color: #1d7ad9;;
  }

  .product-filter li a:hover {
    color: #C81623;
  }
</style>
