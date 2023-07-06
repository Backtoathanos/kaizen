<?php
include("db.php");
	$shirt_output=array();

	$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='shirt'");		
		while($shirt_row=mysqli_fetch_array($shirt_query)){
			$shirt_output[]=$shirt_row;
		}
		echo json_encode($shirt_output);
?>