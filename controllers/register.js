var express = require('express');
var userModel = require('./../models/register');

var router = express.Router();

router.get('/', function(req, res){
	res.render('register/index');
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		type: req.body.radio,
		
	}

	userModel.register(user, function(status){
		
		if(status){		
			res.redirect('/login');	
		}else{
			res.send('<center> <h1> Invalid username/password <h1> </center');
		}
	});

});

module.exports = router;
