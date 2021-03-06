
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
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

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcesor{
    constructor(user) {
        this.paypal = new Paypal()
        this.user = user
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars)
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

const store = new Store(new StripePaymentProcessor('Johana'))
store.purchaseBike(2)
store.purchaseHelmet(2)