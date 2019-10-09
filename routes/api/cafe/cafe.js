var express = require('express');
var router = express.Router();

console.log('cafe')
router.get('/', (req, res)=>{
    res.send('카페 페이지입니다.');
});

module.exports = router;