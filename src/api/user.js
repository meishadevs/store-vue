import axios from '@/libs/api.request';

// 注册
export const register = (userDetail) => {
  return axios.request({
    url: '/user/register',
    method: 'post',
    data: userDetail
  });
};

// 登录
export const login = (userDetail) => {
  return axios.request({
    url: '/user/login',
    method: 'post',
    data: userDetail
  });
};

// 退出登录
export const logout = () => {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  });
};

// 获得用户信息
export const getUserInfo = () => {
  return axios.request({
    url: '/user/current',
    method: 'get'
  });
};

// 获得用户列表
export const userList = (query) => {
  return axios.request({
    url: '/user/get_page',
    method: 'get',
    params: query
  });
};

// 获得所属区的列表数据
export const districtList = () => {
  return axios.request({
    url: '/district/getDistrict',
    method: 'get'
  });
};

// 获得街道的列表数据
export const streetList = (districtId) => {
  return axios.request({
    url: '/street/getStreet',
    method: 'get',
    params: {
      districtId
    }
  });
};

// 获得社区列表
export const communityList = (streetId) => {
  return axios.request({
    url: '/community/getCommunity',
    method: 'get',
    params: {
      streetId
    }
  });
};

export const addOrUpdateUser = (userTemp) => {
  return axios.request({
    url: '/user/save',
    method: 'post',
    data: userTemp
  });
};

export const deleteUser = (id) => {
  return axios.request({
    url: '/user/remove',
    method: 'post',
    data: id
  });
};

export const getUser = (id) => {
  return axios.request({
    url: '/user/get_info',
    method: 'get',
    params: { id }
  });
};
