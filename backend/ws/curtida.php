<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Curtida.php';
    //error_reporting(0);

    $curtida = new Curtida();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    echo $curtida->curtir($request->id_tipo, $request->id_perfil, $request->tipo);
?>
