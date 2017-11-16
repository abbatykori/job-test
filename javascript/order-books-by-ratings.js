const books = require('./books')

let orderBooksbyRatings = booksObject => {
    booksObject.sort(function(ratingA, ratingB){
        if (ratingA.ratings > ratingB.ratings){
            return -1;
        } else{
            return 1;
        }
    }) 
}
orderBooksbyRatings(books);
console.log(books);