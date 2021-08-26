import axios from '@/libs/api.request'
import qs from 'qs'

export const login = ({ userName, password, generateKey, captchaCode }) => {
  const data = {
    username: userName,
    password: password,
    generate_key: generateKey,
    captcha_code: captchaCode,
    grant_type: 'password',
    client_id: 'admin-web',
    auth_type: 'captcha_code',
    client_secret: '4402b06a67334d769fed712453284dae'
  }

  return axios.request({
    url: '/oauth/token',
    method: 'post',
    data: qs.stringify(data)
  })
}

export const getUserInfo = () => {
  return axios.request({
    url: '/user/current',
    method: 'get'
  })
}

export const logout = () => {
  return axios.request({
    url: '/login/revoke_token',
    method: 'post'
  })
}

// 获得用户列表
export const fetchList = (query) => {
  return axios.request({
    url: '/user/get_page',
    method: 'get',
    params: query
  })
}

// 获得所属区的列表数据
export const districtList = () => {
  return axios.request({
    url: '/district/getDistrict',
    method: 'get'
  })
}

// 获得所属区的列表数据(不受数据权限控制)
export const allDistrictList = () => {
  return axios.request({
    url: '/district/getAllDistrict',
    method: 'get'
  })
}

// 获得街道的列表数据
export const streetList = (districtId) => {
  return axios.request({
    url: '/street/getStreet',
    method: 'get',
    params: {
      districtId
    }
  })
}

// 获得街道的列表数据(不受数据权限控制)
export const allStreetList = (districtId) => {
  return axios.request({
    url: '/street/getAllStreet',
    method: 'get',
    params: {
      districtId
    }
  })
}

// 获得社区列表
export const communityList = (streetId) => {
  return axios.request({
    url: '/community/getCommunity',
    method: 'get',
    params: {
      streetId
    }
  })
}

// 获得社区列表（不受数据权限控制）
export const allCommunityList = (streetId) => {
  return axios.request({
    url: '/community/getCommunitysByStreetId',
    method: 'get',
    params: {
      streetId
    }
  })
}

// 获得所有部门数据
export const allDeptList = (departmentType, isBidding) => {
  return axios.request({
    url: '/dept/get_all_list',
    method: 'get',
    params: {
      departmentType,
      isBidding
    }
  })
}

export const addOrUpdateUser = (userTemp) => {
  return axios.request({
    url: '/user/save',
    method: 'post',
    data: userTemp
  })
}

export const deleteUser = (id) => {
  return axios.request({
    url: '/user/remove',
    method: 'post',
    data: id
  })
}

export const getUser = (id) => {
  return axios.request({
    url: '/user/get_info',
    method: 'get',
    params: { id }
  })
}

// 获取登陆用户所拥有的权限
export const authorization = () => {
  return axios.request({
    url: '/user/current',
    method: 'get'
  })
}

export const editPassword = (editPasswordForm) => {
  return axios.request({
    url: '/user/edit_password',
    method: 'post',
    data: editPasswordForm
  })
}

export const resetPassword = (id) => {
  return axios.request({
    url: '/user/reset_password',
    method: 'post',
    data: id
  })
}

export const exportData = (query) => {
  return axios.request({
    url: '/user/export_excel',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

export const exportWord = (query) => {
  return axios.request({
    url: '/export/export_word',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

export const exportPdf = (query) => {
  return axios.request({
    url: '/export/export_pdf',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

// 检查密码强度
export const checkPassword = (passWord) => {
  return axios.request({
    url: '/user/check_password',
    method: 'get',
    params: { passWord }
  })
}

// 获取密码强度枚举集合
export const getPasswordLevel = () => {
  return axios.request({
    url: '/user/getPasswordLevel',
    method: 'get'
  })
}

// 解锁用户
export const unLockUser = (id) => {
  return axios.request({
    url: '/user/unlock',
    method: 'post',
    data: id
  })
}
