<?php


if($_SERVER['REQUEST_METHOD']=="GET"&&isset($_GET['command'])){
	$command = $_GET['command'];
	
if($command==''){
	die();
}	

class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('database/interface.db');
      }
   }
$db = new MyDB();
if(!$db){
  echo $db->lastErrorMsg();
}
else
{

date_default_timezone_set('Asia/Kolkata');
$date = date("Y-m-d h:i:s");

  $sql ="INSERT INTO commands (command,date_time) VALUES ('$command', '$date')";
  $ret = $db->exec($sql);
  print_r($ret);
}


} #Request

?>