var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var lessMiddleware = require('less-middleware');
var mongo = require('mongoskin');
var cors = require('cors');

var index = require('./routes/index');
var getdata = require('./routes/getdata');
var booking = require('./routes/booking');
var addroom = require('./routes/add-room');
var mongoose = require('mongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
  res.header("Access-control-Allow-Origin", "*");
  res.header('Access-control-allow-methods', 'GET, PUT, POST, DELETE, PAATCH, OPTIONS');
  res.header("Access-control-Allow-Headers", "Origin, x-Requested-with, Content-Type, Accept, Authorization, Content-Length");
  next();
})
app.use(cors())


//app.use('/', index);
app.use('/getdata', getdata);
app.use('/booking', booking);
app.use('/add-room', addroom);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}).listen(5000);



module.exports = app;
