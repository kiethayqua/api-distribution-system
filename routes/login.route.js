var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login.controller');

router.get('/', loginController.login);
// router.post('/login', loginController.index);
module.exports = router;