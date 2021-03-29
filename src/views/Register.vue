<template>
  <div id="container">
    <div id="deco"></div>
    <div id="ui-container">
      <div class="title">TODO</div>
      <div id="register-container">
        <h2 class="title-page">REGISTER</h2>
        <label for="register-username" id="labelU">Username:</label>
        <input
          v-model="input.username"
          type="text"
          class="input-info"
          id="register-username"
          autocomplete="off"
          :class="{ invalid: validation }"
          @input="resetInputValidation"
          @keyup.enter="onCreateBtnClick"
        />
        <label for="register-password" id="labelP">Password:</label>
        <input
          v-model="input.password"
          type="password"
          class="input-info"
          id="register-password"
          autocomplete="off"
          :class="{ invalid: validation }"
          @input="resetInputValidation"
          @keyup.enter="onCreateBtnClick"
        />
        <font-awesome-icon
          icon="eye"
          class="eyeP"
          id="eyeS"
          style="display: inline;"
          @click="togglePassword"
        />
        <font-awesome-icon
          icon="eye-slash"
          class="eyeP"
          id="eyeH"
          style="display: none;"
          @click="togglePassword"
        />
        <label for="register-cfpassword" id="labelcfP">Confirm Password:</label>
        <input
          v-model="input.cfpassword"
          type="password"
          class="input-info"
          id="register-cfpassword"
          autocomplete="off"
          :class="{ invalid: validation }"
          @input="resetInputValidation"
          @keyup.enter="onCreateBtnClick"
        />
        <font-awesome-icon
          icon="eye"
          class="eyecfP"
          id="eyecfS"
          style="display: inline;"
          @click="togglePassword"
        />
        <font-awesome-icon
          icon="eye-slash"
          class="eyecfP"
          id="eyecfH"
          style="display: none;"
          @click="togglePassword"
        />
        <button class="button" id="btn-create" @click="onCreateBtnClick">
          Create
        </button>
        <button class="button" id="btn-back" @click="onBackBtnClick">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../assets/class/user.js'
export default {
  name: 'Register',
  data() {
    return {
      input: {
        username: '',
        password: '',
        cfpassword: ''
      },
      validation: false
    }
  },
  methods: {
    onCreateBtnClick() {
      let users = this.$store.state.users
      let usernames = []
      let passwords = []
      for (let i = 0; i < users.length; i++) {
        usernames.push(users[i].username)
        passwords.push(users[i].password)
      }
      if (usernames.includes(this.input.username)) {
        alert('Username existed!')
        this.validation = true
      } else if (this.input.username == '') {
        alert('Type info!')
        this.validation = true
      } else if (this.input.password !== this.input.cfpassword) {
        alert('Password not match!')
        this.validation = true
      } else {
        this.addUser(this.input.username, this.input.cfpassword, [])
        this.input.username = ''
        this.input.password = ''
        this.input.cfpassword = ''
        this.$router.push({ name: 'Main' })
      }
    },
    addUser(username, password, cards) {
      let user = new User(username, password, cards)
      this.$store.commit('addUser', user)
      this.$store.commit('setCurrentUser', user)
      this.$store.commit('saveData')
    },
    resetInputValidation() {
      this.validation = false
    },
    togglePassword() {
      let password = document.getElementById('register-password')
      let eyeS = document.getElementById('eyeS')
      let eyeH = document.getElementById('eyeH')
      let cfpassword = document.getElementById('register-cfpassword')
      let eyecfS = document.getElementById('eyecfS')
      let eyecfH = document.getElementById('eyecfH')
      if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text')
        eyeS.setAttribute('style', 'display: none;')
        eyeH.setAttribute('style', 'display: inline;')
        cfpassword.setAttribute('type', 'text')
        eyecfS.setAttribute('style', 'display: none;')
        eyecfH.setAttribute('style', 'display: inline;')
        setTimeout(() => {
          password.setAttribute('type', 'password')
          eyeS.setAttribute('style', 'display: inline;')
          eyeH.setAttribute('style', 'display: none;')
          cfpassword.setAttribute('type', 'password')
          eyecfS.setAttribute('style', 'display: inline;')
          eyecfH.setAttribute('style', 'display: none;')
        }, 2000)
      } else {
        password.setAttribute('type', 'password')
        eyeS.setAttribute('style', 'display: inline;')
        eyeH.setAttribute('style', 'display: none;')
        cfpassword.setAttribute('type', 'password')
        eyecfS.setAttribute('style', 'display: inline;')
        eyecfH.setAttribute('style', 'display: none;')
      }
    },
    onBackBtnClick() {
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
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-image: linear-gradient(
    to top left,
    rgb(181, 249, 211),
    rgb(115, 235, 174)
  );
}
#deco {
  width: 750px;
  height: 750px;
  position: absolute;
  left: -145px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px 5px rgb(115, 235, 174);
  transform: rotate(117deg);
  background-image: linear-gradient(
    to top left,
    rgb(181, 249, 211),
    rgb(115, 235, 174)
  );
}
#ui-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto auto;
  box-shadow: 5px 5px 30px -5px rgb(0, 197, 144);
  border-radius: 10px;
  width: 700px;
  height: 400px;
  backdrop-filter: blur(10px);
  animation: bounceIn 0.5s;
}
.title {
  flex-grow: 10;
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  text-shadow: 5px 5px 10px rgb(0, 197, 144);
  transform: rotate(-30deg);
  transition: font-size 0.5s;
}
.title:hover {
  /* animation: tada 1s; */
  font-size: 120px;
}
.title-page {
  text-shadow: 3px 3px 5px rgb(0, 197, 144);
}
.title-page:hover {
  animation: tada 0.7s;
}
#register-container {
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
  text-shadow: 1px 1px 3px rgb(0, 197, 144);
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
  transition: border-color 0.5s;
}
.input-info:focus {
  outline: none;
  border-color: rgb(0, 197, 144);
}
.eyeP {
  position: absolute;
  bottom: 217px;
  right: 55px;
  cursor: pointer;
}
.eyecfP {
  position: absolute;
  bottom: 164px;
  right: 55px;
  cursor: pointer;
}
.invalid {
  background-color: rgb(0, 197, 144);
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
#btn-create {
  margin-bottom: 50px;
  font-size: 15px;
}
#btn-back {
  margin-bottom: 5px;
  font-size: 15px;
  border: none;
  border-radius: 0px;
  background-color: transparent;
}
#btn-back:focus {
  outline: none;
}
</style>
