//Run 'NPM install' before running this app.

//set up application, require all the NPM modules that we need. 
var mongoose    = require('mongoose');
var express     = require('express');
var app         = express();
var server      = require('http').createServer(app);
var port        = process.env.PORT || 3000;
var morgan      = require('morgan');
var bodyParser  = require('body-parser');
var ejsLayouts  = require('express-ejs-layouts');
var methodOVR   = require('method-override');

//set up a connection with the DB
mongoose.connect('mongodb://localhost/celebs');

//set view engine and define view directory 
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('views', './views');

//Configure MiddleWare - (morgan for loggin out activity in temrinal, bodyParser for accessing request-body, method-override to manipulate HTTP verbs in forms)
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOVR('_method'));

//Tell the app to route all requests through the 'routes.js' file
var routes = require('./config/routes');
app.use(routes);

//start server on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
});