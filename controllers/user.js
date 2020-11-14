var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('*', function (req, res, next) {

	if (req.cookies['username'] != null) {
		next();
	} else {
		res.redirect('/login');
	}
});
router.get('/userlist', function(req, res){

		userModel.getAll(function(results){
			if(req.cookies['username'] != null){
				res.render('user/index', {user: results});
			}else{
				res.redirect('/login');
			}
		});
});




router.get('/delete/:id', function (req, res) {

    userModel.delete(req.params.id, function (status) {
       if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/userlist');
		}
    });
});

router.get('/details/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		res.render('/user/details', {user: result});
	});

});


module.exports = router;
