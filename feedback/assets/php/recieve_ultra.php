<?php 
	define('DB_HOST', '127.0.0.1');
	define('DB_NAME', 'new_database');
	define('DB_USER', 'kejia');
	define('DB_PASS', 'kejia');


	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);	
	$sql = "SET NAMES 'UTF8'";
	$conn->query($sql);
	$sql = "SELECT * FROM `ultrasound` ORDER BY `id` DESC";
	$result = $conn->query($sql);
	$request_recieve = array();
	$row = $result -> fetch_array(MYSQLI_BOTH);	
	array_push($request_recieve, array('station_1'=>$row['station_1'],'station_2'=>$row['station_2'],'station_3'=>$row['station_3'],'station_4'=>$row['station_4']));
	echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE);
?>