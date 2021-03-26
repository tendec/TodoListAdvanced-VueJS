export default class Card {
  constructor(title, todos) {
    this.title = title
    this.todos = todos
    this.code1 = Math.random()
    this.code2 = Math.random() * 10
    this.content = ''
  }
}
