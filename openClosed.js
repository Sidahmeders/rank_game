
function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1, True')
                console.log('2, False')
                break
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index+1}. ${option}`)
                })
                break
            case 'text':
                console.log('Answer:____________')
                break
            case 'range':
                console.log('Max:____________')
                console.log('Min:____________')
                break
        }
        console.log('')
    })
}

const questions = [
    {
        type: 'boolean',
        description: 'this video is useful.'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite lanuage?',
        options: ['CSS', 'HTML', 'JS', 'Python']
    },
    {
        type: 'text',
        description: 'Descripe your favorite Js framework'
    },
    {
        type: 'range',
        description: 'what is the speed limit in your mind'
    }
]

printQuiz(questions)