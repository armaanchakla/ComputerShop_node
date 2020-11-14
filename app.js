//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');

var home  		= require('./controllers/home');
var user  		= require('./controllers/user');
var register 	= require('./controllers/register');
var login  		= require('./controllers/login');
var logout  	= require('./controllers/logout');
var product 	= require('./controllers/product');
var review	 	= require('./controllers/review');
var reviewList	= require('./controllers/reviewList');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use(cookieParser());

app.use('/home', home);
app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/product', product);
app.use('/review', review);
app.use('/reviewList', reviewList);



//ROUTING
app.get('/', function(req, res){
	res.send('<center> <h1> Welcome to Computer Shop </h1> <a href="/login">Login</a> <br><br> <a href="/register">Register</a> </center');

});


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000!');
});
