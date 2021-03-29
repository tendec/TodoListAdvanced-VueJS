<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
    this.$store.commit('loadData')
  }
}
</script>
<style>
body {
  margin: 0;
}
</style>
