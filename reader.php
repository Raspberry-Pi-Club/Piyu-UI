<?php

if($_SERVER['REQUEST_METHOD']=="GET"){
	if(isset($_GET['log'])){

		$lineArray = array();
		$file = fopen("interface.txt", "r");
			while(!feof($file)){
			    $line = fgets($file);
			    array_push($lineArray, $line);
			}
		fclose($file);
		$i = 0;
		$get_i = sizeof($lineArray);
		$out= array();
		while($i<5){
			$i++;
			$get_i--;
			array_push($out,$lineArray[$get_i]);
		}
			echo json_encode($out);
		
	}
}