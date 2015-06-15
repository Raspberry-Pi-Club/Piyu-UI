<?php
if($_SERVER['REQUEST_METHOD']=='GET'){
	if(isset($_GET['listen'])){
		
		$json_file = file_get_contents('interface.json');
		
		$option = json_decode($json_file);
		$option->listen = $_GET['listen'];

		$out = json_encode($option);
		$file = fopen("interface.json","w");
		fwrite($file,$out);
		fclose($file);

	}
}

?>