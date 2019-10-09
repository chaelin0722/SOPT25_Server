var express = require('express');
var router = express.Router();

console.log('news')
router.get('/', (req, res)=>{
    res.send('뉴스 페이지입니다.');
});

module.exports = router;