import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: null,
    cards: []
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
    }
    // loadData(state) {
    //   JSON.parse(localStorage.getItem('masterData'))
    // }
  },
  actions: {},
  modules: {}
})
