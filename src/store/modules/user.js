import { getToken, setToken, removToken } from '@/utils/auth'
// 状态
const state = {
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 删除token
  removToken(state) {
    state.token = null
    removToken()
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

