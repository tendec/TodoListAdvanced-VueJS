import Vue from 'vue'
import Vuex from 'vuex'
import User from '../assets/class/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    addUser(state, user) {
      state.users.push(user)
    },
    saveData(state) {
      localStorage.setItem('masterData', JSON.stringify(state))
    },
    loadData(state) {
      const str = localStorage.getItem('masterData')
      if (str != null) {
        let stateData = JSON.parse(str)
        let currentUserData = stateData.currentUser
        for (let i = 0; i < stateData.users.length; i++) {
          let user = new User(
            stateData.users[i].username,
            stateData.users[i].password
          )
          state.users.push(user)
          if (currentUserData != null) {
            if (
              user.isUser(currentUserData.username, currentUserData.password)
            ) {
              state.currentUser = user
            }
          }
        }
      }
    }
  },
  actions: {},
  modules: {}
})
