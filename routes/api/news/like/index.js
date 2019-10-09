

var express = require('express');
var router = express.Router();

console.log('trace: api/cafe/cafe');
router.use('/like', require('./like'));

module.exports = router;