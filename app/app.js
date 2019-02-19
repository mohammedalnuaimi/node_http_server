const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const morganLogger = require('morgan-debug');
const helmet = require('helmet')
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
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

module.exports = app;
