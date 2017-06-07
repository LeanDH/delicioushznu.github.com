
<?php 
		session_start();
		if(isset($_SESSION['user']))
		{
			$name=$_SESSION['user'];
			$servername ="localhost";
    		$username    ="root";
   		    $password     ="123456";
    		$database     ="web";
    		$build=$_GET['build'];
    		$conn = new mysqli($servername, $username, $password, $database);

		    if ($conn->connect_error) {
		        die("Connection failed: " . $conn->connect_error);
		    } 
		    $sql = "select * from  buy natural join food natural join Tel natural join people where name="."'".$name."'"." and food_id in ( select food_id from food where place=".$build.")";
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
		    }else
		    {
		    	$x=-1;
		    	echo $x;
		    }
		}else
		{
			echo 'false';
		}
?>