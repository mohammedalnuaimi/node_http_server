var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', (req, res, next) => {
  const {books, loans, users} = req.app.locals.data
  
  const mappedLoans = loans.map(({bookId, userId}) => {
    const book = books.find(book => book.id === bookId)
    const user = users.find(user => user.id === userId)
    
    return {
      book,
      user
    }
  })


  res.send(mappedLoans)
});

module.exports = router;
