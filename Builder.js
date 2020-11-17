
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.Address = street
    }
}

class User {
    constructor(name, /*age, phone, address*/) {
        this.name = name
        /*this.age = age
        this.phone = phone
        this.address = address*/
    }
}

// const user = new User('Bob', undefined, undefined, new Address(2153, 'otawa'))

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

const user = new UserBuilder('Bob').setAge(23).setPhone('1717').build()

console.log(user)