var express = require('express');
var router = express.Router();



router.get('/', (req, res)=>{
    res.send('좋아요 페이지입니다.');
});

module.exports = router;