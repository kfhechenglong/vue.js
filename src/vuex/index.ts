import { createStore } from 'vuex'
export default createStore({
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
