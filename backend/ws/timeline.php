<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Postagem.php';

    $email = new Email();
    $postagem = new Postagem();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $dt = date('Y-m-d H:i:s');

    function contatempo($tempo_passado) {
        $agora = date("Y-m-d H:i:s");
        $segundos = (strtotime($agora) - strtotime($tempo_passado));
        $minutos = $segundos / (60);
        $horas = $minutos / (60);
        $mostra_horas = intval($horas);
        $mostra_minutos = intval($minutos - ($mostra_horas * 60));
        $mostra_segundos = intval($segundos - ($mostra_minutos * 60 * 60) - ($mostra_minutos * 60));
        $tempo = 0;

        if ($mostra_horas < 24) {
            $tempo = "$mostra_horas hora(s)";
            if ($mostra_horas == 0)
                $tempo = "$mostra_minutos minuto(s)";
        }

        if ($mostra_horas > 24) {
            $tempo = floor($mostra_horas / 24);
            $tempo = "$tempo dia(s)";
        }

        return $tempo;
    }

    function timeline() {
        $postagem = new Postagem();
        $sql = "select distinct pos.id_postagem, pos.id_perfil, prf.nome, pos.dt_postagem, pos.texto, prf.foto_perfil, prf.sobrenome,
                    (select count(id_curtida) from curtida where id_postagem = pos.id_postagem) as curtida
                    from perfil as prf
                    inner join postagem as pos on prf.id_perfil = pos.id_perfil order by pos.dt_postagem desc";
        $rows = $postagem->getFromQuery($sql);

        for ($x = 0; $x < count($rows); $x++) {
            $rows[$x]['tempo'] = contatempo($rows[$x]['dt_postagem']);
        }

        echo json_encode($rows);
    }

    switch($request->situacao) {

        //Salva a postagem do usuário
        case "postagem":
            $cmp = array('id_perfil', 'dt_postagem', 'texto');
            $vlr = array($request->id_perfil, $dt, $request->texto);
            $postagem->insertRow('postagem', $cmp, $vlr);
            timeline();
        break;

        //Carrega a timeline
        case "timeline":
            timeline();
        break;

        //Segue um outro perfil
        case "seguindo":
            $where = "(id_perfil = {$request->id_perfil} and id_perfil_seguindo = {$request->id_perfil_seguindo}) or
                    (id_perfil = {$request->id_perfil_seguindo} and id_perfil_seguindo = {$request->id_perfil})";
            $conexao = $postagem->countRows('conexao', $where);

            if ($conexao == 0) {
                $cmp = array('id_perfil', 'id_perfil_seguindo', 'situacao', 'dt_conexao');
                $vlr = array($request->id_perfil, $request->id_perfil_seguindo, 'seguindo', $dt);
                $postagem->insertRow('conexao', $cmp, $vlr);
                echo "conexão criada";
            } else {
                $postagem->deleteRow('conexao', $where);
                echo "conexão cancelada";
            }
        break;

        case "curtida":
            $curtida = $postagem->countRows('curtida', "id_postagem = {$request->id_postagem} and id_perfil = {$request->id_perfil}");

            if ($curtida == 0) {
                $cmp = array('id_perfil', 'id_postagem', 'dt_curtida');
                $vlr = array($request->id_perfil, $request->id_postagem, $dt);
                $postagem->insertRow('curtida', $cmp, $vlr);
                echo "curtida feita";
            } else {
                $postagem->deleteRow('curtida', "id_postagem = {$request->id_postagem} and id_perfil = {$request->id_perfil}");
                echo "curtida cancelada";
            }
        break;

        case "comentario":

        break;
    }

?>
