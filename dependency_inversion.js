
class Store {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(15 * quantity * 100)
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


