import Item from './components/item.js'

class App {
    constructor() {
        const app = document.querySelector('#app')
        new Item(app)
    }
}

new App()