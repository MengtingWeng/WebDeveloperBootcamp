// alert("connected");
// var answer = prompt("are we there yet?");

// while (answer != "yes") {
// 	answer = prompt("are we there yet?");
// }

// alert("YAY, we made it!");
// 
// 

var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1) {
	answer = prompt("are we there yet?");
}
alert("YAY, we made it!");
