
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestion()
        console.log('')
    })
}

class MultipleChoice {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestion() {
        this.options.forEach((option, index) => console.log(`${index+1}) ${option}`))
    }
}

class Boolean {
    constructor(description) {
        this.description = description
    }

    printQuestion() {
        console.log('1, True')
        console.log('2, False')
    }
}

class Text {
    constructor(description) {
        this.description = description
    }

    printQuestion() {
        console.log('Answer________')
    }
}

const questions = [
    new MultipleChoice('What is your favorite lanuage?', ['CSS', 'HTML', 'JS', 'Python']),
    new Boolean('this video is useful.'),
    new Text('Descripe your favorite Js framework')
]

printQuiz(questions)