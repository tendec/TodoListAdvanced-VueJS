<template>
  <div id="register-container">
    <h3 class="title-page">REGISTER</h3>
    <input
      v-model="input.username"
      type="text"
      class="input-info"
      id="register-username"
      placeholder="Username"
    />
    <input
      v-model="input.password"
      type="text"
      class="input-info"
      id="register-password"
      placeholder="Password"
    />
    <input
      v-model="input.cfpassword"
      type="text"
      class="input-info"
      id="register-cfpassword"
      placeholder="Confirm Password"
    />
    <button class="button" id="btn-create" v-on:click="onCreateBtnClick">
      Create
    </button>
    <button class="button" id="btn-back" v-on:click="onBackBtnClick">
      Back
    </button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      input: {
        username: '',
        password: '',
        cfpassword: ''
      }
    }
  },
  methods: {
    onCreateBtnClick() {
      let users = this.$store.state.users
      let usernames = []
      let passwords = []
      console.log(users)
      for (let i = 0; i < users.length; i++) {
        usernames.push(users[i].username)
        passwords.push(users[i].password)
      }
      if (usernames.includes(this.input.username)) {
        alert('Username existed!')
      } else if (this.input.username == '') {
        alert('Type info!')
      } else if (this.input.password !== this.input.cfpassword) {
        alert('Password not match!')
      } else {
        this.addUser(this.input.username, this.input.cfpassword)
        // this.$router.push({ name: 'Main' })
      }
    },
    addUser(username, password) {
      let user = {
        username: username,
        password: password
      }
      this.$store.commit('addUser', user)
      this.$store.commit('setCurrentUser', user)
      this.$store.commit('saveData')
    },
    onBackBtnClick() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
#register-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
}
.input-info {
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
}
.button {
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px 15px;
  width: fit-content;
  background: white;
}
#btn-create {
  margin-bottom: 50px;
}
#btn-back {
  margin-bottom: 5px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid black;
}
</style>
