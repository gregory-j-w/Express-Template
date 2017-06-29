var express = require('express');
var router = express.Router();
var Book = require('../models/Book');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));


module.exports = router;
