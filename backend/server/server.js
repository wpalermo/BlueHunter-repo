'use strict';

var express = require('express'),
app = express(),
port = process.env.PORT || 8088,
mongoose = require('mongoose'),
books = require('./api/models/bluehunter.model'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bluehunter', {useMongoClient:true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/bluehunter.routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('----------------------------');
console.log('BlueHunter server started.');
console.log('Port: ' + port);
console.log('----------------------------');