<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Local.php';
    //error_reporting(0);

    $local = new Local();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    switch($request->tipo) {
        case 'lista':
            echo json_encode($local->listaLocal());
        break;
        case 'local':
            echo json_encode($local->getLocal($request->id_local));
        break;
    }

?>
