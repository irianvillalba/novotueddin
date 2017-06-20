<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Comentario.php';
    //error_reporting(0);

    $comentario = new Comentario();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    switch ($request->acao) {
        case 'lista':
                echo $comentario->listaComentario($request->tipo, $request->id_tipo);
            break;
        case 'novo':
                $comentario->addComentario($request->id_tipo, $request->id_perfil, $request->tipo, $request->comentario);
            break;
        case 'resposta':
                $comentario->addComentario($request->id_tipo, $request->id_perfil, $request->tipo, $request->comentario);
            break;
    }


?>
