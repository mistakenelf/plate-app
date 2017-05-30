import Cookies from 'js-cookie'

export function removeAccessToken() {
  Cookies.remove('accesstoken')
}

export function saveAccessToken(accessToken, options) {
  Cookies.set('accesstoken', accessToken, options)
}

export function loadAccessToken() {
  return Cookies.get('accesstoken')
}
