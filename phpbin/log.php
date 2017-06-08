
<?php 
			$name=$_GET["name"];
			$password=$_GET["password"];
			$servername ="localhost";
		    $username    ="root";
		    $database     ="web";
		    $conn = new mysqli($servername, $username, "123456", $database);
		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql = "select * from  `people` where name=".$name." and password="."$password";
		    $result = $conn->query($sql); 
		    if($result->num_rows>0)
		    {
		    	session_start();
		    	$_SESSION['user']=$name;
		    	echo true;
		    }
		    else
		    {
		    	echo false;
		    }
?>