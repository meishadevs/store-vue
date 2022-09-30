import axios from '@/libs/api.request';

// 获得咨询列表
export const advisoryList = (query) => {
  return axios.request({
    url: '/advisory/list',
    method: 'get',
    params: query
  });
};

// 获得咨询个数
export const advisoryCount = () => {
  return axios.request({
    url: '/advisory/count',
    method: 'get'
  });
};
