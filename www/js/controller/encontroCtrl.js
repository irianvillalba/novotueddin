app.controller('encontroCtrl', function($scope, $http, $window, carregando, $ionicPopup) {
    var vm = $scope;

    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    function carregaEncontro() {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.encontro
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            vm.encontro = s.data;
        }
    }

    carregaEncontro();

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
                template: 'Você será notificado das atualizações desse ponto de encontro'
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
                template: 'Esse ponto de encontro foi adicionado aos seus favoritos'
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
            carregaEncontro();
        }
    }

    vm.comentario = function() {

    }

})
