<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'mostro@mostro.com.mx ';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This is the form that was just submitted:
	Name:  $_POST[name]
	Apellido :$_POST[apellido]
	E-Mail: $_POST[email]
	Message: $_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	// finally, send the message
	mail($youremail, 'Contact Form', $body, $headers );

}

// otherwise, let the spammer think that they got their message through

?>
<!DOCTYPE HTML>
<html>
<head>

<title>GRACIAS!</title>
<link rel="stylesheet" href="css/foundation.css">
</head>
<body>
<div id="firstModal" class="reveal-modal" data-reveal>
<h1>GRACIAS</h1>
<p>Nos podremos en contacto en cualquier momento.</p>
</div>
</body>
</html>