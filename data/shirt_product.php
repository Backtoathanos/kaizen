
<?php
include("db.php");
	$shirt_output=array();

	@$sort=$_GET['label'];
	@$min=$_GET['min'];
	@$max=$_GET['max'];
	if(isset($_GET['label'])){
		if($sort=='new'){
			$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($shirt_row=mysqli_fetch_assoc($price_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			}else{
					while ($shirt_row=mysqli_fetch_assoc($shirt_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			

		}elseif ($sort=='best') {
			$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($shirt_row=mysqli_fetch_assoc($price_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			}else{
					while ($shirt_row=mysqli_fetch_assoc($shirt_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
		}elseif ($sort=='trending') {
			$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($shirt_row=mysqli_fetch_assoc($price_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			}else{
					while ($shirt_row=mysqli_fetch_assoc($shirt_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
		}elseif ($sort=='rated') {
			$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `appearance`='".$sort."' AND `pd_category`='shirt'");
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='shirt' AND `appearance`='".$sort."'");
				if($price_query){
					while ($shirt_row=mysqli_fetch_assoc($price_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			}else{
					while ($shirt_row=mysqli_fetch_assoc($shirt_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
		}elseif ($sort=='All'){

			$shirt_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_category`='shirt'");		
			if(isset($_GET['min']) && isset($_GET['max']) ){
				$price_query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_price` BETWEEN $min AND $max AND `pd_category`='shirt'");
				if($price_query){
					while ($shirt_row=mysqli_fetch_assoc($price_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
			}else{
					while ($shirt_row=mysqli_fetch_assoc($shirt_query)) {
						$shirt_output[]=$shirt_row;	
					}
				}
		}
	}
	

	echo json_encode($shirt_output);


?>