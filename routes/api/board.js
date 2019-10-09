/*
var express = require('express');
var router = express.Router();

// localhost:3000/api/board
router.get('/', (req, res)=>{
    res.send('게시판 입니다.');
});

module.exports = router;
*/
var express = require('express');
var router = express.Router();

console.log('board');
router.get('/', (req, res)=>{
    res.status(200).send({ 
        message: "게시판입니다"
    })
})

module.exports = router;