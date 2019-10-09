

var express = require('express');
var router = express.Router();

console.log('trace: api/news/index');
router.use('/news', require('./news'));
module.exports = router;
