<?php
include_once '../lib/cors.php';
include_once '../lib/Email.php';
include_once '../lib/model/Turistico.php';
//error_reporting(0);

$turistico = new Turistico();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$dt = date('Y-m-d H:i:s');

echo json_encode($turistico->listaTuristico());
?>
