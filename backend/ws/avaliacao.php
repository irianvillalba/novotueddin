<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Avaliacao.php';
    //error_reporting(0);

    $avaliacao = new Avaliacao();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    echo $avaliacao->addAvaliacao($request->id_tipo, $request->id_perfil, $request->tipo, $request->avaliacao);
?>
