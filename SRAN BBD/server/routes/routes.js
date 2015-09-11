var express = require('express');
var bbcalc = require('../model/bbcalc');

var router = express.Router();


router.use(function (req, res, next) {
    console.log("Received request from the client.");
    next();
});

router.get('/', function (req, res) {
    res.render('index');
});

router.route("/api/configurations")
        .get(function (req, res) {
            bbcalc.find({},function(err,bbc_colloction){
                    res.json(bbc_colloction);
            });
        });

module.exports = router;
