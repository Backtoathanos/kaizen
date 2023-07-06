<?php
include("db.php");
$franchise_query=mysqli_query($con,"SELECT * FROM `kaaizen_franchise` ");
$franchise_output=array();
while($franchise_row=mysqli_fetch_assoc($franchise_query)){
	$franchise_output[]=$franchise_row;
}
echo json_encode($franchise_output);


?>