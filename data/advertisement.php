<?php
include("db.php");
$advertisement_query=mysqli_query($con, "SELECT * FROM `kaaizen_advertisement`");
$advertisement_output=array();
while($advertisement_row=mysqli_fetch_array($advertisement_query)){
  $advertisement_output[]=$advertisement_row;
}
echo json_encode($advertisement_output);
?>