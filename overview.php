<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script src="js/overview.js?v=5" type="text/javascript"></script>
<link rel = "stylesheet" type = "text/css" href = "css/overview.css"/>
</head>

<body>
	<?php
		require("nav.php");
	?>
	
	<div id="toolbar">
		<h1 id="teacher">Undefined</h1>
		<a onclick="window.location='create.php'+window.location.search;"><button id="create">Verfassen</button></a>
	</div>
	
	<div id="ratingsContainer">
		<div id="loadSubjectOverlay" class="overlayBlack"></div>
		<div id="loadSubject" class="loader"></div>
	</div>
</body>
</html>
