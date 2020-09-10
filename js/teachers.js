// JavaScript Document

function onLoad(){
	if(sessionStorage.getItem("password") == null){
		window.location.href = "index.php";
	}

	var teachers = JSON.parse(sessionStorage.getItem("teachers"));

	var ul = document.createElement('ul');

	document.getElementById('list').appendChild(ul);

	teachers.forEach(function (item) {
		var li = document.createElement('li');
		ul.appendChild(li);

		li.innerHTML += "<button onClick='buttonClick(this)'>" + item + "</button>";
	});

}

document.addEventListener("DOMContentLoaded", onLoad);

function buttonClick(a){
	sessionStorage.setItem("currentTeacher", a.innerHTML);
	window.location.href = "overview.php?teacher=" + a.innerHTML;
}