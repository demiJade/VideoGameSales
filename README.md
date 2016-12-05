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



put what our data is, what our app is, how we did our map reduce, and everything


The aim of this project is to show how each game publisher fares in the genres they publish games in and in the year these games are released. The visual application will show which game publisher earned the most in the year the game was released based on the genre of the game. The x-axis represents the time, while the y-axis represents the sales. The circles represent the genres, and, when hovered over, they will show the highest-selling publisher of that genre in that year. 

That being said, the data used in this project is about video game sales in one year. The CSV, entitled "vgsalestiny", lists down the name of the game, the platform it should be played on, the year it was released, its genre, and its publisher. In addition to this, it also lists down its sales in North America (NA), Europe (EU), and Japan (JP). The sales coming from the rest of the world is listed under "Other Sales". All of these sales are then added together and listed underneath the header "Global Sales". 

In order to accomplish this project, the function of map-reduce was used to filter and combine the elements in the data file. The databased utilized is a MongoDB database named "mydb", which is then connected to Node.js in order to make it into a visual application through Jade. 

As mentioned, the map-reduce function is to used to filter and combine the elements, and this is first applied in filtering out the genres of the games listed in the file as well as their sales, so as to be able to categorize the games and sales for each publisher. After this, the sales of the categorized games for each publisher are added together using the reduce function. The output of this will show the game publisher, the genres they have produced games in, and the total sales they have garnered. 

However, because the project aims to shows sales with respect to the year the game was released, another map-reduce function is needed. The map function in this phase will then filter out the year the games, which are already categorized by genre, were released as well as their sales and publisher. After this, the reduce function is applied to combine the sales of the games of a certain publisher in a certain genre with respect to the year it was published in. The output of this will show the game publisher, the genres they have produced games in, and the total sales they have garnered for these genres based on the year the game was released. The difference with the two outputs is that the first one lists the total sales based only on the genre and the game publisher, while the latter one lists the total sales based on the genre, the game publisher, and the year the game was released. 

After all of these are done, the database is then replicated in order to have backups, in case of system failure. This is done through the replication process in MongoDB. In total and across machines, five replications are made. 
