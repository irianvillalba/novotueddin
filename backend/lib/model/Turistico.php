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
        $this->dt = date('Y-m-d H:i:s');
        $this->cmp = array('ponto_turistico', 'localizacao', 'endereco', 'telefone', 'site', 'email',
            'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro');

        $dt_termina = date('Y-m-d H:i:s', strtotime($dados->datatermina));
        $hr_termina = str_replace(array('h','m'),"", $dados->horatermina);
        $this->vlr = array($dados->nome, $dados->local, $dados->endereco, $dados->telefone, $dados->site,
            $dados->email, $dados->horafunciona, $dados->diafunciona, $dt_termina, $hr_termina,
            $dados->id_perfil, $this->dt);

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

    public function listaTuristico() {
        $sql = "select
                pt.id_turistico,
                pt.ponto_turistico,
                pt.endereco,
                (select count(1) from curtida as c where c.id_turistico = pt.id_turistico) as curtida,
                (select count(1) from comentario as com where com.id_turistico = pt.id_turistico) as comentario
                from ponto_turistico as pt";

        $rows = $this->getFromQuery($sql);
        return $rows;
    }

}
