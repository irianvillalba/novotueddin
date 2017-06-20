<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Notifica.php';
    //error_reporting(0);

    $notifica = new Notifica();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    echo $notifica->notificacao($request->id_tipo, $request->id_perfil, $request->tipo);
?>
