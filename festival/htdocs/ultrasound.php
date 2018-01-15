<?php
	define('DB_HOST', 'localhost');
	define('DB_NAME', 'new_database');
	define('DB_USER', 'kejia');
	define('DB_PASS', 'kejia');

	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	$station_1=$_POST['station_1'];
	$station_2=$_POST['station_2'];
	$station_3=$_POST['station_3'];
	$station_4=$_POST['station_4'];

	$query = "INSERT INTO `ultrasound` (`station_1`,`station_2`,`station_3`,`station_4`) VALUES ('$station_1','$station_2','$station_3','$station_4')";
	$conn->query($query);
	exit();
?>