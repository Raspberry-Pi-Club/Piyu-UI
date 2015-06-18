<?php

if($_SERVER['REQUEST_METHOD']=="GET"){
	$command = $_GET['command'];
	
	$file = fopen("commands.txt", "a");
		fputs($file,$command."\n");
	fclose($file);
}

?>