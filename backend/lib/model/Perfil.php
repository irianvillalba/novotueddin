<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Irian Villalba
 * Date: 24/02/16
 * Time: 13:50
 * To change this template use File | Settings | File Templates.
 */

include_once ('abstractModel.php');

class Perfil extends AbstractModel {

  public function criaPerfil($dados, $redesocial) {
    $nome = explode(' ',$dados->name);

      if (!isset($dados->gender) || empty($dados->gender) || is_null($dados->gender))
          $s = "";
      else
          $s = $dados->gender;

    $sexo = substr($s, 0, 1);
    $nick = strtolower($nome[0]) . strtolower($nome[1]);

      if (!isset($dados->id) || empty($dados->id) || is_null($dados->id))
          $id = "";
      else
          $id = $dados->id;

    $existe_nick = $this->countRows('perfil', "nick = '$nick'");
    $existe_token = $this->countRows('perfil', "token = '{$id}'");

    if ($existe_nick > 0) {
        $nick = $nick . rand(1, 9999);
    }

    $cmp = array('nome', 'pref_mulher', 'pref_homem','raio_busca', 'idade_minima', 'idade_maxima', 'mostrar', 'notifica_combinacao',
    'notifica_mensagem', 'notifica_curtida', 'notifica_evento', 'notifica_local', 'notifica_ponto', 'notifica_turistico',
    'notifica_charme', 'notifica_crush','foto_perfil','nick', 'sobrenome', 'conecta_instagram', 'conecta_spotify', 'situacao', 'token', 'email', 'provedor_login', 'sexo');

    if (!isset($dados->picture->data->url) || empty($dados->picture->data->url) || is_null($dados->picture->data->url))
        $foto = "";
    else
        $foto = $dados->picture->data->url;



      if (!isset($dados->email) || empty($dados->email) || is_null($dados->email))
          $email = "";
      else
          $email = $dados->email;

    $vlr = array($nome[0], 'n', 'n', 10, 18, 40, 's', 's', 's', 's', 's', 's', 's', 's', 'n', 'n', $foto, $nick,
    $nome[1], 'n', 'n', 'ativo', $id, $email, $redesocial, $sexo);

    if ($existe_token == 0 ) {
        $this->insertRow('perfil', $cmp, $vlr);
        $row = $this->getRow('perfil', "token = {$dados->id}");
    } else {
        $row = $this->getRow('perfil', "token = {$dados->id}");
        $row['existe'] = true;
    }

    echo json_encode($row);
  }

  public function excluiPerfil($token) {
    $this->deleteRow('perfil', "token = $token");
  }

  public function alteraPerfil($token, $dados) {

  }

  public function getPerfilSocial($token) {
    $row = $this->getRow('perfil', "token = $token");
    return $row;
  }

  public function procuraPerfil($token) {
      $row = $this->countRows('perfil', "token = $token");
      $res = false;
      if ($row > 0)
          $res = true;
      return $res;
  }

  public function procuraNick($nick) {
      $row = $this->countRows('perfil', "nickname = $nick");
      $res = false;
      if ($row > 0)
          $res = true;
      return $res;
  }

  public function seguirPerfil($dados) {
      $dt = date('Y-m-d H:i:s');
      $where = "(id_perfil = {$dados->id_perfil} and id_perfil_seguindo = {$dados->id_perfil_seguindo}) or
                    (id_perfil = {$dados->id_perfil_seguindo} and id_perfil_seguindo = {$dados->id_perfil})";
      $conexao = $this->countRows('conexao', $where);

      if ($conexao == 0) {
          $cmp = array('id_perfil', 'id_perfil_seguindo', 'situacao', 'dt_conexao');
          $vlr = array($dados->id_perfil, $dados->id_perfil_seguindo, 'seguindo', $dt);
          $this->insertRow('conexao', $cmp, $vlr);
          echo "conexão criada";
      } else {
          $this->deleteRow('conexao', $where);
          echo "conexão cancelada";
      }
  }

  public function match() {

  }

}
