var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log("Received request from the client.");
    next();
});

router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;


