var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', (req, res, next) => {
  const {books, loans, user} = req.app.locals.data
  
  const mappedLoans = loans.maps(({bookId, userId}) => {
    const books = books.find(book => book.id ==- bookId)
    const user = users.find(user => user.id ==- userId)
  })
  
  res.send(mappedLoans)
});

module.exports = router;
