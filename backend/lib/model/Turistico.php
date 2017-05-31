<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Turistico extends AbstractModel {

    public function criaTuristico($dados) {
        $dt_cadastro = date("Y-m-d");

        $this->cmp = array('ponto_encontro', 'turisticoizacao', 'endereco', 'telefone', 'site', 'email',
            'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro');

        $this->vlr = array($dados->ponto, $dados->turisticoizacao, $dados->endereco, $dados->telefone, $dados->site,
            $dados->email, $dados->horario, $dados->funcionamento, $dados->dt_termino, $dados->hr_termino,
            $dados->id_perfil, $dt_cadastro);

        $this->insertRow('ponto_turistico', $this->cmp, $this->vlr);
    }

    public function avaliaTuristico($dados) {
        $this->cmp = array('id_perfil', 'id_turistico', 'avaliacao');
        $this->vlr = array($dados->id_perfil, $dados->id_turistico, $dados->avaliacao);

        $this->insertRow('avaliacao', $this->cmp, $this->vlr);
    }

    public function comentaTuristico($dados) {
        $this->cmp = array('id_perfil', 'id_turistico', 'comentario', 'dt_comentario');
        $this->vlr = array($dados->id_perfil, $dados->id_turistico, $dados->comentario, $this->dt);

        $this->insertRow('comentario', $this->cmp, $this->vlr);
    }

    public function curtirTuristico($id_perfil, $id_turistico) {
        $this->cmp = array('id_perfil', 'id_turistico');
        $this->vlr = array($id_perfil, $id_turistico);

        $this->insertRow('curtida', $this->cmp, $this->vlr);
    }

    public function favoritarTuristico($id_perfil, $id_turistico) {
        $this->cmp = array('id_perfil', 'id_turistico');
        $this->vlr = array($id_perfil, $id_turistico);

        $this->insertRow('favorito', $this->cmp, $this->vlr);
    }

}
