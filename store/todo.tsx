import { makeAutoObservable } from 'mobx'

class Todo {
  // инициируем массив объектов ToDo листа 
  todos = [
    { id: '01', title: 'Hello', completed: false },
    { id: '02', title: 'Hello2', completed: true }
  ]

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  // стор в mobx мутабельный, поэтому просто пушим в него новую задачу
  addTodo(todo) {
    this.todos.push(todo)
  }

  // удаляем по id задачу, отфильтрованный массив по id 
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // ставим  true completed выполненной задаче или false в противном случае 
  completeTodo(id) {
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

}

export default new Todo()