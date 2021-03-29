<template>
  <div id="container">
    <h1 class="title-page">TODOs</h1>
    <div class="cards">
      <card v-for="(card, index) in cards" :key="index" :data="card" />
    </div>
    <button class="button btn-change" @click="addCard">+</button>
    <button class="button btn-change" @click="removeCard">-</button>
    <div id="infoCurUser">
      <div id="info">User: {{ info }}</div>
      <button class="button" id="btn-logout" @click="onLogoutBtnClick">
        Log out
      </button>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Main',
  data() {
    return {
      info: this.$store.state.currentUser.username
    }
  },
  components: {
    Card
  },
  computed: {
    cards() {
      return this.$store.state.currentUser.cards
    }
  },
  methods: {
    addCard() {
      this.$store.commit('addNewCard')
      this.$store.commit('saveData')
    },
    removeCard() {
      this.$store.commit('removeCard')
      this.$store.commit('saveData')
    },
    onLogoutBtnClick() {
      this.$store.commit('setCurrentUser', null)
      this.$store.commit('saveData')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Lobster', cursive;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to top left,
    rgb(253, 183, 183),
    rgb(250, 73, 73)
  );
}
.title-page {
  text-shadow: 3px 3px 5px rgb(247, 75, 75);
}
.title-page:hover {
  animation: tada 0.7s;
}
#infoCurUser {
  position: absolute;
  right: 0px;
  border: 1px solid black;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 90vw;
  overflow-x: auto;
}
.cardItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 300px;
}
.card {
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  flex: 0 0 300px;
}
.input-info {
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
}
.input-title {
  text-transform: uppercase;
}
.button {
  margin: 10px;
  border-radius: 5px;
  border-color: lightcoral;
  padding: 5px 15px;
  width: fit-content;
  background: white;
  cursor: pointer;
  background-color: transparent;
  text-shadow: 1px 1px 3px rgb(247, 75, 75);
}
.button:hover {
  animation: tada 0.7s;
}
.button:focus {
  outline: none;
  animation: headShake 0.5s;
}
.btn-change {
  border: none;
  font-weight: bold;
  font-size: 36px;
  padding: 0px;
}
#btn-logout {
  margin-bottom: 50px;
  font-size: 15px;
}
</style>
