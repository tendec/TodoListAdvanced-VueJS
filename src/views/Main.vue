<template>
  <div id="main-container">
    <h3 class="title-page">CARDS</h3>
    <button class="button" id="btn-add">+</button>
    <button class="button" id="btn-remove">-</button>
    <button class="button" id="btn-logout" @click="onLogoutBtnClick">
      Log out
    </button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  methods: {
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
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
}
.button {
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px 15px;
  width: fit-content;
  background: white;
}
</style>
