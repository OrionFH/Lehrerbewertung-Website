<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script type="text/javascript" src="js/index.js?v=5"></script>
<link rel = "stylesheet" type = "text/css" href = "css/index.css"/>
</head>

<body>
	<?php
		require("nav.php");
	?>

	<div id="list-container">
		<ul>
			<li><button onClick="buttonClick(this);">Deutsch</button></li>
			<li><button onClick="buttonClick(this);">Mathe</button></li>
			<li><button onClick="buttonClick(this);">Englisch</button></li>
			<li><button onClick="buttonClick(this);">Geschichte</button></li>
			<li><button onClick="buttonClick(this);">Sozialkunde</button></li>
			<li><button onClick="buttonClick(this);">Ethik</button></li>
			<li><button onClick="buttonClick(this);">Religionslehre</button></li>
			<li><button onClick="buttonClick(this);">Sport</button></li>
			<li><button onClick="buttonClick(this);">Wirtschaft &amp; Recht</button></li>
			<li><button onClick="buttonClick(this);">Französisch</button></li>
			<li><button onClick="buttonClick(this);">Kunst</button></li>
			<li><button onClick="buttonClick(this);">Spanisch</button></li>
			<li><button onClick="buttonClick(this);">Musik</button></li>
			<li><button onClick="buttonClick(this);">Informatik</button></li>
			<li><button onClick="buttonClick(this);">Biologie</button></li>
			<li><button onClick="buttonClick(this);">Chemie</button></li>
			<li><button onClick="buttonClick(this);">Physik</button></li>
			<li><button onClick="buttonClick(this);">Latein</button></li>
			<li><button onClick="buttonClick(this);">Geographie</button></li>
			<li><button onClick="buttonClick(this);">Psychologie</button></li>
		</ul>
		<div id="loadSubjectOverlay" class="overlayBlack"></div>
		<div id="loadSubject" class="loader"></div>
	</div>
	
	<div id="teachers">
	
	</div>
	
</body>
</html>
