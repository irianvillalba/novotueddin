<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Turistico.php';

    $turistico = new Turistico();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch ($request->situacao) {
        case 'novo':
            $turistico->criaTuristico($request);
            break;
        case 'avaliacao':
            $turistico->avaliaTuristico($request);
            break;
        case 'comentario':
            $turistico->comentaTuristico($request);
            break;
        case 'curtir':
            $turistico->curtirTuristico($request->id_perfil, $request->id_turistico);
            break;
        case 'favorito':
            $turistico->favoritarTuristico($request->id_perfil, $request->id_turistico);
            break;
    }
?>
