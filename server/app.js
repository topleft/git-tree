// *** main dependencies *** //
// require("./database.js")
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var mongoose = require('mongoose');
var http = require("http");

// *** routes *** //
var mainRoutes = require('./routes/index');
var authRoutes = require('./routes/auth');
var gitRoutes = require('./routes/git-routes');

// *** express instance *** //
var app = express();

// *** config file *** //
var config = require('./_config');

// *** database config *** //
mongoose.connect(config.MONGO_URI[app.settings.env],
  function(err, res){
    if (err){
      console.log("Failed to connect to DB: "+err);
    } else {
      console.log("Success. Connected to: "+config.MONGO_URI[app.settings.env]);
    }
  });


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));


// *** main routes *** //
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/public/views/', 'layout.html'));
});

// *** main routes *** //
app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/', gitRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
