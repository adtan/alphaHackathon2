var express = require('express');
var mongoDBConnection = require('../database-connection/dbconnect');

var router = express.Router();

router.use(function (req, res, next) {
    console.log("Received request from the client.");
    next();
});

router.get('/', function (req, res) {
    res.render('index');
});

router.route("/technology")
        .get(function (req, res) {
            var datas = mongoDBConnection.find();
            res.json(datas);
        });

module.exports = router;


