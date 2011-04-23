---
layout: post
title: jQuery quickstart
---
 
AJAX is a pain if you don't know Javascript or PHP. Fortunately, there's [jQuery](http://jquery.com/). It's pretty much the easiest way to get started. Here are a few handy notes.

Select element ids from the HTML page in jQuery by using $('#theIdIsHere').functionName(...
You need to hash mark in front of the name for ids. If you are selecting a class, you don't.

- - -
This is how buttons work. If jquery click events won't trigger, remember to double check that you're using the document ready function.

	<html><head>
	<script type="text/javascript" src="jquery.js"></script> 
	<script type="text/javascript">
	$(document).ready(function() {
		$('#my-button').click(function() {
				alert("Yay!");
		});
	});
	</script></head><body>

	<input type="button" id="my-button" value="Click me!" />
	</body></html>

- - - 
This is how you recieve JSON from the server (server -> CLIENT)

	$("#hist_button").click(function() {
		$.getJSON(loadUrl,
		function(data) {
		history_id = data.foo;
		alert(history_id);
		});
	});`
	
- - -
This is how you send JSON from the server (SERVER -> client)

	<?php
		$data = array('history_id' => $x, 'html' => "foo");
		echo json_encode($data);
	?>

- - -
This is how you send JSON to the server and get the response (server <- CLIENT)
All value strings must be in double quotes. Don't enclose keys in quotes.

	$("#hist_button").click(function() {
		$.getJSON(loadUrl, {key: "value"},
		function(data) {
			history_id = data.foo;
			alert(history_id);
		});
	});

- - -
This is how you recieve JSON on the server (SERVER <- client)

	<?php
		$historyId = $_POST['history_id'];
		$x = $x + 1;
		$data = array('next_history_id' => $x, 'html' => "foo");
		echo json_encode($data);
	?>

- - -
Firebug (preferably the Firefox version; it has the most features) is the best thing ever for debugging this stuff. Right click on the extension icon in status bar and enable all panels. Now you can watch the posts and responses in the console panel.
