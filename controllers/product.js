var express = require('express');
var userModel = require('./../models/product');
var router = express.Router();

router.get('/', function(req, res){

	userModel.getAll(function(results){		
			res.render('product/index', {user: results});
		});
});

router.get('/storage', function(req, res){

	userModel.storage(function(results){
			res.render('product/storage', {user: results});
		});
});

router.get('/parmanent', function(req, res){

	userModel.parmanent(function(results){			
			res.render('product/parmanent', {user: results});
		});
});

router.get('/portable', function(req, res){
   
	userModel.portable(function(results){			
			res.render('product/portable', {user: results});
		});
});

router.get('/casing', function(req, res){
   
	userModel.casing(function(results){
			res.render('product/casing', {user: results});
		});
});

router.get('/monitor', function(req, res){
   
	userModel.monitor(function(results){
			res.render('product/monitor', {user: results});
		});
});

router.get('/graphics', function(req, res){

	userModel.graphics(function(results){			
			res.render('product/graphics', {user: results});
		});
});

router.get('/ram', function(req, res){

	userModel.ram(function(results){			
			res.render('product/ram', {user: results});
		});
});

module.exports = router;