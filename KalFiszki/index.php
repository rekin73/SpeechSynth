<?php
header('Access-Control-Allow-Origin: *');
if(isset($_GET['nr'])){
$nr=$_GET['nr'];

$xml=simplexml_load_file('kurs.xml');
$xml=$xml->xpath('//lekcja[@nr='.$nr.']');
//print_r($xml[0][1]);
echo json_encode($xml[0]);
}
?>