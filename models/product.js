
var db = require('./db');

module.exports={
	
	storage : function(callback){
		var sql = "select * from product where catagory ='storage'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	parmanent : function(callback){
		var sql = "select * from product where subcatagory='parmanent storage'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	getAll : function(callback){
		var sql = "select * from product ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	
	portable : function(callback){
		var sql = "select * from product where subcatagory='portable storage'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	casing : function(callback){
		var sql = "select * from product where catagory='casing'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	monitor : function(callback){
		var sql = "select * from product where catagory='monitor'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	graphics : function(callback){
		var sql = "select * from product where catagory='graphics'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	ram : function(callback){
		var sql = "select * from product where catagory='ram'";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
}
	


