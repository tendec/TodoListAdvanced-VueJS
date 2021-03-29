<template>
  <div>
    <ul>
      <li :class="classColor">
        <input type="checkbox" @click="checkItem" />{{ data.content }}
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
    return {}
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
          todos.splice(i, 1)
          this.$store.commit('saveData')
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
  padding-left: 10px;
}
li {
  list-style-type: none;
}
input {
  margin-right: 10px;
}
span {
  margin: 5px;
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
.red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
}
.yellow {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: yellow;
}
.green {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
}
.redHighlight {
  color: red;
}
.yellowHighlight {
  color: yellow;
}
.greenHighlight {
  color: green;
}
</style>
