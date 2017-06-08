<?php
	session_start();
	if(isset($_SESSION['user']))
	{
			$title=$_GET['title'];
			$neirong=$_GET['neirong'];
			$name=$_SESSION['user'];
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
		    $sql ="insert into talk(name,title,say,time) values("."'".$name."'".","."'".$title."'".",'".$neirong."','".$time."')";
			$conn->query($sql);
		    $users=array(); 
		    echo $_SESSION['user'];
	}
	else
	{
		echo false;
	}
?>