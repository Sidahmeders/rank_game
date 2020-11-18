
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
        return currentValue += this.valueToAdd
    }

    undo() {
        return currentValue -= this.valueToAdd
    }
}

const addCommand = new AddCommand(10)
console.log(addCommand.execute(20))

const claculator = new Calculator()

// claculator.add(12)
// claculator.divide(2)
// console.log(claculator.value)