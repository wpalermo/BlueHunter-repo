'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 8088,
mongoose = require('mongoose'),
books = require('./api/models/bluehunter.model'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/bluehunter', {useMongoClient:true}); 

mongoose.connect("mongodb://wpalermo:1234@cluster0-ibm-shard-00-00-hogza.mongodb.net:27017,cluster0-ibm-shard-00-01-hogza.mongodb.net:27017,cluster0-ibm-shard-00-02-hogza.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-ibm-shard-0&authSource=admin" , {useMongoClient:true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/bluehunter.routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('----------------------------');
console.log('BlueHunter server started.');
console.log('Port: ' + port);
console.log('----------------------------');