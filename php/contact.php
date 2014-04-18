<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$from = "From: PShilling Server";
$to = "p.shilling@ashnola.co.uk";
$subject = "Server Contact";
$body = "From: $name\n E-Mail: $email\n Message:\n $message";
if (mail ($to, $subject, $body, $from)) {
	echo "<link href='../css/basic.css' rel='stylesheet'>";
	echo "<div id='title'><h2>Thank you for your feedback</h2></div>";
} else {
	echo "<link href='../../error/error.css' rel='stylesheet'>";
	echo "<h2>Something went wrong please try again later!!</h2>";
	echo "<p>If problem persists please contact me via the site email</p>"
}
?>