
class Calculator {
    constructor() {
        this.value = 0
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class multiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class AddAndMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.valueToAdd = new AddCommand(valueToAdd)
        this.valueToMultiply =  new multiplyCommand(valueToMultiply)
    }

    execute(currentValue) {
        const newValue = this.valueToAdd.execute(currentValue)
        return this.valueToMultiply.execute(newValue)
    }

    undo(currentValue) {
        const newValue = this.valueToMultiply.undo(currentValue)
        return this.valueToAdd.undo(newValue)
    }
}

const claculator = new Calculator()

// claculator.executeCommand(new AddCommand(7))
// claculator.executeCommand(new multiplyCommand(10))
// console.log(claculator.value)
claculator.executeCommand(new AddAndMultiplyCommand(7, 10))
console.log(claculator.value)
claculator.undo()
console.log(claculator.value)