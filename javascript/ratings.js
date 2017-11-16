const books = require('./books')
const orderBooksByRatings = require('./order-books-by-ratings')

// orderBooksByRatings(books)

module.exports = {
    getTopBooks: function(n) {
        let topBooks = []
        for (let i=0; i<n; i++) {
            topBooks.push(books[i])
        }      
    },
    getTopAuthors: function(n) {        
        let topAuthors = []
        for (let i=0; i<n; i++) {
            topAuthors.push({author: books[i].author, ratings: books[i].ratings})
        }        
    }
}
