var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');

//session
var http = require('http');
var expressSession = require('express-session');


var app = express();

//db
var db = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//join
var joinRouter = require('./routes/join/joinform');

//class
var classroomRouter = require('./routes/class/myclassroom');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//session
app.use(expressSession({
  secret:'my key',
  resave:true,
  saveUninitialized:true
}));



app.use('/', indexRouter);
app.use('/users', usersRouter);


//join
app.use('/join',joinRouter);

//classroom
app.use('/classroom',classroomRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Model
var User = require('./models/usermodel');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());




module.exports = app;
