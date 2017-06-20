<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');
include_once '../lib/model/Avaliacao.php';
include_once '../lib/model/Comentario.php';

class Local extends AbstractModel {

    private $cmp;
    private $vlr;
    private $dt;

    public function criaLocal($dados) {
        $this->dt = date('Y-m-d H:i:s');
        $this->cmp = array('local', 'localizacao', 'endereco', 'telefone', 'site', 'email',
            'horario', 'funcionamento', 'dt_termino', 'hr_termino', 'id_perfil', 'dt_cadastro', 'descricao');

        $dt_termina = date('Y-m-d H:i:s', strtotime($dados->datatermina));
        $hr_termina = str_replace(array('h','m'),"", $dados->horatermina);
        $this->vlr = array($dados->nome, $dados->local, $dados->endereco, $dados->telefone, $dados->site,
            $dados->email, $dados->horafunciona, $dados->diafunciona, $dt_termina, $hr_termina,
            $dados->id_perfil, $this->dt, $dados->descricao);

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

    public function listaLocal() {
        $sql = "select
                l.id_local,
                l.local,
                l.endereco,
                (select count(1) from curtida as c where c.id_local = l.id_local) as curtida,
                (select count(1) from comentario as com where com.id_local = l.id_local) as comentario
                from local as l";

        $rows = $this->getFromQuery($sql);
        return $rows;
    }

    public function getLocal($id) {
        $avalia = new Avaliacao();
        $comentario = new Comentario();

        $sql = "select id_local, local, dt_termino, endereco, dt_cadastro, descricao,
                (select count(1) from visualizacao as v where v.id_local = l.id_local) visualizacao,
                (select count(1) from avaliacao as a where a.id_local = l.id_local) qtd_avaliacao,
                (select sum(avaliacao) from avaliacao as a where a.id_local = l.id_local) soma_avaliacao,
                (select count(1) from curtida as c where c.id_local = l.id_local) as curtida,
                (select count(1) from comentario as com where com.id_local = l.id_local) as comentario  from local as l
                where id_local = $id";

        $rows['pagina'] = $this->getFromQuery($sql)[0];
        $rows['avaliacoes'] = $avalia->avaliacoes($id, 'id_local');
        $rows['comentario'] = $comentario->listaComentario('id_local', $id);
        return $rows;
    }
}
