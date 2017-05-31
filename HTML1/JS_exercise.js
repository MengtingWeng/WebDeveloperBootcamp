// alert("connected");
// var answer = prompt("are we there yet?");

// while (answer != "yes") {
// 	answer = prompt("are we there yet?");
// }

// alert("YAY, we made it!");
// 
// 

// var answer = prompt("are we there yet?");

// while (answer.indexOf("yes") === -1) {
// 	answer = prompt("are we there yet?");
// }
// alert("YAY, we made it!");

function isEven(num) {
	if(num%2 === 0) {
		return true;
	}
	return false;
}

function factorial(num) {
	var finalResult = 1;
	for(var i=1; i <= num; i++) {
		finalResult = finalResult * i;
	}
	return finalResult;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}