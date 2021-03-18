export default class User {
  constructor(username, password) {
    this.username = username
    this.password = password
    this.cards = []
  }
  isUser(username, password) {
    if (username == this.username && password == this.password) {
      return true
    } else {
      return false
    }
  }
}
