const getTheTitles = function(books) {
    let booksArr = [];
    for(book of books){
        booksArr.push(book.title);
    }
    return booksArr;
};

// Do not edit below this line
module.exports = getTheTitles;