class Publisher {
    state
    observers = new Set()

    constructor(state) {
        this.state = state
        Object.keys(state).forEach((key) =>
            Object.defineProperty(this, key, {
                get: () => this.state[key],
            })
        )
    }

    dispatch(newState) {
        this.state = { ...this.state, ...newState }
        this.notifyToSubscriber()
    }

    setSubscriber(subscriber) {
        this.observers.add(subscriber)
    }

    notifyToSubscriber() {
        this.observers.forEach((cb) => cb())
    }
}

module.exports = Publisher
