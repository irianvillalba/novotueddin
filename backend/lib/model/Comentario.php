<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Comentario extends AbstractModel {

    private $cmp;
    private $vlr;

    public function addComentario($id_tipo, $id_perfil, $tipo, $comentario) {
        $dt = date('Y-m-d H:i:s');

        $this->cmp = array(
            'id_perfil',
            $tipo,
            'comentario',
            'dt_comentario'
        );

        $this->vlr = array(
            $id_perfil,
            $id_tipo,
            $comentario,
            $dt
        );

        $this->insertRow('comentario', $this->cmp, $this->vlr);
    }

    public function addResposta($id_tipo, $id_perfil, $tipo, $comentario) {
        $dt = date('Y-m-d H:i:s');

        $this->cmp = array(
            'id_perfil',
            $tipo,
            'comentario',
            'dt_comentario'
        );

        $this->vlr = array(
            $id_perfil,
            $id_tipo,
            $comentario,
            $dt
        );

        $this->insertRow('comentario', $this->cmp, $this->vlr);
    }

    public function listaComentario($tipo, $id_tipo) {
        $sql = "select concat(p.nome,' ',p.sobrenome) as nome, p.foto_perfil, c.comentario, c.dt_comentario from comentario as c
                inner join perfil as p on p.id_perfil = c.id_perfil
                where $tipo = $id_tipo order by c.dt_comentario desc";

        $rows = $this->getFromQuery($sql);

        return $rows;
    }

}
