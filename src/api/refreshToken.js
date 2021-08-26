import axios from '@/libs/api.request'
import qs from 'qs'
import { setToken, localRead, localSave } from '@/libs/util'
import router from '@/router/index'

export default async() => {
  let grant_type = 'refresh_token'
  let client_id = 'admin-web'
  let client_secret = '4402b06a67334d769fed712453284dae'
  let refresh_token = localRead('refreshToken')

  const refreshData = {
    grant_type: grant_type,
    client_id: client_id,
    client_secret: client_secret,
    refresh_token: refresh_token
  }

  try {
    const res = await axios.request({
      url: '/oauth/token',
      data: qs.stringify(refreshData),
      method: 'post'
    })
    const { code, access_token, refresh_token } = res
    if (code && code === 1011) {
      setToken('')
      localSave('refreshToken', '')
      return router.replace({ path: '/login', query: { redirect: router.currentRoute.fullPath }})
    } else if (access_token && refresh_token) {
      setToken(access_token)
      localSave('refreshToken', refresh_token)
    }
    return res
  } catch (error) {
  }
}
