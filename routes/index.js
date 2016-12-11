var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/sales', function(req,res){

	var fs = require('fs');
	var obj;
	fs.readFile('data.json',function (err, data) {
  	if (err) throw err;
  	obj = JSON.parse(data);
  	res.send(JSON.stringify(obj));
	console.log(obj);

	// var MongoClient = mongodb.MongoClient;
	// var url = 'mongodb://TALION:27017/mydb?slaveOk=true';
	// MongoClient.connect(url,function(err,db){
	// 	if (err){
	// 		console.log("Unable to connect",err);
	// 	} else {
	// 		console.log('Connection established');
		
	// 		var collection = db.collection('sales.BestPublisherForYearGenre');

	// 		collection.find({}).toArray(function(err,results){
	// 			if (err){
	// 				res.send(err);
	// 			} else if (results.length) {
	// 				res.send(results);
	// 				// res.render('sales',{
	// 				// 	"sales":results
	// 				// });
	// 			} else {
	// 				res.send('No documents found');
	// 			}
	// 			db.close();
	// 		});
	// 	}

});
});


module.exports = router;
