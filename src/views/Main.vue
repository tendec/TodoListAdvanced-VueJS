<template>
  <div id="container">
    <h1 class="title-page">TODOs</h1>
    <div class="cards">
      <card v-for="(card, index) in cards" :key="index" :data="card" />
    </div>
    <button class="button btn-change tooltip" @click="addCard">
      <span class="tooltiptext">Add new card</span>+
    </button>
    <button class="button btn-change tooltip" @click="removeCard">
      <span class="tooltiptext">Remove all cards</span>-
    </button>
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
    rgb(181, 249, 211),
    rgb(115, 235, 174)
  );
}
.title-page {
  text-shadow: 3px 3px 5px rgb(0, 197, 144);
  animation: bounceIn 0.5s;
}
.title-page:hover {
  animation: tada 0.7s;
}
#infoCurUser {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin: 20px;
  padding: 5px;
  width: 100px;
  height: 20px;
  right: 0px;
  border: 1px solid rgb(0, 197, 144);
  border-radius: 10px;
  transition: height 0.5s;
  animation: bounceIn 0.5s;
}
#infoCurUser:hover {
  height: 70px;
}
#btn-logout {
  margin-bottom: 50px;
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.5s;
}
#infoCurUser:hover #btn-logout {
  opacity: 1;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  width: 1090px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0px 0px 10px 5px rgb(115, 235, 174);
  border-radius: 10px;
  animation: bounceIn 0.5s;
}
.card {
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  border: none;
  box-shadow: 5px 5px 30px -5px rgb(0, 197, 144);
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
  border-color: rgb(0, 197, 144);
  padding: 5px 15px;
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  text-shadow: 1px 1px 3px rgb(0, 197, 144);
}
.button:hover {
  animation: headShake 1s;
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
  animation: bounceIn 0.5s;
}
.tooltip {
  position: relative;
}
.tooltiptext {
  transform: scale(0);
  width: 120px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 10px;
  background-color: rgb(0, 197, 144);
  position: absolute;
  right: 15px;
  bottom: 35px;
  transition: transform 0.3s;
}
.tooltip:hover .tooltiptext {
  transform: scale(1);
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(0, 197, 144);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 197, 144);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 170, 125);
}
::-webkit-scrollbar-corner {
  display: none;
}
</style>
