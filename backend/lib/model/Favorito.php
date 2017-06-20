<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Favorito extends AbstractModel {

    private $cmp;
    private $vlr;

    public function favoritar($id_tipo, $id_perfil, $tipo) {
        $curti = $this->countRows('favorito', "$tipo = $id_tipo and id_perfil = $id_perfil");

        if ($curti == 0) {
            $this->addFavorito($id_tipo, $id_perfil, $tipo);
            echo "adicionado";
        }

        else {
            $this->excFavorito($id_tipo, $id_perfil, $tipo);
            echo "excluido";
        }

    }

    public function addFavorito($id_tipo, $id_perfil, $tipo) {
        $this->cmp = array(
            'id_perfil',
            $tipo
        );

        $this->vlr = array(
            $id_perfil,
            $id_tipo
        );

        $this->insertRow('favorito', $this->cmp, $this->vlr);
    }

    public function excFavorito($id_tipo, $id_perfil, $tipo) {
        $this->deleteRow('favorito',  "$tipo = $id_tipo and id_perfil = $id_perfil");
    }

    public function listaFavorito($id_perfil) {

        $rows['local'] = $this->getFromQuery("select l.* from favorito as f
                        inner join local as l on l.id_local = f.id_local
                        where f.id_perfil = {$id_perfil} and f.id_local is not null");

        $rows['turistico'] = $this->getFromQuery("select tur.* from favorito as f
                        inner join ponto_turistico as tur on tur.id_turistico = f.id_turistico
                        where f.id_perfil = {$id_perfil} and f.id_turistico is not null");

        $rows['encontro'] = $this->getFromQuery("select enc.* from favorito as f
                        inner join ponto_encontro as enc on enc.id_encontro = f.id_encontro
                        where f.id_perfil = {$id_perfil} and f.id_encontro is not null");

        return $rows;
    }

}
