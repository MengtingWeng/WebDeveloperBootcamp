var targetNum = 4;

var guessNum = prompt("Guess a nmuber")
guessNum = Number(guessNum);

if(guessNum === targetNum) {
	alert("You are right!");
}
else if(guessNum > targetNum){
	alert("Too high, please try again");
}
else {
	alert("Too low, please try again");
}