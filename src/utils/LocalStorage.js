export default class LocalStorage {
  constructor (gif) {
    this.gif = gif
  }
  get(info) {
    return localStorage.getItem(info)
  }
  add(info) {
    const { id, title, images, user } = this.gif
    const gifAdd = {id, title, images, user}

    const listString = localStorage.getItem(info)
    
    if (listString === 0 || listString === null) {
        const result = []
        result.push(gifAdd)
        const gifString = JSON.stringify(result)
        console.log(gifString)
        localStorage.setItem(info, gifString)
        return
    } else {
        const listJson = localStorage.getItem(info)
        const jsonList = JSON.parse(listJson)
        console.log(jsonList)
        const validation = jsonList.every(item => {
          return item.id !== this.gif.id
        })
        if (validation === true) {
          jsonList.push(gifAdd)
          const list = JSON.stringify(jsonList)
          return localStorage.setItem(info, list)
        }
      return
    }
  }
  delete(info) {
    
    const listString = localStorage.getItem(info)
    const jsonList = JSON.parse(listString)
    const gifSelected = jsonList.filter(item => {
      return item.id != this.gif.id
    })
    const resultString = JSON.stringify(gifSelected)
    localStorage.setItem(info, resultString)
  }
}