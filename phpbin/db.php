<html>
<body>
    <?php
    $servername ="localhost";
    $username    ="root";
    $password     ="123456";
    $database     ="web";
    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "select food_id,food_name from  `food` order by good asc limit 3";
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
?>
</body>
</html>