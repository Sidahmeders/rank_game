// book constructor
class Book {
    constructor(name, author) {
        this.name = name
        this.author = author
    }

    getYear() {
        console.log('1997')
    }
}

const book1 = new Book('end-of-me', 'sodium')

// set a method on prototypre
Book.prototype.getSummary = function() {
    return 'omin daijki'
}

