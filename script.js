var input = document.getElementById('inputuser');
var button = document.getElementById('button');
var ul = document.querySelector("ul");
var btn = document.querySelector("btn")

button.addEventListener("click", function () {
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li);
		input.value = "";
	}
})
input.addEventListener("keypress", function (event) {
	if (input.value.length > 0 && event.which === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		ul.appendChild(btn);
		input.value = "";
	}
})

ul.addEventListener("click", function (task) {
	if (task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
})