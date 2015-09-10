var express = require('express');
var router = express.Router();

var mongoDBConnection     = require('../database-connection/dbconnect');

router.route("/technology")
        .get(function(req,res){
            var datas = mongoDBConnection.find();
            res.json(datas);
        });

module.exports = router;
