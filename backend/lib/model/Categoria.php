<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Categoria extends AbstractModel {

    private $cmp;
    private $vlr;

    public function listaCategoria() {

        $rows = $this->getAll('categoria', null, null, "order by categoria");

        return $rows;
    }

}
