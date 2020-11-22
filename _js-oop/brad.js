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
    // inherit from the Book
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

