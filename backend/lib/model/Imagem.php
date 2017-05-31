<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Imagem extends AbstractModel {

    private $cmp;
    private $vlr;

    public function adicionaImagem($dados, $arquivo, $fk) {

        if ($arquivo['tmp_name'] != '') {
            // Pasta onde o arquivo vai ser salvo
            $_UP['pasta'] = 'uploads/';

            // Tamanho máximo do arquivo (em Bytes)
            $_UP['tamanho'] = 1024 * 1024 * 2; // 2Mb

            // Array com as extensões permitidas
            $_UP['extensoes'] = array('jpg', 'png', 'gif', 'jpeg');

            // Renomeia o arquivo? (Se true, o arquivo será salvo como .jpg e um nome único)
            $_UP['renomeia'] = false;

            // Array com os tipos de erros de upload do PHP
            $_UP['erros'][0] = 'Não houve erro';
            $_UP['erros'][1] = 'O arquivo no upload é maior do que o limite do PHP';
            $_UP['erros'][2] = 'O arquivo ultrapassa o limite de tamanho especifiado no HTML';
            $_UP['erros'][3] = 'O upload do arquivo foi feito parcialmente';
            $_UP['erros'][4] = 'Não foi feito o upload do arquivo';

            // Verifica se houve algum erro com o upload. Se sim, exibe a mensagem do erro
            if ($arquivo['error'] != 0) {
                die("Não foi possível fazer o upload, erro:" . $_UP['erros'][$arquivo['error']]);
                exit; // Para a execução do script
            }

            // Caso script chegue a esse ponto, não houve erro com o upload e o PHP pode continuar
            // Faz a verificação da extensão do arquivo
            $extensao = explode('.', $arquivo['name']);
            $extensao = strtolower(end($extensao));

            if (array_search($extensao, $_UP['extensoes']) === false) {
                echo "$extensao Por favor, envie arquivos com as seguintes extensões: jpg, png ou gif";
                exit;
            }

            // Faz a verificação do tamanho do arquivo
            if ($_UP['tamanho'] < $arquivo['size']) {
                echo "O arquivo enviado é muito grande, envie arquivos de até 2Mb.";
                exit;
            }

            $nome_final = time() . '.' . $extensao;

            // Depois verifica se é possível mover o arquivo para a pasta escolhida
            if (move_uploaded_file($arquivo['tmp_name'], $_UP['pasta'] . $nome_final)) {
                $dt_cadastro = date("Y-m-d H:i:s");

                $this->cmp = array($fk, 'imagem', 'tipo', 'dt_cadastro');
                $this->vlr = array($dados['id'], $dados['imagem'], $dados['tipo'], $dt_cadastro);

                $this->insertRow('imagem', $this->cmp, $this->vlr);

            } else {
                // Não foi possível fazer o upload, provavelmente a pasta está incorreta
                echo "Não foi possível enviar o arquivo, tente novamente";
            }
        }

    }

}
