<?php
include("db.php");
$op=array();
if(isset($_GET['id'])){
	$pid=$_GET['id'];
	$query=mysqli_query($con, "SELECT * FROM `kaaizen_product_details` WHERE `pd_product_id`='".$pid."'");
	if($res=mysqli_num_rows($query)>0){
		while($row=mysqli_fetch_assoc($query)){
			$op[]=$row;
		}
		echo json_encode($op);
	}
}	

?>
