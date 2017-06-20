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

  public function criaPerfil($dados) {

      $usuario = explode("|", $dados->user_id);

      $existe_token = $this->countRows('perfil', "token = '{$usuario[1]}'");

      $cmp = array(
          'nome',
          'sobrenome',
          'nick',
          'foto_perfil',
          'token',
          'email',
          'situacao',
          'provedor_login',
          'sexo',
          'pref_mulher',
          'pref_homem',
          'raio_busca',
          'idade_minima',
          'idade_maxima',
          'mostrar',
          'notifica_combinacao',
          'notifica_mensagem',
          'notifica_curtida',
          'notifica_evento',
          'notifica_local',
          'notifica_ponto',
          'notifica_turistico',
          'notifica_charme',
          'notifica_crush',
          'conecta_instagram',
          'conecta_spotify');

      switch($usuario[0]) {
          case 'facebook':

              $existe_nick = $this->countRows('perfil', "nick = '{$dados->nickname}'");
              if ($existe_nick > 0) {
                  $nick = $dados->nickname . rand(1, 9999);
              } else {
                  $nick = $dados->nickname;
              }

                $vlr_social = array(
                    $dados->given_name,
                    $dados->family_name,
                    $nick,
                    $dados->picture_large,
                    $usuario[1],
                    $dados->email,
                    'ativo',
                    'facebook',
                    substr($dados->gender,0,1));

              break;
          case 'instagram':

              $existe_nick = $this->countRows('perfil', "nick = '{$dados->screen_name}'");

              if ($existe_nick > 0) {
                  $nick = $dados->screen_name . rand(1, 9999);
              } else {
                  $nick = $dados->screen_name;
              }

              $nome = explode(" ", $dados->name);
              $vlr_social = array(
                  $nome[0],
                  $nome[1],
                  $nick,
                  $dados->picture,
                  $usuario[1],
                  null,
                  'ativo',
                  'instagram',
                  null);

              break;
          case 'twitter':

              $existe_nick = $this->countRows('perfil', "nick = '{$dados->screen_name}'");
              if ($existe_nick > 0) {
                  $nick = $dados->screen_name . rand(1, 9999);
              } else {
                  $nick = $dados->screen_name;
              }
              $nome = explode(" ", $dados->name);
              $vlr_social = array(
                  $nome[0],
                  $nome[1],
                  $nick,
                  $dados->picture,
                  $usuario[1],
                  null,
                  'ativo',
                  'twitter',
                  null);

            break;
      }

      $vlr_default = array('n', 'n', 10, 18, 60, 's', 's', 's', 's', 's', 's', 's', 's', 'n', 'n', 'n', 'n');
      $vlr = array_merge($vlr_social, $vlr_default);

      if ($existe_token == 0 ) {
          $this->insertRow('perfil', $cmp, $vlr);
          $row = $this->getRow('perfil', "token = {$usuario[1]}");
      } else {
          $row = $this->getRow('perfil', "token = {$usuario[1]}");
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
