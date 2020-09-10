// JavaScript Document

function isCreator(review, callback){
    ajax({reviewID: review.id}, "isCreator", function(res){
        if(res == "Success"){
            callback(true);
        }
        else {
            callback(false);
        }
    });
}

function loadAnswers(review, callback) {
    ajax({reviewID: review.id}, "getAnswers", function(res){
        var answers = JSON.parse(res);
        var answersContainer = document.getElementById("answersContainer");
        answersContainer.innerHTML = "";
        var html = "";
        for(var i = 0; i < answers.length; i++){
            html += '<div class="answer">\n<p class="creator">' + answers[i].nick;
            html += '</p>\n<p class="text">\n' + answers[i].answer.replace(/;/g, ",");
            html += '\n</p>';
            if(answers[i].nick == sessionStorage.getItem("nick")){
                html += '<a href="#" class="deleteAnswer"><i class="fa fa-trash"></i></a>\n';
            }
            html += '</div>';
        }
        answersContainer.innerHTML = html;

        for(var i = 0; i < answers.length; i++){
            answersContainer.children[i].setAttribute("id", answers[i].id.toString(10));
        }

        callback();
    });
}

function loadReview(callback){
    var searchParams = new URLSearchParams(window.location.search);
    
    ajax({reviewID: searchParams.get("id")}, "review", function(response){
        var res =  JSON.parse(response);
            
        var review = {
            id: res.id,
            upvotes: res.upvotes,
            review: res.review.replace(/;/g, ","),
            grademap: JSON.parse(res.grademap.replace(/;/g, ",")),
            nick: res.nick
        };

        document.getElementById("teacher").innerHTML = res.vorname + " " + res.nachname;
        
        callback(review);
    });
    
}

function onLoad(){
    //Trigger load animation
	var load = document.getElementById("loadSubject");
	var overlay = document.getElementById("loadSubjectOverlay");
	load.style.display = "block";
	overlay.style.display = "block";
    loadReview(function(review){
        var creator = review.nick;
        document.getElementById("creator").innerHTML = creator;

        var containers = document.getElementsByClassName("star-container");
        for(var i = 0; i < containers.length; i++){
            var grade = parseInt(review.grademap[i][1]);
            var html = "";
            for(var b = 0; b < grade + 1; b++){
                html += '<span class="fa fa-star checked"></span> \n';
            }
            for(var b = 0; b < 4 - grade; b++){
                html += '<span class="fa fa-star"></span> \n';
            }
            containers[i].innerHTML = html;
        }

        document.getElementById("text").innerHTML = review.review;
        //Stop load animation
        load.style.display = "none";
	    overlay.style.display = "none";

        loadAnswers(review, function() {
            var deleteBtns = document.getElementsByClassName("deleteAnswer");
            for(var i = 0; i < deleteBtns.length; i++){
                deleteBtns[i].onclick = function(evt) {
                    var id = evt.target.parentElement.parentElement.getAttribute("id");

                    ajax({answerID: id}, "deleteAnswer", function(res){
                        window.location.reload();
                    });
                }
            }
        });

        var deleteBtn = document.getElementById("delete");
        isMod(function(isMod){
            if(isMod){
                deleteBtn.style.display = "block";
            }
        });
        isCreator(review, function(isCreator){
            if(isCreator){
                deleteBtn.style.display = "block";
            }
        });

        deleteBtn.onclick = function() {
            if(!window.confirm("Bist du sicher?")) return;

            ajax({reviewID: review.id}, "delete", function(res){
                window.history.back();
            });
        }

        document.getElementById("submitComment").onclick = function() {
            var text = document.getElementById("comment").value;
        
            ajax({answer: text, reviewID: review.id}, "addAnswer", function(res){
                window.location.reload();
            });
        }
    });

}

document.addEventListener("DOMContentLoaded", onLoad);