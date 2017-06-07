<?php
	$way=$_GET["way"];
	function loaddish($temp,$time)
	{
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		$conn = new mysqli($servername, $username, $password, $database);

		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql = "select * from  `food` where place=".$temp." and food_id like '".$time."%' order by good desc limit 3";
		    $result = $conn->query($sql);
		    $users=array(); 
		    $i=0; 
		    if ($result->num_rows > 0) {
		        while($row = $result->fetch_assoc()) {
		            $users[$i]=$row; 
		            $i++; 
		        }
		    } else {
		        echo "0 results";
		    }
		    echo json_encode(array('dataList'=>$users)); 
		    $conn->close();
	}
    switch($way)
    {
    	case 1:
				session_start();
				if(isset($_SESSION['user']))
				{
					echo $_SESSION['user'];
				}
				else
				{
					echo false;
				}
				break;
		case 2: 
				loaddish(3,2);
				break;
		case 3:
			    loaddish(4,2);
				break;
		case 4:
			    loaddish(5,2);
				break;
		case 5: 
				loaddish(3,1);
				break;
		case 6:
			    loaddish(4,1);
				break;
		case 7:
			    loaddish(5,1);
				break;
		case 8: 
				loaddish(1,2);
				break;
		case 9: 
				loaddish(2,2);
				break;
		case 10: 
				loaddish(1,1);
				break;
		case 11: 
				loaddish(2,1);
				break;
		default:
             echo "No number between 1 and 3";
	}
?>
