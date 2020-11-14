var db = require('./db');

module.exports={

	review : function(user, callback){
	    var sql = "insert into review values('','" + user.name + "', '" + user.comment + "')";
		db.execute(sql, function(status){
			callback(status);
			
		});
	},

	reviewList : function(callback){
		var sql = "select * from review";
		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
}