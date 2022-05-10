const app = document.getElementById('app')

let state = {
    items: ['item1', 'item2', 'item3', 'item4']
}

const setState = (newValue) => {
    state = { ...state, ...newValue }
    render()
}

const render = function() {
    const items = state.items
    app.innerHTML = `
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button id="append">Add</button>
    `
    document.querySelector('#append').addEventListener('click', () => {
        setState({ items: [ ...items, `item${items.length + 1}` ] })
    })
}

render()