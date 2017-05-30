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

class Encontro extends AbstractModel {

    private $cmp;
    private $vlr;
    private $dt;

    public function __construct() {
        $this->dt = date('Y-m-d H:i:s');
    }

    public function criaEncontro($dados) {

        $this->cmp = array('ponto_encontro', 'localizacao', 'endereco', 'telefone', 'site', 'email',
        'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro');

        $this->vlr = array($dados->ponto, $dados->localizacao, $dados->endereco, $dados->telefone, $dados->site,
        $dados->email, $dados->horario, $dados->funcionamento, $dados->dt_termino, $dados->hr_termino,
        $dados->id_perfil, $this->dt);

        $this->insertRow('ponto_encontro', $this->cmp, $this->vlr);
    }

    public function avaliaEncontro($dados) {
        $this->cmp = array('id_perfil', 'id_encontro', 'avaliacao');
        $this->vlr = array($dados->id_perfil, $dados->id_encontro, $dados->avaliacao);

        $this->insertRow('avaliacao', $this->cmp, $this->vlr);
    }

    public function comentaEncontro($dados) {
        $this->cmp = array('id_perfil', 'id_encontro', 'comentario', 'dt_comentario');
        $this->vlr = array($dados->id_perfil, $dados->id_encontro, $dados->comentario, $this->dt);

        $this->insertRow('comentario', $this->cmp, $this->vlr);
    }

    public function curtirEncontro($id_perfil, $id_encontro) {
        $this->cmp = array('id_perfil', 'id_encontro');
        $this->vlr = array($id_perfil, $id_encontro);

        $this->insertRow('curtida', $this->cmp, $this->vlr);
    }

    public function favoritarEncontro($id_perfil, $id_encontro) {
        $this->cmp = array('id_perfil', 'id_encontro');
        $this->vlr = array($id_perfil, $id_encontro);

        $this->insertRow('favorito', $this->cmp, $this->vlr);
    }

}
