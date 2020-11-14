var express = require('express');
var userModel = require('./../models/review');

var router = express.Router();


router.get('/', function(req, res){

	userModel.reviewList(function(results){		
			res.render('review/reviewList', {user: results});
		});
});

module.exports = router;
