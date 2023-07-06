
<?php
include("db.php");
$newest=array();
	$query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details`");
	while ($row=mysqli_fetch_assoc($query)) {
		$newest[]=$row;
	}
echo json_encode($newest);


?>


