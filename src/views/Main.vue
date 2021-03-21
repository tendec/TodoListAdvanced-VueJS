<template>
  <div id="main-container">
    <h3 class="title-page">CARDS</h3>
    <div class="card-container">
      <div class="cards"></div>
      <div class="card">
        <input type="text" class="input-info input-title" placeholder="TITLE" />
        <button class="button btn-add" @click="addCard">+</button>
        <input type="text" class="input-info" placeholder="ITEM" />
      </div>
    </div>
    <button class="button btn-logout" @click="onLogoutBtnClick">
      Log out
    </button>
  </div>
</template>

<script>
// import Card from '../assets/class/card.js'
// import Item from '../assets/class/item.js'
export default {
  name: 'Main',
  data() {
    return {}
  },
  methods: {
    addCard() {
      this.$store.commit('addNewCard')
    },
    onLogoutBtnClick() {
      this.$store.commit('setCurrentUser', null)
      this.$store.commit('saveData')
      this.$router.push({ name: 'Login' })
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.$store.commit('loadData')
    })
  }
}
</script>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
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
