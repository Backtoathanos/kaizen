<?php
include("db.php");
	$tshirt_output=array();
	@$sort=$_GET['label'];
	@$min=$_GET['min'];
	@$max=$_GET['max'];
	if(isset($_GET['label'])){
		if($sort=='new'){
			$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='t-shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='t-shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($tshirt_row=mysqli_fetch_assoc($price_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
			}else{
					while ($tshirt_row=mysqli_fetch_assoc($tshirt_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}

		}elseif ($sort=='best') {
			$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='t-shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='t-shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($tshirt_row=mysqli_fetch_assoc($price_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
			}else{
					while ($tshirt_row=mysqli_fetch_assoc($tshirt_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
		}elseif ($sort=='trending') {
			$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='t-shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='t-shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($tshirt_row=mysqli_fetch_assoc($price_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
			}else{
					while ($tshirt_row=mysqli_fetch_assoc($tshirt_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
		}elseif ($sort=='rated') {
			$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='t-shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='t-shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($tshirt_row=mysqli_fetch_assoc($price_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
			}else{
					while ($tshirt_row=mysqli_fetch_assoc($tshirt_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
		}elseif ($sort=='All'){

			$tshirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='t-shirt'");		
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='t-shirt'");
				if($price_query){
					while ($tshirt_row=mysqli_fetch_assoc($price_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
			}else{
					while ($tshirt_row=mysqli_fetch_assoc($tshirt_query)) {
						$tshirt_output[]=$tshirt_row;	
					}
				}
		}
	}
	
	echo json_encode($tshirt_output);


?>