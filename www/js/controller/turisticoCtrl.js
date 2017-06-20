app.controller('turisticoCtrl', function($scope, $http, $window, carregando, $ionicPopup) {
    var vm = $scope;

    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    function carregaTuristico() {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.turistico
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            vm.turistico = s.data;
        }
    }

    carregaTuristico();

    vm.notifica = function(id_tipo, tipo) {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.notificacao,
            data: {
                "id_perfil":    vm.perfil.id_perfil,
                "id_tipo":      id_tipo,
                "tipo":         tipo
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            $ionicPopup.alert({
                title: 'Tueddin',
                template: 'Você será notificado das atualizações desse ponto turístico'
            });
        }
    }

    vm.favorito = function(id_tipo, tipo) {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.favorito,
            data: {
                "id_perfil":    vm.perfil.id_perfil,
                "id_tipo":      id_tipo,
                "tipo":         tipo
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            $ionicPopup.alert({
                title: 'Tueddin',
                template: 'Esse Ponto Turístico foi adicionado em seus favoritos'
            });
        }
    }

    vm.curtida = function(id_tipo, tipo) {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.curtida,
            data: {
                "id_perfil":    vm.perfil.id_perfil,
                "id_tipo":      id_tipo,
                "tipo":         tipo
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            carregaTuristico();
        }
    }

    vm.comentario = function() {

    }

})
