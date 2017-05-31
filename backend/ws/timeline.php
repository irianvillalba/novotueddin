<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Timeline.php';
    include_once '../lib/model/Perfil.php';
    include_once '../lib/model/Postagem.php';

    $email = new Email();
    $timeline = new Timeline();
    $perfil = new Perfil();
    $postagem = new Postagem();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch($request->situacao) {

        //Salva a postagem do usuário
        case "postagem":
            $postagem->adicionaPostagem($request);
            echo json_encode($timeline->timeline());
        break;

        //Carrega a timeline
        case "timeline":
            echo json_encode($timeline->timeline());
        break;

        //Segue um outro perfil
        case "seguindo":
            $perfil->seguirPerfil($request);
        break;

        case "curtida":
            $postagem->curtirPostagem($request->id_perfil, $request->id_postagem);
        break;

        case "comentario":

        break;
    }

?>
