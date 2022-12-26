import { makeAutoObservable } from 'mobx'

class Logs {
  // инициируем массив объектов ToDo листа 
  logs = [
    { id: '', title: ''}
  ]

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  // стор в mobx мутабельный, поэтому просто пушим в него новую задачу
  addLog(log) {
    this.logs.push(log)
  }
}

export default new Logs()