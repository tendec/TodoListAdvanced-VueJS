<template>
  <div class="card" :class="{ doneCard: validation }">
    <input
      v-model="data.title"
      type="text"
      class="input-info input-title"
      placeholder="TITLE"
    />
    <button class="button tooltip" id="btn-remove" @click="removeCard">
      <span class="tooltiptext">Remove this card</span>-
    </button>
    <div class="items">
      <item v-for="(item, index) in todos" :key="index" :data="item" />
    </div>
    <input
      v-model="data.content"
      type="text"
      class="input-info input-items"
      placeholder="item..."
      @keyup.enter="addNewTodoItem"
    />
  </div>
</template>

<script>
import Item from './Item.vue'
import TodoItem from '../assets/class/item.js'
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          title: '',
          todos: []
        }
      }
    }
  },
  components: {
    Item
  },
  data() {
    return {
      validation: false
    }
  },
  computed: {
    todos() {
      return this.data.todos
    }
  },
  methods: {
    removeCard() {
      let code = this.data.code1
      let cards = this.$store.state.currentUser.cards
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].code1 == code) {
          if (confirm('Confirm remove this card?')) {
            this.validation = true
            setTimeout(() => {
              cards.splice(i, 1)
              this.$store.commit('saveData')
            }, 500)
          }
        }
      }
    },
    addNewTodoItem() {
      let todos = this.data.todos
      let contents = []
      for (let i = 0; i < todos.length; i++) {
        contents.push(todos[i].content)
      }
      if (this.data.title == '') {
        alert('Type title card!')
        this.data.content = ''
      } else {
        if (this.data.content == '') {
          alert('Type item...!')
        } else if (contents.includes(this.data.content)) {
          alert('Todo item existed!')
          this.data.content = ''
        } else {
          let todoItem = new TodoItem(this.data.content, '')
          this.data.todos.push(todoItem)
          this.data.content = ''
          this.$store.commit('saveData')
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Lobster', cursive;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  position: relative;
  animation: flipInX 0.7s;
}
.card:hover .input-title {
  border-bottom: 1px solid rgb(0, 197, 144);
}
.card:hover .input-items {
  border-bottom: 1px solid rgb(0, 197, 144);
  opacity: 1;
}
.card:hover #btn-remove {
  transform: scale(1);
}
.input-info {
  margin: 5px auto;
  padding: 5px;
  width: 200px;
}
.input-title {
  width: fit-content;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 17px;
  background-color: transparent;
  border: none;
  border-bottom: transparent;
  transition: border-bottom 0.7s;
}
.input-title:focus {
  outline: none;
}
.input-items {
  width: fit-content;
  text-align: center;
  background-color: transparent;
  opacity: 0;
  border: none;
  border-bottom: transparent;
  transition: border-bottom 0.7s, opacity 0.5s;
}
.input-items:focus {
  outline: none;
}
.tooltip {
  position: relative;
}
.tooltiptext {
  transform: scale(0);
  width: 120px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 10px;
  background-color: rgb(0, 197, 144);
  position: absolute;
  right: 10px;
  bottom: 12px;
  transition: transform 0.3s;
}
.tooltip:hover .tooltiptext {
  transform: scale(1);
}
.doneCard {
  animation: flipOutX 0.5s;
}
.button {
  margin: 0px;
  border-radius: 5px;
  border-color: rgb(0, 197, 144);
  padding: 5px 15px;
  width: fit-content;
  cursor: pointer;
  background-color: transparent;
  text-shadow: 1px 1px 3px rgb(0, 197, 144);
}
#btn-remove {
  border: none;
  font-weight: bold;
  font-size: 36px;
  padding: 0px;
  line-height: 5px;
  position: absolute;
  right: 17px;
  top: 12px;
  transform: scale(0);
  transition: transform 0.5s;
}
#btn-remove:hover {
  animation: headShake 1s;
}
#btn-remove:focus {
  outline: none;
}
.items {
  height: 225px;
  overflow-x: auto;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(0, 197, 144);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgb(0, 197, 144);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 170, 125);
}
::-webkit-scrollbar-corner {
  display: none;
}
</style>
