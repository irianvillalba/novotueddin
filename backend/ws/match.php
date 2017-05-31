<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Conexao.php';

    $email = new Email();
    $conexao = new Conexao();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    function match() {
        $conexao = new Conexao();
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $sql = "select  p.id_perfil, p.foto_perfil as image, concat(p.nome, ' ',p.sobrenome, ', ',p.idade) as title from perfil as p
            where
              p.id_perfil <> {$request->id_perfil} and
              sexo = 'f' and
              idade between {$request->id_min} and {$request->id_max} and
              id_perfil not in (select if (id_perfil <> {$request->id_perfil}, id_perfil, id_perfil_seguindo) as id_perfil from conexao
              where id_perfil = {$request->id_perfil} or id_perfil_seguindo = {$request->id_perfil})";

        $rows = $conexao->getFromQuery($sql);
        echo json_encode($rows);
    };

    switch ($request->situacao) {
        case "match":
            match();
        break;

        case "gostei":
            $cmp = array('id_perfil', 'id_perfil_seguindo', 'situacao', 'dt_conexao');
            $vlr = array($request->id_perfil, $request->id_perfil_seguindo, 'gostei', $dt);
            $conexao->insertRow('conexao', $cmp, $vlr);
            match();
        break;
    }

?>
