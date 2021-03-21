import Vue from 'vue'
import Vuex from 'vuex'
import User from '../assets/class/user.js'
import Card from '../assets/class/card.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: null,
    elementContainer: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    addUser(state, user) {
      state.users.push(user)
    },
    addNewCard(state) {
      // this.addCard(state, '', [])
      let newCard = new Card('', [])
      state.currentUser.addNewCard(newCard)
      // this.saveData(state)
      // this.render(state)
      return newCard
    },
    // addCard(state, title, todos) {
    //   let newCard = new Card(title, todos)
    //   state.currentUser.addNewCard(newCard)
    //   this.saveData(state)
    //   this.render(state)
    //   return newCard
    // },
    setContainer: function(element) {
      this.elementContainer = element
    },
    render(state) {
      state.elementContainer.innerHTML = ''
      let cards = state.currentUser.cards
      for (let i = 0; i < cards.length; i++) {
        state.elementContainer.appendChild(cards[i].generateHTMLElement())
      }
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
