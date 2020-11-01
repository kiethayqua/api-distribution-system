'use strict'
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('resources'));

let routes = require('./api/routes')
routes(app)

//
app.set('views', './views');
app.set('view engine', 'pug');



//
var indexRouter = require('./routes/index.route');
app.use('/', indexRouter);

var loginRouter = require('./routes/login.route');
app.use('/login', loginRouter);

var logListRouter = require('./routes/logList.route');
app.use('/logList', logListRouter);
//
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + 'not found!'})
})


app.listen(port);

console.log('RESTful API server started on: ' + port);