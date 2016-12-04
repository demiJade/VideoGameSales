var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/mydb';

var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);
console.log('Server running at localhost:3000');

var yearlySales = [];

var findSalesYearlyReport = function(db, callback){
	var cursor = db.collection('sales.yearly').find();
	
	cursor.each(function(err,doc){
		assert.equal(err,null);
		if (doc != null){
			var obj = cursor.next();
			var jsonobj = {};
			jsonobj['year'] = obj["_id"];
			
			// console.log("Retrieved Yearly Sales Report");
			// var object = doc.;
			// yearlySales.push(object);
			// console.log(doc);
			yearlySales.push(jsonobj);
		} else {
			callback();
		}
	});
};

MongoClient.connect(url, function(err, db){
	assert.equal(null,err);
	findSalesYearlyReport(db, function(){
		db.close();
	});
});

console.dir(yearlySales);