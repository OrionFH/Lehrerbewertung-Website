<!doctype html>
<html>
<head>
<?php
	require("header.php");
?>
<script type="text/javascript" src="js/create.js?v=5"></script>
<link rel = "stylesheet" type = "text/css" href = "css/create.css" />
</head>

<body>
	<?php
		require("nav.php");
	?>
        
        <div id="ratings-container">
                <div class="rating">
                        <h3>Unterrichtsgestaltung: </h3>
                        <div class="star-container" style="cursor: pointer" onmouseout="mouseOut(this)">
                                <span class="fa fa-star fa-lg checked" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                        </div>
                </div>
			
			<div class="rating">
                        <h3>Erklärfähigkeit: </h3>
                        <div class="star-container" style="cursor: pointer" onmouseout="mouseOut(this)">
                                <span class="fa fa-star fa-lg checked" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                        </div>
                </div>
			
			<div class="rating">
                        <h3>Sympathie: </h3>
                        <div class="star-container" style="cursor: pointer" onmouseout="mouseOut(this)">
                                <span class="fa fa-star fa-lg checked" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                                <span class="fa fa-star fa-lg" onmouseover="mouseOver(this)" onclick="starClick(this)"></span>
                        </div>
            </div>
			
			<div class="rating">
                        <h3>Kommentar: </h3> <br>
                        <textarea id="comment"></textarea>
            </div>
			
			<button onclick="submit();">Submit</button>
        </div>
</body>
</html>
