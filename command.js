
class Calculator {
    constructor() {
        this.value = 0
    }

    add(val) {
        this.value += val
    }

    subtract(val) {
        this.value -= val
    }

    multiply(val) {
        this.value *= val
    }

    divide(val) {
        this.value /= val
    }

}

const d = new Calculator()

d.add(12)
d.divide(2)
console.log(d.value)