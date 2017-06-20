<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Visualizacao.php';
    //error_reporting(0);

    $visualizacao = new Visualizacao();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    if (isset($request->id_tipo))
        $visualizacao->addVisualizacao($request->id_tipo, $request->id_perfil, $request->tipo);
?>
