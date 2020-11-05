var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api.controller');

router.get('/people', apiController.get);
router.post('/people', apiController.store);

module.exports = router;