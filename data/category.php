<?php
include("db.php");
$category_op=array();
$category_query=mysqli_query($con, "SELECT * FROM `kaaizen_category`");
while($category_row=mysqli_fetch_assoc($category_query)){
	$category_op[]=$category_row;
}


	echo json_encode($category_op);
?>