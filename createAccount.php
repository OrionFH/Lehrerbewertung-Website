<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script type="text/javascript" src="js/createAccount.js?v=5"></script>
<link rel = "stylesheet" type = "text/css" href = "css/createAccount.css"/>
</head>

<body>
	<?php
		require("nav.php");
	?>

	<div id="inputs">
		<input type="text" placeholder="Vorname" id="vorname" class="text">
		<input type="text" placeholder="Nachname" id="nachname" class="text">
		<input type="number" placeholder="Jahrgangsstufe" id="jahrgangsstufe" class="text">
	</div>
		
	<button id="createAccount" onClick="createAccount();">Account erstellen</button>

	<div id="output">
		<input type="text" placeholder="Generiertes Passwort" id="password" class="text" readonly>
		<button id="copy" onClick="copy();">Kopieren</button>
	</div>
	
	<div id="createAccountOverlay" class="overlayBlack"></div>
</body>
</html>
