<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Local.php';
    include_once '../lib/model/Turistico.php';
    include_once '../lib/model/Encontro.php';
    //error_reporting(0);

    $local = new Local();
    $turistico = new Turistico();
    $encontro = new Encontro();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch ($request->situacao) {
        case 'novo':
                if ($request->tipo == 'local')
                    $local->criaLocal($request->pagina);
                if ($request->tipo == 'turistico')
                    $turistico->criaTuristico($request->pagina);
                if ($request->tipo == 'ponto')
                    $encontro->criaEncontro($request->pagina);
            break;
        case 'avaliacao':
                if ($request->tipo == 'local')
                    $local->avaliaLocal($request);
                if ($request->tipo == 'turistico')
                    $turistico->avaliaTuristico($request);
                if ($request->tipo == 'ponto')
                    $encontro->avaliaEncontro($request);
            break;
        case 'comentario':
                if ($request->tipo == 'local')
                    $local->comentaLocal($request);
                if ($request->tipo == 'turistico')
                    $turistico->comentaTuristico($request);
                if ($request->tipo == 'ponto')
                    $encontro->comentarioEncontro($request);
            break;
        case 'curtir':
                if ($request->tipo == 'local')
                    $local->curtirLocal($request->id_perfil, $request->id_local);
                if ($request->tipo == 'turistico')
                    $turistico->curtirTuristico($request->id_perfil, $request->id_local);
                if ($request->tipo == 'ponto')
                    $encontro->curtirEncontro($request->id_perfil, $request->id_local);
            $local->curtirLocal($request->id_perfil, $request->id_local);
            break;
        case 'favorito':
                if ($request->tipo == 'local')
                    $local->favoritarLocal($request->id_perfil, $request->id_local);
                if ($request->tipo == 'turistico')
                    $turistico->favoritarTuristico($request->id_perfil, $request->id_local);
                if ($request->tipo == 'ponto')
                    $encontro->favoritarEncontro($request->id_perfil, $request->id_local);
            break;
        case 'lista':
                if ($request->tipo == 'local')
                    echo json_encode($local->listaLocal());
                if ($request->tipo == 'turistico')
                    echo json_encode($local->listaTuristico());
                if ($request->tipo == 'ponto')
                    echo json_encode($local->listaEncontro());
            break;
    }
?>
