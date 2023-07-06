<?php
	include("db.php");
	$denims_output=array();
	$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='denims'");
 	while ($denims_row=mysqli_fetch_assoc($denims_query)) {
			$denims_output[]=$denims_row;
	}
	echo json_encode($denims_output);
?>