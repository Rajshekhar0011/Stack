
/*Module dependencies.
  "require" keyword is used to include modules and access functionality in another files
 */
var express = require('express')
  , mongoose= require('mongoose')
  , bodyParser= require('body-parser')
 /* below two lines shows users.js and index.js files include */
  , routes = require('./routes')
  , user = require('./routes/user')
/*
 * http or request modules are, Which helps to process server related requests
 * in the web ...below one calls the "http" library
 */
  , http = require('http')
  , path = require('path');
/*
 * To use the functionality within the module, we need to create object...below
 * var app is one object
 */
var app = express();
mongoose.connect('mongodb://localhost:27017/db');
// all environments
app.set('port', process.env.PORT || 3000);
// using set method to call
// this one is view directory setup or calling
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// is going to look for where the static file existed..directory name
app.use(express.static(path.join(__dirname, 'public')));
// another way to add modules...and directory
app.use('/node_modules',express.static(__dirname+"/node_modules"));
// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/users', user.list);

// Authenticatgion
app.post('/api/user/signup',authenticationController.signup);
/* Creating the server using http library */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
