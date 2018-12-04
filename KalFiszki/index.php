<?php
header("Access-Control-Allow-Origin: *");
$nr;

$xml=simplexml_load_file('kurs.xml');
$xml=$xml->xpath('//lekcja');
print_r($xml[0]['slowo']);
echo json_encode($xml[0]);
?>