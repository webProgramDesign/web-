<?php
	include 'db.php'; 
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	echo "hi1";
	$name = $conn->real_escape_string($_POST['name']);
	$email = $conn->real_escape_string($_POST['email']);
	$message = $conn->real_escape_string($_POST['message']);
	$sql = "INSERT INTO `contactus` (`name`, `email`, `message`) VALUES ('$name', '$email', '$message')";
	$conn->query($sql);
	exit();
	
?>