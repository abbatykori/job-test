const books = require('./books')

module.exports = orderBooksbyRatings = booksObject => {
    booksObject.sort(function(ratingA, ratingB){
        if (ratingA.ratings > ratingB.ratings){
            return -1;
        } else{
            return 1;
        }
    }) 
}