var express = require('express');
var router = express.Router();
var authController = require('../controllers/logout.controller');

router.get('/', authController.logout);

module.exports = router;