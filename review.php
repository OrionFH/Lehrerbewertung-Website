<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script src="js/review.js?v=5" type="text/javascript"></script>
<link rel = "stylesheet" type = "text/css" href = "css/review.css"/>
</head>

<body>
	<?php
		require("nav.php");
	?>
	
	<div id="toolbar">
                <h1 id="teacher">Undefined</h1>
                <a id="creator" href="#">Ersteller</a>
	</div>
	
	<div id="ratingsContainer">
	        <div class="rating">
                    <h3>Unterrichtsgestaltung: </h3>
                    <div class="star-container">
                            <span class="fa fa-star fa-lg checked"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                    </div>
                </div>
                <div class="rating">
                    <h3>Erklärfähigkeit: </h3>
                    <div class="star-container">
                            <span class="fa fa-star fa-lg checked"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                    </div>
                </div>
                <div class="rating">
                    <h3>Sympathie: </h3>
                    <div class="star-container">
                            <span class="fa fa-star fa-lg checked"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                            <span class="fa fa-star fa-lg"></span>
                    </div>
                </div>
                <br>
	        <div id="text">
	        </div>
                <button id="delete">Löschen</button>

                <div id="loadSubjectOverlay" class="overlayBlack"></div>
		<div id="loadSubject" class="loader"></div>
        </div>
        <textarea id="comment" placeholder="Kommentieren..."></textarea>
        <button id="submitComment">Antworten</button>
        <div id="answersContainer">
                
        </div>
        
        <div id="creatorModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <p id="creatorInModal">creator</p>
                  <button id="addContact">Zu Kontakten hinzufügen</button>
                </div>
      </div>
</body>
</html>
