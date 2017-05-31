<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Encontro.php';

    $encontro = new Encontro();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch ($request->situacao) {
        case 'novo':
            $encontro->criaEncontro($request);
            break;
        case 'avaliacao':
            $encontro->avaliaEncontro($request);
            break;
        case 'comentario':
            $encontro->comentaEncontro($request);
            break;
        case 'curtir':
            $encontro->curtirEncontro($request->id_perfil, $request->id_encontro);
            break;
        case 'favorito':
            $encontro->favoritarEncontro($request->id_perfil, $request->id_encontro);
            break;
    }

?>
