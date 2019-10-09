var express = require('express');
var router = express.Router();

/* GET users listing. */
console.log('users');
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
