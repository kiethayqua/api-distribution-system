'use strict'
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let path = require('path');
let cookieParser = require('cookie-parser');

app.set('views', './views');
app.set('view engine', 'pug');

var apiRouter = require('./api/routes/api.route');
var indexRouter = require('./routes/index.route');
var authRouter = require('./routes/auth.route');
var logoutRouter = require('./routes/logout.route');

var authMiddleware = require('./middlewares/auth.middleware');
var authAPIMiddleware = require('./middlewares/authAPI.middleware');

app.get('/', (req, res) => {
    res.redirect('/index');
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cookieParser('12345'));
app.use('/api', authAPIMiddleware.checkAuthHeader, apiRouter);
app.use('/index', authMiddleware.checkLogin, indexRouter);
app.use('/auth', authRouter);
app.use('/logout', logoutRouter);
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + 'not found!'});
})

app.listen(port);
console.log('RESTful API server started on: ' + port);