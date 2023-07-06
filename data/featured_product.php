<?php
include("db.php");
$featured_product_query=mysqli_query($con, "SELECT * FROM `kaaizen_featured_product`");
$featured_product_output=array();
while($featured_product_row=mysqli_fetch_array($featured_product_query)){
	$featured_product_output[]=$featured_product_row;
}
echo json_encode($featured_product_output);
?>