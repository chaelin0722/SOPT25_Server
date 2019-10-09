

var express = require('express');
var router = express.Router();

console.log('trace: api/blog/blog');
router.use('/blog', require('./blog'));

module.exports = router;