import Component from '../core/component.js'

class Item extends Component {
    setup() {
        this.state = { items: ['item1', 'item2'] }
    }

    template() {
        const { items } = this.state
        return `
            <ul>
                ${items.map((item, key) => `
                    <li>
                        ${item}
                        <button class="deleteButton" data-index="${key}">Delete</button>
                    </li>
                `).join('')}
            </ul>
            <button class="addButton">Add</button>
        `
    }

    setEvent() {
        this.addEvent('click', '.addButton', ({ target }) => {
            const { items } = this.state
            this.setState({ items: [ ...items, `item${items.length + 1}` ] })
        })
        this.addEvent('click', '.deleteButton', ({ target }) => {
            const items = [ ...this.state.items ]
            items.splice(target.dataset.index, 1)
            this.setState({ items })
        })
    }
}

export default Item