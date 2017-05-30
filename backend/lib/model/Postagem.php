<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Postagem extends AbstractModel {

    private $cmp;
    private $vlr;
    private $dt;

    public function __construct() {
        $this->dt = date('Y-m-d H:i:s');
    }

    public function adicionaPostagem($dados) {
        $this->cmp = array('id_perfil', 'dt_postagem', 'texto');
        $this->vlr = array($dados->id_perfil, $this->dt, $dados->texto);
        $this->insertRow('postagem', $this->cmp, $this->vlr);
    }

    public function curtirPostagem($id_perfil, $id_postagem) {
        $curtida = $this->countRows('curtida', "id_postagem = {$id_postagem} and id_perfil = {$id_perfil}");

        if ($curtida == 0) {
            $cmp = array('id_perfil', 'id_postagem', 'dt_curtida');
            $vlr = array($id_perfil, $id_postagem, $this->dt);
            $this->insertRow('curtida', $cmp, $vlr);
            echo "curtida feita";
        } else {
            $this->deleteRow('curtida', "id_postagem = {$id_postagem} and id_perfil = {$id_perfil}");
            echo "curtida cancelada";
        }
    }

    public function comentarPostagem($dados) {

    }
}
