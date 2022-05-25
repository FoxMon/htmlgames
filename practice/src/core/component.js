class Component {
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

    setup() {}
    template() { return '' }
    setEvent() {}
    setState(newState) {
        this.state = { ...this.state, ...newState }
        this.render()
    }
    render() {
        this.target.innerHTML = this.template()
    }
    addEvent(eventType, selector, callback) {
        const childrens = [ ...this.target.querySelectorAll(selector) ]
        const isTarget = (target) => childrens.includes(target) || target.closest(selector)
        this.target.addEventListener(eventType, e => {
            if(!isTarget(e.target)) return false
            callback(e)
        })
    }
}

export default Component