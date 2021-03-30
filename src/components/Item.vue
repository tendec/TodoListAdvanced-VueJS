<template>
  <div :class="{ doneItem: validation }">
    <ul>
      <li :class="classColor">
        <button class="button">-</button>
        <input type="checkbox" @click="checkItem" />
        <div>{{ data.content }}</div>
      </li>
      <span class="red" @click="setPriority('red')"></span
      ><span class="yellow" @click="setPriority('yellow')"></span
      ><span class="green" @click="setPriority('green')"></span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          content: '',
          color: ''
        }
      }
    }
  },
  data() {
    return {
      validation: false
    }
  },
  computed: {
    classColor() {
      return this.data.color + 'Highlight'
    }
  },
  methods: {
    checkItem() {
      let code = this.data.code1
      let todos = this.$parent.data.todos
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].code1 == code) {
          this.validation = true
          setTimeout(() => {
            todos.splice(i, 1)
            this.$store.commit('saveData')
          }, 500)
        }
      }
    },
    setPriority(color) {
      this.data.color = color
      this.$store.commit('saveData')
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Lobster', cursive;
}
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding-left: 10px;
  animation: flipInY 0.5s;
}
ul:hover span {
  transform: scale(1);
}
li {
  display: flex;
  flex-basis: 250px;
  list-style: none;
  position: relative;
}
div::first-letter {
  text-transform: capitalize;
}
input[type='checkbox'] {
  margin-right: 10px;
  opacity: 0;
  cursor: pointer;
}
span {
  transform: scale(0);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 5px;
  transition: transform 0.3s;
}
span:hover {
  animation: opacity 0.5s infinite;
}
@keyframes opacity {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.doneItem {
  animation: flipOutY 0.5s;
}
.button {
  margin: 0px;
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  text-shadow: 1px 1px 3px rgb(0, 197, 144);
  border: none;
  font-weight: bold;
  font-size: 24px;
  padding: 0px;
  line-height: 5px;
  position: absolute;
  top: 7px;
  left: 5px;
}
.button:hover {
  animation: headShake 1s;
}
.button:focus {
  outline: none;
}
.red {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);
}
.yellow {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 0, 0.8);
}
.green {
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 128, 0, 0.8);
}
.redHighlight {
  color: rgba(255, 0, 0, 0.8);
}
.yellowHighlight {
  color: rgba(255, 255, 0, 0.8);
}
.greenHighlight {
  color: rgba(0, 128, 0, 0.8);
}
</style>
