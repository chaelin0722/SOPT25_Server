var express = require('express');
var router = express.Router();

console.log('trace: /api/index.js');

router.use('/', require('./cafe'));
router.use('/', require('./blog'));
router.use('/board', require('./board'));
router.use('/auth',require('./auth'));
router.use('/',require('./news'));

module.exports = router;