<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Denuncia extends AbstractModel {

    private $cmp;
    private $vlr;

    public function addDenuncia($id_tipo, $id_perfil, $tipo) {
        $dt = date('Y-m-d H:i:s');
        $denuncia  = $this->countRows('denuncia', "$tipo = $id_tipo and id_perfil = $id_perfil");

        if ($denuncia == 0) {
            $this->cmp = array(
                'id_perfil',
                $tipo,
                'dt_cadastro'
            );

            $this->vlr = array(
                $id_perfil,
                $id_tipo,
                $dt
            );

            $this->insertRow('denuncia', $this->cmp, $this->vlr);

            echo "denunciado";
        } else
            echo "errado";
    }

}
