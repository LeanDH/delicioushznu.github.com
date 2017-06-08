<?php
	session_start();
	//isset($_SESSION['user']);
	if(isset($_SESSION['user']))
	{
			$father=$_GET['father'];
			//$father=2;
		    $say=$_GET['res'];
			//$say="SSSSS";
			$name=$_SESSION['user'];
			//$name="2015210405066";
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		date_default_timezone_set('PRC');
            $time=date("Y-m-d H:i:s");
    		$conn = new mysqli($servername, $username, $password, $database);
		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql ="insert into ans(name,say,father,time) values("."'".$name."'".","."'".$say."'".",".$father.",'".$time."')";
			echo $name;
			$conn->query($sql);
		    $users=array(); 
	}
	else
	{
		echo false;
	}
?>