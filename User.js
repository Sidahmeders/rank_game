
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
    return users.find(user => user.id === id)
}

function printUser(id) {
    const user = getUser(id)

    let name = 'Guest'
    if (user != null && user.name != null) name = user.name
    console.log('Hello ', name)

    if (user != null && user.hasAccess != null && user.hasAccess) {
        console.log('you have access')
    } else {
        console.log('you are not allowed to see this')
    }
}

printUser(12)