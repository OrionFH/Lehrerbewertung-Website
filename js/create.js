// JavaScript Document

var map = new Map([["Unterrichtsgestaltung: ", 0], ["Erklärfähigkeit: ", 0], ["Sympathie: ", 0]]);

function mouseOver(e){}
function mouseOut(e){}

function submit(){
    var searchParams = new URLSearchParams(window.location.search);
	var currentTeacher = searchParams.get('teacher');
    var noComment = "";
    var comment = document.getElementById("comment").value.replace(/,/g, ';');
    if(comment.length == 0){
        noComment = "Du hast KEINEN Kommentar geschrieben. Bitte überlege, ob du nicht etwas schreiben willst. "
    }
    if(!confirm(noComment + "Kommentar über " + currentTeacher + " wird gepostet.")){
        return;
    }
    
    var stringified = JSON.stringify([...map]);

    ajax({grademap: stringified, review: comment, name: currentTeacher}, "create", function(res){
        alert("Review erfolgreich erfasst");
        window.history.back();
    });
}

function starClick(e){
    var children = e.parentElement.children;
    var n;

    for(var i = 0; i < children.length; i++){
        if(children[i] == e){
            n = i;
            break;
        }
    }

    for(var i = 1; i <= n; i++){
        children[i].className = "fa fa-star fa-lg checked";
    }

    for(var i = n + 1; i < 5; i++){
        children[i].className = "fa fa-star fa-lg";
    }

    map.set(e.parentElement.parentElement.children[0].innerHTML, n);
}