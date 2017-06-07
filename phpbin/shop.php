
<?php 
		session_start();
		if(isset($_SESSION['user']))
		{
			$num=$_GET['num'];
			//$num=-1;
			$food_id=$_GET['food_id'];
			//$food_id="2_001";
			$name=$_SESSION['user'];
			//$name="2015210405066";
			$hot=-1;
			$size=-1;
			if(isset($_GET['taste']))
			{
				$hot=$_GET['taste'];
			}
			if(isset($_GET['size']))
			{
				$size=$_GET['size'];
			}

			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		$conn = new mysqli($servername, $username, $password, $database);

		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    if($num==-1000){
		    		$sql = "delete from  buy where name="."'".$name."'"." and food_id="."'".$food_id."'"." and taste=".$hot." and size=".$size;
		    		$result = $conn->query($sql);
		    }
		    else{
			    $sql = "select * from  buy where name="."'".$name."'"." and food_id="."'".$food_id."'"." and taste=".$hot." and size=".$size;
			    //echo $sql;
			    $result = $conn->query($sql);
			    $users=array(); 
			    $i=0; 
			    if ($result->num_rows > 0) {
			       while($row=$result->fetch_assoc())
			       {
			       		$num=$num+$row['num'];
			       		break;
			       }
			       $sql = "update buy
	                       SET num=".$num." where name="."'".$name."'"." and food_id='".$food_id."'"." and taste=".$hot." and size=".$size;
	               echo $num;
	               $conn->query($sql);
			    } else {
			        $sql ="insert into `buy` values("."'".$name."'".","."'".$food_id."'".",".$num.",".$hot.",".$size.")";
			        echo $sql;
			        $conn->query($sql);
			    }
			    $conn->close();
			}
		}
		else
		{
			echo false;
		}
?>