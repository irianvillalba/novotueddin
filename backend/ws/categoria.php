<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Categoria.php';
    //error_reporting(0);

    $categoria = new Categoria();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $rows = $categoria->listaCategoria();
    echo json_encode($rows);

?>
