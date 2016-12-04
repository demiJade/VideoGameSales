

var mapGenre = function(){
	var genre = this.Genre;
	var na_sales = this.NA_Sales;
	var eu_sales = this.EU_Sales;
	var jp_sales = this.JP_Sales;
	var global_sales = this.Global_Sales;
	var publisher = this.Publisher;
	emit({genre:genre},{na_sales:na_sales,eu_sales:eu_sales,jp_sales:jp_sales,global_sales:global_sales,publisher:publisher});
}

var reduceGenre = function(key, values){
	var total_na_sales = 0;
	var total_jp_sales = 0;
	var total_eu_sales = 0;
	var total_global_sales = 0;
	for (var i = 0; i < values.length; i++){
		total_na_sales += values[i].na_sales;
		total_eu_sales += values[i].eu_sales;
		total_jp_sales += values[i].jp_sales;
		total_global_sales += values[i].total_global_sales;
	}
	return {
		total_na_sales:total_na_sales,
		total_eu_sales:total_eu_sales,
		total_jp_sales:total_jp_sales,
		total_global_sales:total_global_sales
	}
}

var mapYear = function(){ 
	var year = this.Year;
	var genre = this.Genre;
	var na_sales = this.NA_Sales;
	var eu_sales = this.EU_Sales;
	var jp_sales = this.JP_Sales;
	var global_sales = this.Global_Sales;
	var publisher = this.Publisher;
	emit({year:year},{genre:genre,na_sales:na_sales,eu_sales:eu_sales,jp_sales:jp_sales, global_sales:global_sales, publisher:publisher});
}

var reduceYear = function(key,values){
	return {
		genres:values
	}
}

var reduceBestForYear = function(key, values){ //reduce the best selling genre for the year
	// for (var i = 0; i < values.length; i++){

	// }
	// var results = db.runCommand({
	// 	mapReduce: values,
	// 	map:mapGenre,
	// 	reduce:reduceGenre,
	// 	out:'sales.yearlyGenre'
	// });
	// var yearlyGenre = db.sales.yearlyGenre.find();
	// for (var i = 0; i < values.length; i++){

	// }
	// var maxIndex = 0;
	// for (var i = 1; i < yearlyGenre.length; i++){
	// 	if (yearlyGenre[i].value.global_sales > yearlyGenre[maxIndex].value.global_sales){
	// 		maxIndex = i;
	// 	}
	// }
	// var bestGenre = yearlyGenre[maxIndex].value.genre;
	// return {
	// 	genre:bestGenre;
	// }
	// if (values.genres == undefined){
	// 	return{
	// 		genre:this.value.genre;
	// 	}
	// } else {

		// });

		// var max = 0;
		// for (var i = 0; i < yearlyGenre.length; i++){
		// 	if (yearlyGenre[i].value.global_sales > yearlyGenre[max].value.global_sales){
		// 		max = i;
		// 	}
		// }
		// return {
		// 	genre:yearlyGenre[i].value.genre;
		// }
	// }
		
}


var mapYearlyGenre = function(){

	var genre;
	var na_sales;
	var eu_sales;
	var jp_sales;
	if (this.value.genres == undefined){
		emit({year:this._id,genre:this.value.genre},{na_sales:this.value.na_sales,eu_sales:this.value.eu_sales,jp_sales:this.value.jp_sales});
	} else {
		for (var i = 0; i < this.value.genres.length;i++){
			genre = this.value.genres[i].genre;
			na_sales = this.value.genres[i].na_sales;
			eu_sales = this.value.genres[i].eu_sales;
			jp_sales = this.value.genres[i].jp_sales;
			emit({year:this._id,genre:genre},{na_sales:na_sales,eu_sales:eu_sales,jp_sales:jp_sales});
		}
	}
	// for (var i = 0; i < this.value.genres.length;i++){
	// 	for (var j = 0; j < this[i].length;j++){
	// 		var genre = this[i].genres[j].genre;
	// 		var na_sales = this[i].genres[j].na_sales;
	// 		var eu_sales = this[i].genres[j].eu_sales;
	// 		var jp_sales = this[i].genres[j].jp_sales;
			
	// 	}
		// var genre = this[i].genres[i].genre;
		// var na_sales = this.value.genres[i].na_sales;
		// var eu_sales = this.value.genres[i].eu_sales;
		// var jp_sales = this.value.genres[i].jp_sales;
		// emit({genre:genre},{na_sales:na_sales,eu_sales:eu_sales,jp_sales:jp_sales});
	// }
	// for (var i = 0; i < this.value.values.length; i++){
	// 	na_sales += this.value.values[i].na_sales;
	// 	eu_sales += this.value.values[i].eu_sales;
	// 	jp_sales += this.value.values[i].jp_sales;
	// }

}

var reduceYearlyGenre = function(key, values){
	var total_na_sales = 0;
	var total_eu_sales = 0;
	var total_jp_sales = 0;
	for (var i = 0; i < values.length; i++){
		total_jp_sales += values[i].jp_sales;
		total_eu_sales += values[i].eu_sales;
		total_na_sales += values[i].na_sales;
	}
	return {total_jp_sales:total_jp_sales,total_na_sales:total_na_sales,total_eu_sales:total_eu_sales}
}

var mapYearGenre = function(){
	var year = this.Year;
	var genre = this.Genre;
	var na_sales = this.NA_Sales;
	var eu_sales = this.EU_Sales;
	var jp_sales = this.JP_Sales;
	var global_sales = this.Global_Sales;
	var publisher = this.Publisher;
	emit({year:year,genre:genre},{na_sales:na_sales,eu_sales:eu_sales,jp_sales:jp_sales, global_sales:global_sales, publisher:publisher});

}

var reduceYearGenre = function(key, values){
	return{
		games:values
	}
}

var mapYearGenrePublisher = function(){

	// var na_sales;
	// var eu_sales;
	// var jp_sales;
	// var publisher;
	// var global_sales;
	if (this.value.games == undefined){
		emit({
			year:this._id.year,
			genre:this._id.genre,
			publisher:this.value.publisher
		},{
			publisher:this.value.publisher,
			na_sales:this.value.na_sales,
			eu_sales:this.value.eu_sales,
			jp_sales:this.value.jp_sales,
			global_sales:this.value.global_sales
		})
	} else {
		for (var i = 0; i < this.value.games.length; i++){
			emit({
				year:this._id.year,
				genre:this._id.genre,
				publisher:this.value.games[i].publisher
			},{
				publisher:this.value.games[i].publisher,
				na_sales:this.value.games[i].na_sales,
				eu_sales:this.value.games[i].eu_sales,
				jp_sales:this.value.games[i].jp_sales,
				global_sales:this.value.games[i].global_sales
			})
		}
		
	}
}

var reduceYearGenrePublisher = function(key, values){
	var total_eu_sales = 0;
	var total_na_sales = 0;
	var total_jp_sales = 0;
	var total_global_sales = 0;
	for (var i = 0; i < values.length; i++){
		total_global_sales += values[i].global_sales;
		total_jp_sales += values[i].jp_sales;
		total_eu_sales += values[i].eu_sales;
		total_na_sales += values[i].na_sales;
	}
	return {
		publisher:key.publisher,
		total_na_sales:total_na_sales,
		total_eu_sales:total_eu_sales,
		total_jp_sales:total_jp_sales,
		total_global_sales:total_global_sales
	}
}

var mapBestForYearGenre = function(){
	
}

var reduceBestForYearGenre = function(key, values){

}