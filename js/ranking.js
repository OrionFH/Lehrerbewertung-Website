// JavaScript Document

var teachers = [];

function onLoad(){
	if(sessionStorage.getItem("password") == null){
		window.location.href = "index.php";
	}

	ajax({}, "top20", function(res){
		var response = JSON.parse(res);
		var ol = document.createElement('ol');

		document.getElementById('list').appendChild(ol);

		for(var i = 0; i < response.length; i++){
			teachers.push(response[i].vorname + " " + response[i].nachname);
			var li = document.createElement('li');
			ol.appendChild(li);
	
			var item = response[i].vorname + " " + response[i].nachname + '<div class="details"> (' + ((response[i].rating + 1).toFixed(2)) + " mit " + response[i].ratingCount + ' Kommentaren)</div>';
			li.innerHTML += "<button onClick='buttonClick(this)'>" + item + "</button>";
		}

		ol.innerHTML += "<br>Lehrer brauchen 3 oder mehr Kommentare, um in die Liste aufgenommen zu werden.";
	});

}

document.addEventListener("DOMContentLoaded", onLoad);

function buttonClick(a){
	var index = Array.from(a.parentNode.parentNode.children).indexOf(a.parentNode);

	sessionStorage.setItem("currentTeacher", teachers[index]);
	window.location.href = "overview.php?teacher=" + teachers[index];
}