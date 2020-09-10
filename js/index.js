// JavaScript Document

var subjectMap = new Map([
	['Deutsch', 'D'],
	['Geschichte', 'G'],
	['Sozialkunde', 'Sk'],
	['Ethik', 'Eth'],
	['Religionslehre', 'R'],
	['Sport', 'S'],
	['Wirtschaft &amp; Recht', 'WR'],
	['Englisch', 'E'],
	['Französisch', 'F'],
	['Kunst', 'Ku'],
	['Spanisch', 'Sp'],
	['Mathe', 'M'],
	['Musik', 'Mu'],
	['Informatik', 'Inf'],
	['Biologie', 'B'],
	['Chemie', 'C'],
	['Physik', 'Ph'],
	['Latein', 'L'],
	['Geographie', 'Geo'],
	['Psychologie', 'Psy'],
]);

function buttonClick(e){
	var cat = subjectMap.get(e.innerHTML);
	var load = document.getElementById("loadSubject");
	var overlay = document.getElementById("loadSubjectOverlay");

	ajax({category: cat}, "category", function(res){
		displayTeachers(res);
	}, null, load, overlay);
}

