
/*Module dependencies.controllers
  "require" keyword is used to include modules and access functionality in another files
 */
var express = require('express');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
 /* below two lines shows users.js and index.js files include */
var routes = require('./routes');
  /*, user = require('./routes/user')*/
/*
 * http or request modules are, Which helps to process server related requests
 * in the web ...below one calls the "http" library*/
 var controller= require('./routes/controller');
 var database= require('./routes/database');
 var signup= require('./routes/signup-controller');
 var http = require('http');
 var path = require('path');
/*
 * To use the functionality within the module, we need to create object...below
 * var app is one object
 */
var app = express();

// linking frontend files
app.get('/',function(req,res){
	res.sendfile('frontend/Home.html');
});
app.get('/',function(req,res){
	res.sendfile('frontend/signup.html');
});
//database connection
mongoose.connect('mongodb://localhost:27017/db');

// linking midlleware files
app.use('/routes',express.static(__dirname +"/controller.js"));


// all environments
app.set('port', process.env.PORT || 3000);
// using set method to call this one is view directory setup or calling
/*app.set('views', __dirname + '/views');
app.use(express.static('views'));
app.set('view engine', 'ejs');*/
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// is going to look for where the static file existed..directory name
//two ways to add modules...and directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules',express.static(__dirname+"/node_modules"));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//index.js and user.js file calling
/*app.get('/', routes.index);
app.get('/users', user.list);*/





// Authentication

/* Creating the server using http library */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
