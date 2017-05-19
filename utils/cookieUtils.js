import Cookies from 'js-cookie'

export const removeAccessToken = () => {
  Cookies.remove('accesstoken')
}

export const saveAccessToken = (accessToken, options) => {
  Cookies.set('accesstoken', accessToken, options)
}

export const loadAccessToken = () => {
  return Cookies.get('accesstoken')
}
