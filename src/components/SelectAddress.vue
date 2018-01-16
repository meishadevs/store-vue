
<!-- 地址选择组件 -->

<template>
  <div class="select-address">
    <div class="select" @mouseenter="isShowProvince = true" @mouseleave="isShowProvince = false">
      <h3 class="select-name">{{ provinceName }}</h3>
      <span class="select-triangle"></span>
      <ul class="select-options" v-if="isShowProvince">
        <li v-for="province in provinceData" @click="selectProvince(province.name, province.code)">
          {{ province.name }}
        </li>
      </ul>
    </div>
    <div class="select" @mouseenter="isShowCity = true" @mouseleave="isShowCity = false">
      <h3 class="select-name">{{ cityName }}</h3>
      <span class="select-triangle"></span>
      <ul class="select-options" v-if="isShowCity" v-bind:style="{overflowY: ulStyle }">
        <li v-for="city in cityData" v-bind:style="{width: liStyle }" @click="selectCity(city.name, city.code)">{{ city.name }}</li>
      </ul>
    </div>
    <div class="select" @mouseenter="isShowArea = true" @mouseleave="isShowArea = false">
      <h3 class="select-name">{{ areaName }}</h3>
      <span class="select-triangle"></span>
      <ul class="select-options" v-if="isShowArea" v-bind:style="{overflowY: ulStyle1 }">
        <li v-for="area in areaData" v-bind:style="{width: liStyle1 }" @click="selectArea(area.name, area.code)">{{ area.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'SelectAddress',

    data() {
      return {

        //当前显示的省的编码
        provinceCode: 0,

        //当前显示的市的编码
        cityCode: 0,

        //当前显示的区的编码
        areaCode: 0,

        //当前显示的省的名称
        provinceName: null,

        //当前显示的市的名称
        cityName: null,

        //当前显示的区的名称
        areaName: null,

        //省的数据
        provinceData: [],

        //市的数据
        cityData: [],

        //区的数据
        areaData: [],

        //是否显示省份列表
        isShowProvince: false,

        //是否显示市列表
        isShowCity: false,

        //是否显示区列表
        isShowArea: false,

        //ul标签的样式
        ulStyle: 'scroll',
        ulStyle1: 'scroll',

        //li标签的样式
        liStyle: '93px',
        liStyle1: '93px'
      };
    },

    //初始化
    mounted() {
      this.$nextTick(() => {

          //获得省的数据
          this.getAddressData(1, this.provinceCode, (err, data) => {
            this.provinceData = data;
            this.provinceName = this.provinceData[0].name;
            this.provinceCode = this.provinceData[0].code;
          });

          this.bus.$emit('select-address');
      });
    },

    //销毁
    destroyed() {
    },

    //监听器
    watch: {

      //如果provinceName的值发生变化，调用这个函数
      provinceName() {

        //获得市的数据
        this.getAddressData(2, this.provinceCode, (err, data) => {
          this.cityData = data;
          this.cityName = this.cityData[0].name;
          this.cityCode = this.cityData[0].code;
          this.isShowScroll1();
        });
      },

      //如果cityName的值发生变化，调用这个函数
      cityName: function () {

        //获得区的数据
        this.getAddressData(3, this.cityCode, (err, data) => {
          this.areaData = data;
          this.areaName = this.areaData[0].name;
          this.areaCode = this.areaData[0].code;
          this.isShowScroll2();
        });
      }
    },

    methods: {

      //选择省份
      selectProvince(provinceName, provinceCode) {
        this.provinceName = provinceName;
        this.provinceCode = provinceCode;
        this.isShowProvince = false;
        this.bus.$emit('select-address');
      },

      //选择市
      selectCity(cityName, cityCode) {
        this.cityName = cityName;
        this.cityCode = cityCode;
        this.isShowCity = false;
        this.bus.$emit('select-address');
      },

      //选择区
      selectArea(areaName, areaCode) {
        this.areaName = areaName;
        this.areaCode = areaCode;
        this.isShowArea = false;
        this.bus.$emit('select-address');
      },

      //是否显示滚动条
      isShowScroll1() {

        //如果市的个数小于6个，不显示竖直滚动条
        if (this.cityData.length < 6) {
          this.ulStyle = 'inherit';
          this.liStyle = '100%';

          //如果市的个数大于或等于6个，显示竖直滚动条
        } else {
          this.ulStyle = 'scroll';
          this.liStyle = '93px';
        }
      },

      //是否显示滚动条
      isShowScroll2() {

        //如果区的个数小于6个，不显示竖直滚动条
        if (this.areaData.length < 6) {
          this.ulStyle1 = 'inherit';
          this.liStyle1 = '100%';

          //如果区的个数大于或等于6个，显示竖直滚动条
        } else {
          this.ulStyle1 = 'scroll';
          this.liStyle1 = '93px';
        }
      },

      /**
       * 获得地址数据
       * @param flag 标记位，1表示省，2表示市，3表示区
       * @param addressCode 地址编码
       * @param callback 回调函数
       */
      getAddressData(flag, addressCode, callback) {

        //请求参数
        let param = this.addressUrl + "?flag=" + flag + "&citycode=" + addressCode;

        //发送get请求，获得省份数据
        this.jsonp(param, null, callback);
      }
    }
  };
</script>

<style scoped>

  .select {
    height: 24px;
    margin-right: 10px;
    background-color: #fff;
    border:solid 1px #ccc;
    cursor: pointer;
    text-align: left;
    z-index: 2;
    float: left;
    position: relative;
  }

  .select-name {
    width: 89px;
    height: 24px;
    line-height: 24px;
    padding: 0 24px 0 7px;
    font-size: 12px;
    font-weight: normal;
    overflow: hidden;
  }

  .select-triangle {
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid dashed dashed;
    border-color: rgb(80, 174, 248) transparent transparent;
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 8px;
  }

  .select .select-options {
    min-width: 120px;
    max-height: 122px;
    overflow-x: hidden;
    overflow-y: scroll;
    border: solid 1px #ccc;
    background-color: #fff;
    font-size: 12px;
    position: absolute;
    left: -1px;
    top: 23px;
  }

  .select-options li {
    width: 93px;
    height: 24px;
    line-height: 24px;
    padding-left: 10px;
    overflow: hidden;
    z-index: 2;
    position: relative;
  }

  .select-options li:hover {
    background-color: green;
    color: #fff;
  }
</style>
