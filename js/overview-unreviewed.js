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
		var shortened = e.review;
		if(e.review.length > 400) shortened = e.review.substring(0,400) + "...";
		html += shortened + '  <a href="#">mehr</a> \n </div> \n </div>';
	});

	container.innerHTML = html;
}

function onLoad(){
	reviews = [];

	ajax({}, "reviewsNotReviewed", function(res){
		var json = JSON.parse(res);

		json.forEach(e => {
			reviews.push({
				id: e.id,
				upvotes: e.upvotes,
				review: e.review.replace(/;/g, ","),
				grademap: JSON.parse(e.grademap.replace(/;/g, ",")),
				nick: e.nick,
				name: e.vorname + " " + e.nachname
			});
		});

		displayReviews(reviews);
	});
}

document.addEventListener("DOMContentLoaded", onLoad);

function more(e){
	var index = Array.from(e.parentNode.children).indexOf(e);

	ajax({reviewID: reviews[index].id}, "setReviewed", function(res){
		var index = Array.from(e.parentNode.children).indexOf(e);
		var searchParams = new URLSearchParams(window.location.search);
		window.location.href = "review.php?id=" + reviews[index].id + "&teacher=" + searchParams.get('teacher');
	});
}