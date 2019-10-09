var express = require('express');
var router = express.Router();

console.log('trace: index.js');
router.use('/api', require('./api'));

module.exports = router;
/*
var express = require('express');
var router = express.Router();

// localhost:3000/auth/signin
router.use('./board', require('./board'));
// localhost:3000/auth/signup
router.use('./auth', require('./api/auth/index'));



module.exports = router;
*/

