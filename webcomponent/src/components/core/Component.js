export default class Component {
    target
    state
    props

    constructor(target, props) {
        this.target = target
        this.props = props
        this.setup()
        this.setEvent()
        this.render()
    }

    // override
    setup() {}

    // override
    mounted() {}

    //override
    template() { return '' }

    //override
    setEvent() {}

    setState(newState) {
        this.state = { ...this.state, ...newState }
        this.render()
    }

    render() {
        this.target.innerHTML = this.template()
        this.mounted()
    }

    addEvent(eventType, selector, callback) {
        const children = [ ...this.target.querySelectorAll(selector) ]
        // target을 포함하거나, 하위 요소에 더 있거나
        const isTarget = (target) => children.includes(target) || target.closest(selector)
        this.target.addEventListener(eventType, event => {
            if(!isTarget(event.target)) return false
            callback(event)
        })
    }
}