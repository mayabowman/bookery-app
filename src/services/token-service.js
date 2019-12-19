import config from '../config'
const listeners = []

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
    listeners.forEach(f => f())
  },

  saveUserId(userId) {
    window.localStorage.setItem(config.USER_ID, userId)
    listeners.forEach(f => f())
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },

  onChange(f) {
    listeners.push(f)
  },

  getUserId() {
    return window.localStorage.getItem(config.USER_ID)
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
    listeners.forEach(f => f())
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  makeBasicAuthToken(userEmail, password) {
    return window.btoa(`${userEmail}:${password}`)
  },
}

export default TokenService