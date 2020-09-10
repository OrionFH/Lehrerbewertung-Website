// JavaScript Document

function login(){
	var password = document.getElementById("password");
	sessionStorage.setItem('password', password.value);

	ajax({}, "login", function(res){
		var response = res;

		if(response == "No nick"){
			var prompt = window.prompt("Bitte gib einen Nicknamen ein. Dieser wird öffentlich angezeigt werden. Danach bitte erneut anmelden.", "Nick");
			if(prompt == null) return;
			if(prompt.includes(',')) alert("Es sind keine Kommas im Nick erlaubt.");

			ajax({nick: prompt}, "nick", function(res){
				login();
			}, function(xhr){
				alert(xhr.responseText);
			});
		}

		var parsed = JSON.parse(response);
		sessionStorage.setItem('jahrgangsstufe', parsed.jahrgansstufe);
		sessionStorage.setItem('nick', parsed.nick);
		sessionStorage.setItem('password', password.value);
		
		if(document.getElementById("stayloggedin").checked){
			localStorage.setItem('jahrgangsstufe', parsed.jahrgansstufe);
			localStorage.setItem('nick', parsed.nick);
			localStorage.setItem('password', password.value);
		}
		else {
			localStorage.clear();
		}
		
		window.location.href = "index.php";
	})
}

document.addEventListener("DOMContentLoaded", function(){
	function hitBtn(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("login").click();
		}
	}
	
	var input2 = document.getElementById("password");
	input2.addEventListener("keyup", hitBtn);
});
