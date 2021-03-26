<template>
  <div id="main-container">
    <h3 class="title-page">CARDS</h3>
    <div class="card-container">
      <div class="cards">
        <card v-for="(card, index) in cards" :key="index" :data="card" />
      </div>
      <button class="button btn-add" @click="addCard">+</button>
      <button class="button btn-add" @click="removeCard">-</button>
    </div>
    <button class="button btn-logout" @click="onLogoutBtnClick">
      Log out
    </button>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Main',
  data() {
    return {}
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
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 960px;
}
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 960px;
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
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 300px;
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
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 15px;
  width: fit-content;
  background: white;
  cursor: pointer;
}
.btn-add {
  border: none;
  font-weight: bold;
  font-size: 36px;
  padding: 0px;
  transition: transform 0.5s;
}
.btn-add:hover {
  transform: rotate(360deg);
}
.btn-add:focus {
  outline: none;
}
</style>
