<template>
  <div id="login-container">
    <h3 class="title-page">LOGIN</h3>
    <input
      v-model="input.username"
      type="text"
      class="input-info"
      id="login-username"
      placeholder="Username"
      autocomplete="off"
      :class="{ invalid: validation }"
      @input="resetInputValidation"
    />
    <input
      v-model="input.password"
      type="password"
      class="input-info"
      id="login-password"
      placeholder="Password"
      autocomplete="off"
      :class="{ invalid: validation }"
    />
    <button class="button" id="btn-login" @click="onLoginBtnClick">
      Login
    </button>
    <button class="button" id="btn-register" @click="onRegisterBtnClick">
      Create New Account
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import User from '../assets/class/user.js'
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: ''
      },
      validation: false
    }
  },
  computed: {
    ...mapState({
      users: state => state.users
    })
  },
  methods: {
    onLoginBtnClick() {
      let users = this.$store.state.users
      let usernames = []
      let passwords = []
      let cards = []
      for (let i = 0; i < users.length; i++) {
        usernames.push(users[i].username)
        passwords.push(users[i].password)
        cards.push(users[i].cards)
      }
      if (this.input.username == '' || this.input.password == '') {
        alert('Type info!')
        this.validation = true
      } else if (usernames.includes(this.input.username)) {
        let index = usernames.indexOf(this.input.username)
        if (this.input.password == passwords[index]) {
          this.setCurrentUser(
            this.input.username,
            this.input.password,
            cards[index]
          )
          this.input.username = ''
          this.input.password = ''
          this.$router.push({ name: 'Main' })
        } else {
          alert('Username or Password incorrect!')
          this.validation = true
        }
      } else {
        alert('Username or Password incorrect!')
        this.validation = true
      }
    },
    setCurrentUser(username, password, cards) {
      let user = new User(username, password, cards)
      this.$store.commit('setCurrentUser', user)
      this.$store.commit('saveData')
    },
    resetInputValidation() {
      this.validation = false
    },
    onRegisterBtnClick() {
      this.$router.push({ name: 'Register' })
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
#login-container {
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
.invalid {
  background-color: lightcoral;
}
.button {
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px 15px;
  width: fit-content;
  background: white;
  cursor: pointer;
}
#btn-login {
  margin-bottom: 50px;
}
#btn-register {
  margin-bottom: 5px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid black;
}
</style>
