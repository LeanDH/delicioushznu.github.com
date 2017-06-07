
<?php 
			$food_id=$_GET['food_id'];
			//$food_id="2_001";
			$servername ="localhost";
		    $username    ="root";
		    $database     ="web";
		    $conn = new mysqli($servername, $username, "123456", $database);
		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql = "select * from  `food` where food_id="."'".$food_id."'";
		    $result = $conn->query($sql); 
		    $users=array(); 
		    $i=0; 
		    if($result->num_rows>0)
		    {
		    	while($row = $result->fetch_assoc())
		    	{
		    		$users[$i]=$row; 
		            $i++; 
		    		break;
		    	}
		    	echo json_encode(array('dataList'=>$users)); 
		    }
		    else
		    {
		    	echo false;
		    }
?>