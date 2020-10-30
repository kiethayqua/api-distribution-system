'use strict'
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let routes = require('./api/routes')
routes(app)

app.set('views', './views');
app.set('view engine', 'pug');

var indexRouter = require('./routes/index.route');
app.use('/', indexRouter);

app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + 'not found!'})
})


app.listen(port);

console.log('RESTful API server started on: ' + port);