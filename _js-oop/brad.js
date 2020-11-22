// ~~~ ES-5 ~~~

// book constructor
function Book(author, name) {
    let prefixfornames = '-D'
    this.name = name + prefixfornames
    this.author = author

    this.getYear = () => {
        console.log('1997')
    }
}

// instantiate book object
const book1 = new Book('end-of-me', 'sodium')

// set a method on prototypre
Book.prototype.getSummary = function() {
    return 'omin daijki'
}

// magazine constructor 
function Magazine(title, author, year, month) {
    // inherit from the Book or ( extends )
    Book.call(this, title, author,year)
    this.month = month
}

// inherit the prototype
Magazine.prototype = Object.create(Book.prototype)

// change the Magazine constructor to the Book constructor
Magazine.prototype.constructor = Book

const magazine1 = new Magazine('cold summer', 'Jhon Doe', '2020', 'April')

console.log(magazine1.getSummary())
console.log(magazine1.prototype)

// Object.create

//>> Object of protos
const bookProtos = {
    getSummary: function() {
        return 'this book is very good'
    },
    getAge: function() {
        return 'this.book is a litle old now'
    }
}

// create object
const book2 = Object.create(bookProtos)
book2.title = 'Book two'
book2.author = 'simon sinek'
book2.year = '1998'

const book3 = Object.create(bookProtos, {
    title: {value: "name of death"},
    author: {value: "arlock james"},
    year: {value: "1888"}
})

console.log(book2)
console.log(book3)

// ~~~ ES-6...~~~
class Game {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    static canAccessFromParentOnly() {
        console.log('this static method only exist in the constoctor')
    }

    getAge() {
        const plus = 12
        return `this year: ${this.year + plus}`
    }
}

const game1 = new Game('god-of.war', 'sparat-prod', '2004')

// inherit from the Game Class
class subGame extends Game {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month
    } 
}

const subgame1 = new subGame('mario', 'rainbow-studio', 'jack', 'January')

// Class Property Descriptor Decorators

const lipstick = target => target.lips = 'pink'

@lipstick
class Girl {
    constructor(name, age, lips) {
        this.name = name
        this.age = age
        this.lips = lips
    }
}