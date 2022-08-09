class Subscriber {
    doSomeThing

    constructor(doSomeThing) {
        this.doSomeThing = doSomeThing
    }

    subscribe(publisher) {
        publisher.setSubscriber(this.doSomeThing)
    }
}

module.exports = Subscriber
