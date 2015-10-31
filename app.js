var express = require('express'),
    path           = require('path'),
    favicon        = require('serve-favicon'),
    logger         = require('morgan'),
    cookieParser   = require('cookie-parser'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    methodOverride = require('method-override');

    routes       = require('./server/routes/index'),
    users        = require('./server/routes/users'),
    customerAPI  = require("./server/api/customer-api"),
    supplierAPI  = require("./server/api/supplier-api"),

    database     = require("./server/config/database"),

    app          = express();

//connect to the database
mongoose.connect(database.url);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + database.url);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// == include routes files ==
app.use('/', routes);
app.use('/users', users);

// === include api files ====
app.use('/api/customer', customerAPI);
app.use('/api/supplier', supplierAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
