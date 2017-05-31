// function printReverse(array) {
// 	var reverseArray = [];
// 	for(var i=array.length-1; i>=0; i--) {
// 		reverseArray.push(array[i]);
// 	}
// 	console.log(reverseArray);
// }

// function isUniform(array) {
// 	var first = array[0];
// 	for(var i=1; i<array.length;i++) {
// 		if(first !== array[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function sumArray(array) {
// 	var sum = 1;
// 	array.forEach(function (item) {
// 		sum = sum*item;
// 	})
// 	console.log(sum);
// }

// function max(array) {
// 	var max = array[0];
// 	array.forEach(function (item) {
// 		if(max < item) {
// 			max = item;
// 		}
// 	})
// 	console.log(max);
// }
// 
var movieDB = [];
movieDB = [
	{
		movieName: "In Bruges",
	 	rating: 5,
	 	hasWatched: true
	},

	{
		movieName: "Frozen",
	 	rating: 4.5,
	 	hasWatched: false
	},

	{
		movieName: "Mad Max Fury Road",
	 	rating: 5,
	 	hasWatched: true
	},

	{
		movieName: "Les Miserables",
	 	rating: 3.5,
	 	hasWatched: false
	}
] 

movieDB.forEach(function(element) {
	if(element.hasWatched) {
		console.log("You have watched \"" + element.movieName + "\"" + " - " + element.rating + " stars");	
	} else {
		console.log("You have not seen \"" + element.movieName + "\"" + " - " + element.rating + " stars");	
	}
});

console.log("Use your own movies!");