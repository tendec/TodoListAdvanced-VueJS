// import Item from './item.js'
export default class Card {
  constructor(title, todos) {
    this.title = title
    this.todos = todos
    this.code1 = Math.random()
    this.code2 = Math.random() * 10
    this.element = null
  }
  generateHTMLElement() {
    let card = document.createElement('div')
    card.classList.add('card')

    let title = document.createElement('input')
    // title.classList.add('input-info input-title')
    title.setAttribute('type', 'text')
    title.setAttribute('placeholder', 'TITLE')
    // title.setAttribute('onchange', 'updateDataTitle(this)')
    title.setAttribute('code1', this.code1)
    title.value = this.title

    // let todoList = document.createElement('ul')
    // // todoList.classList.add('todoList')
    // todoList.setAttribute('code1', this.code1)
    // for (let i = 0; i < this.todos.length; i++) {
    //   let data = this.todos[i]
    //   let todoItem = new Item(data.content, data.color)
    //   todoList.appendChild(todoItem.generateHTMLElement())
    // }

    let input = document.createElement('input')
    input.classList.add('input-info')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'ITEM')
    // input.setAttribute('onchange', 'updateDataTodo(this)')
    input.setAttribute('code1', this.code1)
    input.setAttribute('code2', this.code2)

    // let check = document.createElement('i')
    // check.classList.add('checkCard', 'fas', 'fa-check', 'fa-xm')
    // check.setAttribute('onclick', 'checkCard(this)')

    card.appendChild(title)
    // card.appendChild(todoList)
    card.appendChild(input)
    // card.appendChild(check)

    this.element = card
    return card
  }
}
