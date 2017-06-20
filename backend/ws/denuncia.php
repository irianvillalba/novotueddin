<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Denuncia.php';
    //error_reporting(0);

    $denuncia = new denuncia();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    echo $denuncia->addDenuncia($request->id_tipo, $request->id_perfil, $request->tipo);
?>
