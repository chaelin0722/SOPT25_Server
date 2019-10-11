

var express = require('express');
var router = express.Router();

console.log('trace: api/news/like');
router.use('/news/like', require('./like'));

module.exports = router;