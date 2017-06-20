<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Avaliacao extends AbstractModel {

    private $cmp;
    private $vlr;

    public function addAvaliacao($id_tipo, $id_perfil, $tipo, $avaliacao) {
        $dt = date('Y-m-d H:i:s');

        $row = $this->countRows('avaliacao', "$tipo = $id_tipo and id_perfil = $id_perfil");

        if ($row == 0) {
            $this->cmp = array(
                'id_perfil',
                'dt_avaliacao',
                $tipo,
                'avaliacao'
            );

            $this->vlr = array(
                $id_perfil,
                $dt,
                $id_tipo,
                $avaliacao
            );

            $this->insertRow('avaliacao', $this->cmp, $this->vlr);
        } else {
            $this->vlr = array("avaliacao = $avaliacao");
            $this->updateRow('avaliacao', $this->vlr, "$tipo = $id_tipo and id_perfil = $id_perfil" );
        }

        echo $this->countRows('avaliacao', "$tipo = $id_tipo");

    }

    public function avaliacoes($id_tipo, $tipo) {
        $sql = "select count(a.avaliacao) qtd,
                case
                    when a.avaliacao = 1 then 'Térrivel'
                    when a.avaliacao = 2 then 'Ruim'
                    when a.avaliacao = 3 then 'Bom'
                    when a.avaliacao = 4 then 'Ótimo'
                    when a.avaliacao = 5 then 'Excelente'
                end as txt_avaliacao
                from avaliacao as a
                where $tipo = $id_tipo
                group by a.avaliacao
                order by avaliacao";

        $rows = $this->getFromQuery($sql);

        return $rows;
    }

}
