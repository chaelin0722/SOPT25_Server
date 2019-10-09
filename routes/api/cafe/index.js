

var express = require('express');
var router = express.Router();

console.log('trace: api/cafe/cafe');
router.use('/cafe', require('./cafe'));

module.exports = router;