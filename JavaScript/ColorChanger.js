var button = document.getElementsByTagName("button");
var isPurple = false;

// button[0].addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	} else {
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
	
// });
//
// 
//  THe second way to make toggle 
button[0].addEventListener("click", function(){
	document.body.classList.toggle("purple");
});