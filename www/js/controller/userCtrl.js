app.controller('userCtrl', function($scope, $http, $window, carregando, $ionicPopup) {
  var vm = $scope;

  vm.perfil = JSON.parse(localStorage.getItem('perfil'));

  console.log(vm.perfil);

  vm.raio_busca = vm.perfil.raio_busca;
  vm.idade_minima = vm.perfil.idade_minima;
  vm.idade_maxima = vm.perfil.idade_maxima;

  vm.mudaConfig = function(obj, cmp, tipo) {
    carregando.show();
    var req = {
      method: 'POST',
      url: rotas.route_perfil.perfil,
      data: {
        situacao: "config",
        campo: cmp,
        valor: obj[cmp],
        token: vm.perfil.token,
        tipo: tipo
      }
    }

    $http(req).then(sucesso);

    function sucesso(s) {
      carregando.hide();
    }

  }

  vm.sair = function() {
    localStorage.setObject('perfil', null);
    $window.location = "#/login";
  }

  vm.apagaConta = function() {
    $ionicPopup.confirm({
      title: 'Tueddin',
      template: 'Deseja Realmente cancelar essa conta?',
      okText: "Sim",
      cancelText: "Não"
    }).then(function(res) {
      if(res) {
        var req = {
          method: 'POST',
          url: rotas.route_perfil.perfil,
          data: {
            situacao: "apaga",
            token: vm.perfil.token
          }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
          carregando.hide();
          localStorage.setObject('perfil', null);
          $window.location = "#/login";
        }
      }
    });

  }

})
