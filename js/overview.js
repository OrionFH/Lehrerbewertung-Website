var reviews;

function displayReviews(reviews){
	var container = document.getElementById("ratingsContainer");
	var html = "";

	reviews.forEach(e => {
		html += '<div class="rating" onClick="more(this);"> \n';

		//Average all grades in all categories to display average grade
		var counter = 0;
		var average = 0;
		e.grademap.forEach(category => {
			average += parseInt(category[1], 10);
			counter++;
		});
		average = Math.round(average / counter);

		for(var i = 0; i < average + 1; i++){
			html += '<span class="fa fa-star checked"></span> \n';
		}
		for(var i = 0; i < 4 - average; i++){
			html += '<span class="fa fa-star"></span> \n';
		}

		html += '<div class="text"> \n';
		html += e.review + '  <a href="#">mehr</a> \n </div> \n </div>';
	});

	container.innerHTML = html;
}

function onLoad(){
	//Trigger load animation
	var load = document.getElementById("loadSubject");
	var overlay = document.getElementById("loadSubjectOverlay");
	load.style.display = "block";
	overlay.style.display = "block";

	var searchParams = new URLSearchParams(window.location.search);
	var currentTeacher = searchParams.get('teacher');
	var teacher = document.getElementById("teacher");
	if(currentTeacher){
		teacher.innerHTML = currentTeacher;
	}

	reviews = [];

	ajax({name: currentTeacher}, "reviews", function(res){
		if(res == "Nothing"){
			document.getElementById("ratingsContainer").innerHTML = "";
			return;
		}
		var parsed = JSON.parse(res);
		for(var i = 0; i < parsed.length; i++) {
			
			reviews.push({
				id: parsed[i].id,
				upvotes: parsed[i].upvotes,
				review: parsed[i].review.replace(/;/g, ","),
				grademap: JSON.parse(parsed[i].grademap.replace(/;/g, ",")),
				nick: parsed[i].nick
			});
			/*reviews.sort(function(a, b){
				return a.upvotes - b.upvotes;
			});*/
		}

		displayReviews(reviews);
	});
}

document.addEventListener("DOMContentLoaded", onLoad);

function more(e){
	var index = Array.from(e.parentNode.children).indexOf(e);
	var searchParams = new URLSearchParams(window.location.search);
	window.location.href = "review.php?id=" + reviews[index].id + "&teacher=" + searchParams.get('teacher');
}