<?php
include("db.php");
	$tshirt_output=array();
	$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='t-shirt'");		
			while($tshirt_row=mysqli_fetch_array($tshirt_query)){
			  $tshirt_output[]=$tshirt_row;
			}
		echo json_encode($tshirt_output)
?>