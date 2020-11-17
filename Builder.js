
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.Address = street
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

const user = new user('Bob')
console.log(user)
