# VideoGameSales

To map out the publisher with the best sales for each genre per year, run the following:


db.runCommand({
	mapReduce:’sales’,
	map:mapYearGenrePublisher,
	reduce:reduceYearGenrePublisher,
	out:’sales.YearGenrePublisher’
});


db.runCommand({
	mapReduce:’sales.YearGenrePublisher’,
	map:mapBestPublisherForYearGenre,
	reduce:reduceBestPublisherForYearGenre,
	out:’sales.BestPublisher’
});
