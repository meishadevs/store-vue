import axios from '@/libs/api.request';

// 获得商品列表
export const productList = (query) => {
  return axios.request({
    url: '/product/list',
    method: 'get',
    params: query
  });
};
