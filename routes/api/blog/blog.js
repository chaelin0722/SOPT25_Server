var express = require('express');
var router = express.Router();

console.log('blog')
router.get('/', (req, res,next)=>{
    res.send('블로그 페이지입니다.');
});

module.exports = router;