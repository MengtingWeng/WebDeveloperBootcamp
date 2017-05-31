var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var numInput = document.querySelector("input");
var winnerScore = document.querySelector("#winnerScore");
var p1Result = 0;
var p2Result = 0;
var highestScore = 5;
var gameOver = false;


p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Result ++;
		if(p1Result === highestScore) {
			gameOver = true;
			p1Score.classList.add("winner");
		}
	}
	p1Score.textContent = p1Result;
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Result++;
		if(p2Result === highestScore) {
			gameOver = true;
			p2Score.classList.add("winner");
		}
	}
	p2Score.textContent = p2Result;
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset() {
	p1Result = 0;
	p1Score.textContent = p1Result;
	p1Score.classList.remove("winner");
	p2Result = 0;
	p2Score.textContent = p2Result;
	p2Score.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	reset();
	winnerScore.textContent = numInput.value;
	highestScore = Number (numInput.value);
	
});

