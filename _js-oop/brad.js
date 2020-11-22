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
    Book.call(this, title, author,year)
    this.month = month
}

const magazine1 = new Magazine('cold summer', 'Jhon Doe', '2020', 'April')

console.log(magazine1)
