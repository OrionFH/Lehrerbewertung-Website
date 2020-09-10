// JavaScript Document

function ajax(dataJSON, request, callbackSuccess, callbackError = null, ...loadingElement){
	loadingElement.forEach(element => {
		element.style.display = "block";
	});

	dataJSON.password = sessionStorage.getItem('password');
	if(callbackError == null) callbackError = function(xhr){
		if(xhr.responseText == '"BadRequest: Password not entered"'){
			window.location.href = "login.php";
		}
		else {
			alert(xhr.responseText);
		}
	}
	$.ajax({
		url: "https://lehrerbewertung.org:43253/" + request,
		data: dataJSON,
		success: callbackSuccess,
		error: callbackError,
		dataType: "text",
		accepts: { text: 'text/plain' },
		converters: { 'text text': function(result) { return result;} },
		method: "POST",
		complete: function(){
			loadingElement.forEach(element => {
				element.style.display = "none";
			});
		}
	});
}

function isMod(callback){
	ajax({}, "isMod", function(result){
		if(result == "Is mod"){
			callback(true);
		}
		else {
			callback(false);
		}
	})
	
}

function mouseUp(e){
	var x = document.getElementById("dropdown");

	if (x.style.opacity == 1) {
		if(x != e.target && e.target.id != "menuButton" && e.target.className != "fa fa-bars fa-lg"){
			openNavMenu();
		}
	}
}

function checkMessages(callback){
	ajax({}, "getMessageCount", function(result){
		if(parseInt(result) > 0){
			callback(true);
		}
		else {
			callback(false);
		}
	});
}

document.addEventListener("DOMContentLoaded", function(){
	if(localStorage.length > 0 && sessionStorage.length == 0){
		sessionStorage.setItem('jahrgangsstufe', localStorage.getItem("jahrgangsstufe"));
		sessionStorage.setItem('nick', localStorage.getItem("nick"));
		sessionStorage.setItem('password', localStorage.getItem("password"));
	}
	
	function hitBtn(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			document.getElementById("searchButton").click();
		}
	}

	var input = document.getElementById("searchBar");
	input.addEventListener("keyup", hitBtn);

	var logout = document.getElementById("logout");
	if(sessionStorage.length == 0){
		logout.innerHTML = "Login";
	}

	isMod(function(mod){
		if(mod){
			var modOnly = document.getElementsByClassName("modOnly");
			for(var i = 0; i < modOnly.length; i++){
				modOnly[i].style.display = "block";
			}
		}
	});

	checkMessages(function(newMessages){
		if(newMessages){
			document.getElementById("messageButton").style.color = "red";
		}
		else {
			document.getElementById("messageButton").style.color = "white";
		}
	});
});

window.onmouseup = mouseUp;

function displayTeachers(teachers){
	sessionStorage.setItem("teachers", teachers);
	window.location.href = "teachers.php";
}

function searchFunc() {
	var string = document.getElementById("searchBar").value;
	if(string != ""){
		ajax({searchItem: string}, "search", function(result){
			if(result == "empty"){
				alert("Keinen Lehrer mit diesem Namen gefunden");
				return;
			}
			
			displayTeachers(result);
		});
	}
}

function openNavMenu() {
	var x = document.getElementById("dropdown");
	if (x.style.opacity == 1) {
		x.style.opacity = 0;
		setTimeout(function(){
			x.style.display = "none";
		}, 100);
	} else {
		x.style.display = "inline";
		setTimeout(function(){
			x.style.opacity = 1;
		}, 5);
	}
}

function logout(){
	if(sessionStorage.length == 0){
		window.location.href = "login.php";
	}
	else{
		window.location.href = "index.php";
		sessionStorage.clear();
		localStorage.clear();
	}
}
