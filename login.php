<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script type="text/javascript" src="js/login.js?v=5"></script>
<link rel = "stylesheet" type = "text/css" href = "css/login.css"/>
</head>

<body>
	<input type="password" placeholder="Password" id="password" class="text">

	<div id="staylogged">
    	<input type="checkbox" class="checkbox" value="staylogged" id="stayloggedin">
   		<label>Angemeldet bleiben</label>
	</div>
		
	<button id="login" onClick="login();">Anmelden</button>
</body>
</html>
