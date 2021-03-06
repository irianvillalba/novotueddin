app.controller('cadastroCtrl', function($scope, $http, $window, carregando, $ionicPopup) {
  var vm = $scope;

  vm.perfil = JSON.parse(localStorage.getItem('perfil'));
  vm.nick = vm.perfil.nick;
  vm.sexo = vm.perfil.sexo;

  console.log(vm.perfil);

  vm.id = [];

  for (x = 18; x <= 80; x++) {
    vm.id.push(x);
  }

  vm.cadastro = function() {
    carregando.show();
    if (typeof(vm.aceito) != 'undefined') {
      var req = {
        method: 'POST',
        url: rotas.route_perfil.perfil,
        data: {
          sexo: vm.sexo,
          nick: vm.nick,
          idade: vm.idade,
          token: vm.perfil.token,
          situacao: "completa_cadastro"
        }
      }

      $http(req).then(sucesso);

      function sucesso(s) {
        carregando.hide();
        localStorage.setObject('perfil', s.data);
        $window.location  = "#/mainmenu";
      }

    } else {
      $ionicPopup.alert({
        title: '',
        template: 'Por favor aceite os termos de servico',
        buttons: [
              {   type: 'button',
                  text: 'Voltar',
                  onTap: function(){
                        $window.location="#/cadastro";
                        carregando.hide();
                    }
              }
          ]
      });
    }

  }
})
