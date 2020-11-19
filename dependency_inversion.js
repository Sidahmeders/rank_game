
class Store {
    constructor(user) {
        this.paymentProcessor = new PaymentProcessor(user)
        // this.stripe = new Stripe(user)
        // this.paypal = new Paypal()
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
        // this.stripe.makePayment(200 * quantity * 100)
        // this.paypal.makePayment(this.user, 200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity)
        // this.stripe.makePayment(15 * quantity * 100)
        // this.paypal.makePayment(this.user, 15 * quantity)
    }
}

class PaymenetProcessor {
    constructor(user) {
        this.user = user
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.user = user
    }
}

class PaypalPaymentProcesor {
    constructor(user) {
        this.user = user
    }
}


class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`)
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with Paypal`)
    }
}

const store = new Store('John')
store.purchaseBike(2)
store.purchaseHelmet(2)