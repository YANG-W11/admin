import { getToken, setToken, removToken } from '@/utils/auth'
import { login } from '@/api/user'
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
const actions = {
  async login(context, data) {
    const result = await login(data)

    context.commit('setToken', result)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

