function onLoad(){
	//Trigger load animation
	var load = document.getElementById("loadSubject");
	var overlay = document.getElementById("loadSubjectOverlay");
	load.style.display = "block";
	overlay.style.display = "block";

	ajax({}, "getMessages", function(res){
		var parsed = JSON.parse(res);
		var html = "";

		var container = document.getElementById("ratingsContainer");

		parsed.forEach(e => {
			html += '<div class="rating" onClick="messageClick(' + "'" + e.link + "'" + ', ' + e.id + ');"> \n';

			html += '<div class="text"> \n';
			html += e.message + '  <a href="#">mehr</a> \n </div> \n </div>';
		});

		if(parsed.length == 0){
			html = "<div style='text-align: center;	padding-top: 30px;'>Keine Benachrichtigungen</div>";
		}
		
		container.innerHTML = html;
	});
}

document.addEventListener("DOMContentLoaded", onLoad);

function messageClick(url, id){
	ajax({messageID: id}, "messageRead", function(result){
		window.location.href = url;
	});
}