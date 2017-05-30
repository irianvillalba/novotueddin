<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Timeline extends AbstractModel {

    private function contaTempo($tempo_passado) {
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

    public function timeline() {
        $sql = "select distinct pos.id_postagem, pos.id_perfil, prf.nome, pos.dt_postagem, pos.texto, prf.foto_perfil, prf.sobrenome,
                    (select count(id_curtida) from curtida where id_postagem = pos.id_postagem) as curtida
                    from perfil as prf
                    inner join postagem as pos on prf.id_perfil = pos.id_perfil order by pos.dt_postagem desc";
        $rows = $this->getFromQuery($sql);

        for ($x = 0; $x < count($rows); $x++) {
            $rows[$x]['tempo'] = $this->contaTempo($rows[$x]['dt_postagem']);
        }
    }

}
