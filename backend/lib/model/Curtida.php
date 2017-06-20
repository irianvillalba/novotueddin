<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Curtida extends AbstractModel {

    private $cmp;
    private $vlr;

    public function curtir($id_tipo, $id_perfil, $tipo) {
        $curti = $this->countRows('curtida', "$tipo = $id_tipo and id_perfil = $id_perfil");

        if ($curti == 0)
            $this->addCurtida($id_tipo, $id_perfil, $tipo);
        else
            $this->excCurtida($id_tipo, $id_perfil, $tipo);

        return $this->countRows('curtida', "$tipo = $id_tipo");
    }

    public function addCurtida($id_tipo, $id_perfil, $tipo) {
        $dt = date('Y-m-d H:i:s');

        $this->cmp = array(
            'id_perfil',
            'dt_curtida',
            $tipo
        );

        $this->vlr = array(
            $id_perfil,
            $dt,
            $id_tipo
        );

        $this->insertRow('curtida', $this->cmp, $this->vlr);
    }

    public function excCurtida($id_tipo, $id_perfil, $tipo) {
        $this->deleteRow('curtida', "$tipo = $id_tipo and id_perfil = $id_perfil");
    }

}
