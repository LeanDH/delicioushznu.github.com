<?php
			$num=$_GET['num'];
			$type=$_GET['type'];
			$build=$_GET['build'];
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		//$build=$_GET['build'];
    		$conn = new mysqli($servername, $username, $password, $database);

		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql = "select * from  food where food_id like '".$type."%' and place=".$build." order by good desc limit ".$num;
		    //echo $sql;
		    $result = $conn->query($sql);
		    $users=array(); 
		    $i=0; 
		    if ($result->num_rows > 0) {
			    while($row = $result->fetch_assoc()) {
			        $users[$i]=$row; 
			        $i++; 
			    }
			    echo json_encode(array('dataList'=>$users)); 
		    }

?>