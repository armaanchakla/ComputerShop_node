var express = require('express');
var userModel = require('./../models/review');

var router = express.Router();

router.get('/', function(req, res){
	res.render('review/index');
});

router.post('/', function(req, res){
	
	var user = {
		name: req.body.name,
		comment: req.body.comment,
		
	}

	userModel.review(user, function(status){
		
		if(status){		
			res.redirect('/product');	
		}else{
			res.send('<center> <h1> Review not accepted! <h1> </center');
		}
	});

});

module.exports = router;
