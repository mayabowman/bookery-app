import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },

  saveUserId(userId) {
    window.localStorage.setItem(config.USER_ID, userId)
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  makeBasicAuthToken(userEmail, password) {
    return window.btoa(`${userEmail}:${password}`)
  },
}

export default TokenService