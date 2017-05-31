var todo = ["do homework"];
var input = prompt("What would you like to do?")

while (input !== "quit") {
	if (input === "new") {
		addNewTodo();
	} else if (input === "list") {
		listTodo();
	} else if (input === "delete") {
		deleteTodo();
	}

	input = prompt("What would you like to do?")
}

console.log("OK, you quit the app");

function addNewTodo(){	
	var newTodo = prompt("Please enter new todo");
	todo.push(newTodo);
	console.log("finish add todo");
}

function listTodo() {
	console.log("***********");
	todo.forEach(function(todoList, i) {
		console.log(i + ": " + todoList);
	})  
	console.log("***********");
}

function deleteTodo() {
	var index = prompt("Please enter the index to delete todo");
	todo.splice(index, 1);
	console.log("finish delet todo");
}