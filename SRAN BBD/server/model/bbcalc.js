
var mongoDBConnection = require('../database-connection/dbconnect');
var Schema = mongoDBConnection.Schema;

var bbc_schema = new Schema({}, { collection: 'bbcalc_colloction'});

module.exports =  mongoDBConnection.model('BBC_Colloction',bbc_schema);
