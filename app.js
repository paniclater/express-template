//express server

//==================================================
//BASE SETUP
//==================================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore');

//Models
var Example = require('./models/ExampleModel');

//if you don't configure body parser you will get undefined when you try to parse json or url params
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//==================================================
//DATABASE CONFIG
//==================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/text')

//==================================================
//API ROUTES
//==================================================

//router 
var router = express.Router();

//test route (get http://localhost/api)
router.get('/', function(request, response) {
	response.send({ message: "well look at that? a server!"});
});

//all routes prefixed with /api, router registered with app.
app.use('/api', router)

//==================================================
//START UP SERVER
//==================================================

app.listen(port);
console.log('server running on ' + port);
