<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Visualizacao extends AbstractModel {

    private $cmp;
    private $vlr;

    public function addVisualizacao($id_tipo, $id_perfil, $tipo) {
        $dt = date('Y-m-d H:i:s');

        $this->cmp = array(
            'id_perfil',
            'dt_cadastro',
            $tipo
        );

        $this->vlr = array(
            $id_perfil,
            $dt,
            $id_tipo
        );

        $this->insertRow('visualizacao', $this->cmp, $this->vlr);
    }

}
