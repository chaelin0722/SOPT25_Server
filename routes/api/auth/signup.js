
var express = require('express');
var router = express.Router();

console.log('signup');
router.get('/', (req, res)=>{
    res.send('회원가입 페이지 입니다.');
});

module.exports = router;
