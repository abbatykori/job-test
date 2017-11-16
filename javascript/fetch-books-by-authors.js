const books = require('./books')

let authorQuery = "Brenda Jackson";

// this returns an object with matching books
function fetchBooksByAuthors(authorQuery) {
    return books.filter(function(findBooks){
        return findBooks.author == authorQuery;
    })
  }



// this returns an array with just the matching book titles
let results = fetchBooksByAuthors(authorQuery);
let titleResults = []

results.forEach(function(results){
    titleResults.push(results.title)
})