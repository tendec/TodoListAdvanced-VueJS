<template>
  <div id="container">
    <div id="ui-container">
      <div class="title">TODO</div>
      <div id="login-container">
        <h2 class="title-page">LOGIN</h2>
        <label for="login-username" id="labelU">Username:</label>
        <input
          v-model="input.username"
          type="text"
          class="input-info"
          id="login-username"
          autocomplete="off"
          :class="{ invalid: validation }"
          @input="resetInputValidation"
          @keyup.enter="onLoginBtnClick"
        />
        <label for="login-password">Password:</label>
        <input
          v-model="input.password"
          type="password"
          class="input-info"
          id="login-password"
          autocomplete="off"
          :class="{ invalid: validation }"
          @keyup.enter="onLoginBtnClick"
        />
        <font-awesome-icon
          icon="eye"
          class="eye"
          id="eyeS"
          style="display: inline;"
          @click="togglePassword"
        />
        <font-awesome-icon
          icon="eye-slash"
          class="eye"
          id="eyeH"
          style="display: none;"
          @click="togglePassword"
        />
        <button class="button" id="btn-login" @click="onLoginBtnClick">
          Login
        </button>
        <button class="button" id="btn-register" @click="onRegisterBtnClick">
          Create New Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
          this.setCurrentUser(users[index])
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
    setCurrentUser(user) {
      this.$store.commit('setCurrentUser', user)
      this.$store.commit('saveData')
    },
    resetInputValidation() {
      this.validation = false
    },
    togglePassword() {
      let password = document.getElementById('login-password')
      let eyeS = document.getElementById('eyeS')
      let eyeH = document.getElementById('eyeH')
      if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text')
        eyeS.setAttribute('style', 'display: none;')
        eyeH.setAttribute('style', 'display: inline;')
      } else {
        password.setAttribute('type', 'password')
        eyeS.setAttribute('style', 'display: inline;')
        eyeH.setAttribute('style', 'display: none;')
      }
    },
    onRegisterBtnClick() {
      this.$router.push({ name: 'Register' })
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      if (this.$store.state.currentUser !== null) {
        this.$router.push({ name: 'Main' })
      }
    })
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
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to top left,
    rgb(253, 183, 183),
    rgb(250, 73, 73)
  );
}
#ui-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto auto;
  box-shadow: 10px 10px 30px -5px rgb(247, 75, 75);
  border-radius: 10px;
  width: 700px;
  height: 400px;
  backdrop-filter: blur(10px);
  /* background-image: linear-gradient(
    to top left,
    rgb(253, 183, 183),
    rgb(250, 73, 73)
  ); */
  animation: bounceIn 0.5s;
}
.title {
  flex-grow: 10;
  font-weight: bold;
  font-size: 120px;
  text-align: center;
  text-shadow: 5px 5px 10px rgb(247, 75, 75);
}
.title:hover {
  animation: tada 1s;
}
.title-page {
  text-shadow: 3px 3px 5px rgb(247, 75, 75);
}
.title-page:hover {
  animation: tada 0.7s;
}
#login-container {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 350px;
}
label {
  margin-bottom: 5px;
  align-self: flex-start;
  margin-left: 30px;
  text-shadow: 1px 1px 3px rgb(247, 75, 75);
}
.input-info {
  margin-bottom: 5px;
  padding-left: 5px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 5px 5px 0px 0px;
  width: 200px;
  line-height: 20px;
  background-color: transparent;
}
.input-info:focus {
  outline: none;
}
.eye {
  position: absolute;
  bottom: 194px;
  right: 55px;
  cursor: pointer;
}
.invalid {
  background-color: rgba(243, 55, 55, 0.884);
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
#btn-login {
  margin-bottom: 50px;
  font-size: 15px;
}
#btn-register {
  margin-bottom: 5px;
  font-size: 15px;
  border: none;
  border-radius: 0px;
  background-color: transparent;
}
#btn-register:focus {
  outline: none;
}
</style>
