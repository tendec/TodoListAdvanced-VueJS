import Vue from 'vue'
import Vuex from 'vuex'
import User from '../assets/class/user.js'
import Card from '../assets/class/card.js'

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
    addNewCard(state) {
      let cards = state.currentUser.cards
      let title = []
      for (let i = 0; i < cards.length; i++) {
        title.push(cards[i].title)
      }
      if (title.includes('')) {
        alert('New card existed!')
      } else {
        let newCard = new Card('', [])
        state.currentUser.addNewCard(newCard)
      }
    },
    removeCard(state) {
      state.currentUser.removeCard()
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
            stateData.users[i].password,
            stateData.users[i].cards
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
