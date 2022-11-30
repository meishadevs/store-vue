import axios from '@/libs/api.request';

// 获得已发布的轮播图列表
export const getPublishBanner = () => {
  return axios.request({
    url: '/banner/publish_list',
    method: 'get'
  });
};
