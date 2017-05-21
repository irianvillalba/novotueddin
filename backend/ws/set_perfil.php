<?php
    include_once '../lib/cors.php';
    include_once '../lib/model/Perfil.php';

    $perfil = new Perfil();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    if (isset($request->situacao)) {
        $dados = array("situacao = '{$request->situacao}'");
        $perfil->updateRow('conexao', $dados, "id_conexao = {$request->conexao}");
    }

    if (isset($request->notifica)) {
        $dados = array("recebe_notifica = '{$request->notifica}'");
        $perfil->updateRow('conexao', $dados, "id_conexao = {$request->conexao}");
    }
?>
