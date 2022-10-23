var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");
var list = [document.querySelectorAll("li")];

var booleanToStopDoneStyle = new Boolean(false);

addingClassName();

// adding a class name to every element in the list
function addingClassName () {
	for (i=0; i < li.length; i++) {
		addClassNameToNewTextNode() 
}
}

function addClassNameToNewTextNode () {
		var deleteButton = document.getElementsByClassName("delete");
		var arrayIndex = li.length-1;
		deleteButton[arrayIndex].classList.add("Delete");
		// console.log(deleteButton);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = li.appendChild(document.createElement("button"));
	button.appendChild(document.createTextNode("Delete"));
	button.classList.add("delete");
    button.addEventListener("click", deleteElement);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}

}

function deleteElement(element) {
	    var path = element.path[1];
	    path.remove();
}

function toggleDoneClass(element) {
	var path = element.path[0];
	path.classList.add("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDoneClass);

for (i=0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", deleteElement);
}
