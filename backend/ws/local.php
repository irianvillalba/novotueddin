<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Local.php';

    $local = new Local();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch ($request->situacao) {
        case 'novo': 
            $local->criaLocal($request);
            break;
        case 'avaliacao':
            $local->avaliaLocal($request);
            break;
        case 'comentario':
            $local->comentaLocal($request);
            break;
        case 'curtir':
            $local->curtirLocal($request->id_perfil, $request->id_local);
            break;
        case 'favorito':
            $local->favoritarLocal($request->id_perfil, $request->id_local);
            break;
    }
?>
