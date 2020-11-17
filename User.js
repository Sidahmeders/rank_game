
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser {
    constructor() {
        this.id = -1
        this.name = 'Guest'
    }

    hasAccess() {
        return false
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Jhon')
]

function getUser(id) {
    const user = users.find(user => user.id === id)
    if (user == null) return new NullUser()
    else return user
}

function printUser(id) {
    const user = getUser(id)
    
    console.log('Hello ', user.name)

    if (user.hasAccess()) console.log('you have access')
    else console.log('you are not allowed to see this')
}

printUser(12)