<template>
  <div class="card">
    <input
      v-model="data.title"
      type="text"
      class="input-info input-title"
      placeholder="TITLE"
    />
    <button class="button btn-remove" @click="removeCard()">-</button>
    <div class="items">
      <item v-for="(item, index) in todos" :key="index" :data="item" />
    </div>
    <input
      v-model="data.content"
      type="text"
      class="input-info"
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
    return {}
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
          cards.splice(i, 1)
          this.$store.commit('saveData')
        }
      }
    },
    addNewTodoItem() {
      if (this.data.content == '') {
        alert('Type item...!')
      } else {
        let todoItem = new TodoItem(this.data.content, '')
        this.data.todos.push(todoItem)
        this.data.content = ''
        this.$store.commit('saveData')
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
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  position: relative;
}
.input-info {
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
}
.input-title {
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}
.button {
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 15px;
  width: fit-content;
  background: white;
  cursor: pointer;
}
.btn-remove {
  border: none;
  font-weight: bold;
  font-size: 36px;
  padding: 0px;
  line-height: 5px;
  transition: transform 0.5s;
  position: absolute;
  right: 15px;
  top: 10px;
}
.btn-remove:hover {
  transform: rotate(360deg);
}
.btn-remove:focus {
  outline: none;
}
.items {
  overflow-y: auto;
}
</style>
