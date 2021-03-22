<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  create() {
    this.$store.commit('loadData')
  }
}
</script>
<style></style>
