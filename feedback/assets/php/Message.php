<?php
	header("Content-Type:text/html; charset=utf-8");
	include 'db.php';
	echo "hi";
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	echo "hi2";
	$message = $conn->real_escape_string($_POST['message']);
	$sql = "SET NAMES 'UTF8'";
	$conn->query($sql);
	$sql = "INSERT INTO `contactus` (`message`) VALUES ('$message')";
	$conn->query($sql);
	exit();
	
?>