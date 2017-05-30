<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');
include_once 'model/Imagem.php';

class Local extends AbstractModel {

    private $cmp;
    private $vlr;
    private $dt;

    public function __construct() {
        $this->dt = date('Y-m-d H:i:s');
    }

    public function criaLocal($dados) {

        $this->cmp = array('ponto_local', 'localizacao', 'endereco', 'telefone', 'site', 'email',
            'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro');

        $this->vlr = array($dados->ponto, $dados->localizacao, $dados->endereco, $dados->telefone, $dados->site,
            $dados->email, $dados->horario, $dados->funcionamento, $dados->dt_termino, $dados->hr_termino,
            $dados->id_perfil, $this->dt);

        $this->insertRow('local', $this->cmp, $this->vlr);
    }

    public function avaliaLocal($dados) {
        $this->cmp = array('id_perfil', 'id_local', 'avaliacao');
        $this->vlr = array($dados->id_perfil, $dados->id_local, $dados->avaliacao);

        $this->insertRow('avaliacao', $this->cmp, $this->vlr);
    }

    public function comentaLocal($dados) {
        $this->cmp = array('id_perfil', 'id_local', 'comentario', 'dt_comentario');
        $this->vlr = array($dados->id_perfil, $dados->id_local, $dados->comentario, $this->dt);

        $this->insertRow('comentario', $this->cmp, $this->vlr);
    }

    public function curtirLocal($id_perfil, $id_local) {
        $this->cmp = array('id_perfil', 'id_local');
        $this->vlr = array($id_perfil, $id_local);

        $this->insertRow('curtida', $this->cmp, $this->vlr);
    }

    public function favoritarLocal($id_perfil, $id_local) {
        $this->cmp = array('id_perfil', 'id_local');
        $this->vlr = array($id_perfil, $id_local);

        $this->insertRow('favorito', $this->cmp, $this->vlr);
    }
}
