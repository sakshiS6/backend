const express = require('express');

const router = express.Router();

router.get('/add',(req,res) => {
    res.send('response from your product add ')
});

router.get('/getall',(req,res) => {
    res.send('response from your product getall ')
});

router.get('/delete',(req,res) => {
    res.send('response from your product delete ')
});

router.get('/update',(req,res) => {
    res.send('response from your product update ')
});

module.exports = router;