<?php
    include_once '../lib/cors.php';
    include_once '../lib/Email.php';
    include_once '../lib/model/Perfil.php';

    $email = new Email();
    $perfil = new Perfil();

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    switch($request->situacao) {

        //Pega os dados do perfil baseado no token
        case "perfil":
            $p = $perfil->getPerfilSocial($request->token);
            $p = json_encode($p);
            echo $p;
        break;
        //Cria um novo perfil na base de dados de acordo com a rede social escolhida
        case "adiciona":
            $perfil->criaPerfil($request->perfil, $request->redesocial);
        break;
        //consulta um perfil social
        case "consulta":
            $p = $perfil->getPerfilSocial("1531177893578623");
            echo json_encode($p);
        break;
        //mudança de configuração no perfil
        case "config":
            switch($request->tipo) {
                case 'bool':
                    if ($request->valor == 1)
                        $dados = array("{$request->campo} = 's'");
                    else
                        $dados = array("{$request->campo} = 'n'");
                break;
                case 'int':
                      $dados = array("{$request->campo} = {$request->valor}");
                break;
            }

            $perfil->updateRow('perfil', $dados, "token = '{$request->token}'");
        break;
        //utilizado quando o usuário completa os dados do cadastro: sexo, idade, nome do perfil
        case "completa_cadastro":
            $dados = array(
              "nick = '{$request->nick}'",
              "sexo = '{$request->sexo}'",
              "idade = '{$request->idade}'"
            );

            $perfil->updateRow('perfil', $dados, "token = '{$request->token}'");
            $p = $perfil->getPerfilSocial($request->token);
            $p = json_encode($p);
            echo $p;
        break;
        case "apaga":
            $perfil->excluiPerfil($request->token);
        break;

    }

?>
