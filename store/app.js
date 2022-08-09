const Publisher = require("./publisher")
const Subscriber = require("./subscriber")

const state = new Publisher({
    a: 1,
    b: 2,
})

const adder = new Subscriber(() => console.log(`a + b = ${state.a + state.b}`))

adder.subscribe(state)
state.notifyToSubscriber()
state.dispatch({ a: 10, b: 20 })
