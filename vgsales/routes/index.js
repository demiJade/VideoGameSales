var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sales', function(req,res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/mydb';
	MongoClient.connect(url,function(err,db){
		if (err){
			console.log("Unable to connect",err);
		} else {
			console.log('Connection established');
			var collection = db.collection('sales.BestPublisher');

			collection.find({}).toArray(function(err,results){
				if (err){
					res.send(err);
				} else if (results.length) {
					res.render('sales',{
						"sales":results
					});
				} else {
					res.send('No documents found');
				}
				db.close();
			});
		}
	});
});



module.exports = router;
