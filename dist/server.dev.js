'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'pug');

var apiRouter = require('./api/routes/api.route');

var indexRouter = require('./routes/index.route');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api/', apiRouter);
app.use('/', indexRouter);
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + 'not found!'
  });
});
app.listen(port);
console.log('RESTful API server started on: ' + port);