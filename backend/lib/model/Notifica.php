<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Notifica extends AbstractModel {

    private $cmp;
    private $vlr;

    public function notificacao($id_tipo, $id_perfil, $tipo) {
        $notifica = $this->countRows('notificacao', "$tipo = $id_tipo and id_perfil = $id_perfil");
        $msg = "";
        if ($notifica == 0) {
            $this->addNotificacao($id_tipo, $id_perfil, $tipo);
            $msg = "adicionado";
        }

        else {
            $this->excNotificacao($id_tipo, $id_perfil, $tipo);
            $msg = "excluido";
        }


        return $msg;
    }

    public function addNotificacao($id_tipo, $id_perfil, $tipo) {
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

        $this->insertRow('notificacao', $this->cmp, $this->vlr);
    }

    public function excNotificacao($id_tipo, $id_perfil, $tipo) {
        $this->deleteRow('notificacao', "$tipo = $id_tipo and id_perfil = $id_perfil");
    }

}
