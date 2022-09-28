import axios from '@/libs/api.request';

// 获得省份列表
export const provinceList = () => {
  return axios.request({
    url: '/region/provinceList',
    method: 'get'
  });
};

// 根据省份编码获得省份下面的市数据
export const cityList = (provinceCode) => {
  return axios.request({
    url: '/region/cityList',
    method: 'get',
    params: {
      provinceCode
    }
  });
};

// 根据市编码获得市下面的区数据
export const DistrictList = (cityCode) => {
  return axios.request({
    url: '/region/DistrictList',
    method: 'get',
    params: {
      cityCode
    }
  });
};
