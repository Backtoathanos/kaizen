<?php
include("db.php");


// insert add to cart data into cart table from home, shirt, tshirt or denims page
if(isset($_GET['add'])){

	$prduct_id='6';// this will be come through ajax name+value
	$product_name='abc';
	$price='200';
	$quantity='1';
	$cart_subtotal=$quantity+$price;
	$insert_cart_query=mysqli_query($con, "INSERT INTO `kaaizen_cart`(`product_id`, `cart_product_name`, `cart_price`, `cart_quantity`, `cart_subtotal`) 
		VALUES ('".$prduct_id."','".$product_name."','".$price."','".$quantity."','".$cart_subtotal."')");
	if($insert_cart_query){
		echo "Product added to cart";
		header('location:tshirtshop.html');
	}else{
		echo "Hmmm! here is something wrong.";
	}
}


// fetch added cart data from cart table & display in cart page
$fetch_cart_op=array();
$fetch_cart_query=mysqli_query($con,"SELECT * FROM `kaaizen_cart`");
while($fetch_cart_row=mysqli_fetch_assoc($fetch_cart_query)){
	$fetch_cart_op[]=$fetch_cart_row;
}
	echo json_encode($fetch_cart_op);

?>