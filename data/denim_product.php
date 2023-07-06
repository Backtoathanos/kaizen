<?php
	include("db.php");
	$denims_output=array();
	@$sort=$_GET['label'];
	@$min=$_GET['min'];
	@$max=$_GET['max'];
	if(isset($_GET['label'])){
		if($sort=='new'){
			$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='denims'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='denims' AND `appearance`='".$sort."'");
				if($price_query){
					while ($denims_row=mysqli_fetch_assoc($price_query)) {
						$denims_output[]=$denims_row;	
					}
				}
			}else{
					while ($denims_row=mysqli_fetch_assoc($denims_query)) {
						$denims_output[]=$denims_row;	
					}
				}

		}elseif ($sort=='best') {
			$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='denims'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='denims' AND `appearance`='".$sort."'");
				if($price_query){
					while ($denims_row=mysqli_fetch_assoc($price_query)) {
						$denims_output[]=$denims_row;	
					}
				}
			}else{
					while ($denims_row=mysqli_fetch_assoc($denims_query)) {
						$denims_output[]=$denims_row;	
					}
				}
		}elseif ($sort=='trending') {
			$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='denims'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='denims' AND `appearance`='".$sort."'");
				if($price_query){
					while ($denims_row=mysqli_fetch_assoc($price_query)) {
						$denims_output[]=$denims_row;	
					}
				}
			}else{
					while ($denims_row=mysqli_fetch_assoc($denims_query)) {
						$denims_output[]=$denims_row;	
					}
			}
		}elseif ($sort=='rated') {
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='denims' AND `appearance`='".$sort."'");
				if($price_query){
					while ($denims_row=mysqli_fetch_assoc($price_query)) {
						$denims_output[]=$denims_row;	
					}
				}
			}else{
					while ($denims_row=mysqli_fetch_assoc($denims_query)) {
						$denims_output[]=$denims_row;	
					}
			}
		}elseif ($sort=='All') {
			$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='denims'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='denims'");
					if($price_query){
						while ($denims_row=mysqli_fetch_assoc($price_query)) {
						$denims_output[]=$denims_row;	
					}
				}
			}
			else{
					while ($denims_row=mysqli_fetch_assoc($denims_query)) {
					$denims_output[]=$denims_row;
				}
			}
		}
	}
	

		// 	$denims_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='denims' AND `pd_price` BETWEEN '".$min."' AND '".$max."'");
		// while ($denims_row=mysqli_fetch_assoc($denims_query)) {
		// 	$denims_output[]=$denims_row;
		// }
			
	
	// if(isset($_GET['min']) && isset($_GET['max'])){
		
	// }

	

echo json_encode($denims_output);
?>