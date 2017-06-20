<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');
include_once 'Imagem.php';

class Encontro extends AbstractModel {

    private $cmp;
    private $vlr;
    private $dt;

    public function criaEncontro($dados) {
        $this->dt = date('Y-m-d H:i:s');
        $this->cmp = array('ponto_encontro', 'localizacao', 'endereco', 'telefone', 'site', 'email',
            'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro');

        $dt_termina = date('Y-m-d H:i:s', strtotime($dados->datatermina));
        $hr_termina = str_replace(array('h','m'),"", $dados->horatermina);
        $this->vlr = array($dados->nome, $dados->local, $dados->endereco, $dados->telefone, $dados->site,
            $dados->email, $dados->horafunciona, $dados->diafunciona, $dt_termina, $hr_termina,
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

    public function listaEncontro() {
        $sql = "select
                pe.id_encontro,
                pe.ponto_encontro,
                pe.endereco,
                (select count(1) from curtida as c where c.id_encontro = pe.id_encontro) as curtida,
                (select count(1) from comentario as com where com.id_encontro = pe.id_encontro) as comentario
                from ponto_encontro as pe";

        $rows = $this->getFromQuery($sql);
        return $rows;
    }

}
