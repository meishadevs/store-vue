<template>
  <div class="select-address">
    <div
      class="select"
      @mouseenter="isShowProvince = true"
      @mouseleave="isShowProvince = false"
    >
      <h3 class="select-name">{{ provinceName }}</h3>
      <span class="select-triangle"></span>
      <ul class="select-options" v-if="isShowProvince">
        <li
          v-for="(item, index) in provinceList"
          :key="index"
          @click="selectProvince(item.provinceName, item.provinceCode)"
        >
          {{ item.provinceName }}
        </li>
      </ul>
    </div>
    <div
      class="select"
      @mouseenter="isShowCity = true"
      @mouseleave="isShowCity = false"
    >
      <h3 class="select-name">{{ cityName }}</h3>
      <span class="select-triangle"></span>
      <ul
        class="select-options"
        v-if="isShowCity"
        :style="{ overflowY: ulStyle }"
      >
        <li
          v-for="(city, index) in cityList"
          :key="index"
          :style="{ width: liStyle }"
          @click="selectCity(city.cityName, city.cityCode)"
        >
          {{ city.cityName }}
        </li>
      </ul>
    </div>
    <div
      class="select"
      @mouseenter="isShowDistrict = true"
      @mouseleave="isShowDistrict = false"
    >
      <h3 class="select-name">{{ districtName }}</h3>
      <span class="select-triangle"></span>
      <ul
        class="select-options"
        v-if="isShowDistrict"
        :style="{ overflowY: ulStyle1 }"
      >
        <li
          v-for="(district, index) in districtList"
          :key="index"
          :style="{ width: liStyle1 }"
          @click="selectDistrict(district.districtName, district.districtCode)"
        >
          {{ district.districtName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { provinceList, cityList, DistrictList } from '@/api/region';

export default {
  name: 'SelectAddress',

  data() {
    return {
      // 省份数据
      provinceList: [],

      // 市的数据
      cityList: [],

      // 区的数据
      districtList: [],

      // 是否显示省份列表
      isShowProvince: false,

      // 是否显示市列表
      isShowCity: false,

      // 是否显示区列表
      isShowDistrict: false,

      // ul标签的样式
      ulStyle: 'scroll',
      ulStyle1: 'scroll',

      // li标签的样式
      liStyle: '93px',
      liStyle1: '93px'
    };
  },

  computed: {
    ...mapState({
      provinceName: state => state.user.provinceName,
      cityName: state => state.user.cityName,
      districtName: state => state.user.districtName,
      provinceCode: state => state.user.provinceCode,
      cityCode: state => state.user.cityCode,
      districtCode: state => state.user.districtCode
    })
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      this.getProvincList();
      this.getCityList();
      this.geDistrictList();
      this.isShowScroll2();
    });
  },

  // 监听器
  watch: {
    provinceName() {
      this.getCityList();
    },

    cityName() {
      this.geDistrictList();
    }
  },

  methods: {
    ...mapMutations([
      'setProvinceName',
      'setCityName',
      'setDistrictName',
      'setProvinceCode',
      'setCityCode',
      'setDistrictCode'
    ]),

    // 获得省份数据
    getProvincList() {
      provinceList()
        .then((res) => {
          this.provinceList = res.data.list;
          this.setProvinceName(this.provinceList[0].provinceName);
          this.setProvinceCode(this.provinceList[0].provinceCode);
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },

    // 获得市数据
    getCityList() {
      cityList(this.provinceCode)
        .then((res) => {
          this.cityList = res.data.list;
          this.setCityName(this.cityList[0].cityName);
          this.setCityCode(this.cityList[0].cityCode);
          this.isShowScroll1();
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },

    // 获得区数据
    geDistrictList() {
      DistrictList(this.cityCode)
        .then((res) => {
          this.districtList = res.data.list;
          this.setDistrictName(this.districtList[0].districtName);
          this.setDistrictCode(this.districtList[0].districtCode);
          this.isShowScroll1();
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    },

    // 选择省份
    selectProvince(provinceName, provinceCode) {
      this.setProvinceName(provinceName);
      this.setProvinceCode(provinceCode);
      this.isShowProvince = false;
    },

    // 选择市
    selectCity(cityName, cityCode) {
      this.setCityName(cityName);
      this.setCityCode(cityCode);
      this.isShowCity = false;
    },

    // 选择区
    selectDistrict(districtName, districtCode) {
      this.setDistrictName(districtName);
      this.setDistrictCode(districtCode);
      this.isShowDistrict = false;
    },

    // 是否显示滚动条
    isShowScroll1() {
      // 如果市的个数小于6个，不显示竖直滚动条
      if (this.cityList.length < 6) {
        this.ulStyle = 'inherit';
        this.liStyle = '100%';

        // 如果市的个数大于或等于6个，显示竖直滚动条
      } else {
        this.ulStyle = 'scroll';
        this.liStyle = '93px';
      }
    },

    // 是否显示滚动条
    isShowScroll2() {
      // 如果区的个数小于6个，不显示竖直滚动条
      if (this.districtList.length < 6) {
        this.ulStyle1 = 'inherit';
        this.liStyle1 = '100%';

        // 如果区的个数大于或等于6个，显示竖直滚动条
      } else {
        this.ulStyle1 = 'scroll';
        this.liStyle1 = '93px';
      }
    }
  }
};
</script>

<style lang="less" scoped>
.select {
  height: 24px;
  margin-right: 10px;
  background-color: #fff;
  border: solid 1px #ccc;
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
