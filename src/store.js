import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    user: '', // 用户账号
    userInfo: '', // 用户信息
    level: '', // 会员等级
    levelList: [
      '大众会员',
      '普通会员',
      '黄金会员',
      '白金会员',
    ]
  },
  mutations: {
    addCount (state, v) {
      state.count = v
    },
    reduceCount (state, v) {
      state.count = state.count - v
    },
    setInfo (state, payload) {
      state.userInfo = payload.name
      state.user = payload.name
      state.level = state.levelList[payload.name]
    },
    setLevel (state, payload) {
      state.level = state.levelList[payload.level]
      state.userInfo = payload.level
    }
  },
  actions: {
    login ({commit}, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setInfo', payload)
          resolve('登录成功')
        }, 500)
      })
    },
    buy ({commit}, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setLevel', payload)
          resolve('购买成功')
        }, 500)
      })
    }
  }
})
