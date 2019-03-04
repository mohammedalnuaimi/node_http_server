const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morganLogger = require('morgan-debug');
const helmet = require('helmet')
const indexRouter = require('./routes/index');
const data = require('./data')
const app = express();

app.locals.data = data;
const port = 3000;

app.use(morganLogger('app:server', 'dev'))
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
next(createError(500, err))
});


// app.listen(port, err => {
//   if (err) {
//       console.log(err)
//   }
// })
module.exports = app;
