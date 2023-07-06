<?php
include("db.php");
$latest_arrival_query=mysqli_query($con, "SELECT * FROM `kaaizen_latest_arrival`");
$latest_arrival_output=array();
while($latest_arrival_row=mysqli_fetch_array($latest_arrival_query)){
  $latest_arrival_output[]=$latest_arrival_row;
}
echo json_encode($latest_arrival_output);
?>