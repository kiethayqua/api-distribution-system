var express = require('express');
var router = express.Router();
var logListController = require('../controllers/logList.controller');

router.get('/', logListController.logList);

module.exports = router;