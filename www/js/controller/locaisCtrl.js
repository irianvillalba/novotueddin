app.controller('locaisCtrl', function($scope, $http, $window, carregando, $ionicPopup, $state, $rootScope) {
    var vm = $scope;

    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    function carregaLocais() {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.local,
            data: {
                "tipo": "lista"
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            vm.locais = s.data;
        }
    }

    carregaLocais();

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
            var msg = "";
            if (s.data == 'adicionado')
                msg = 'Você será notificado das atualizações desse local';
            else
                msg = "A notificação foi desligada";
            $ionicPopup.alert({
                title: 'Tueddin',
                template: msg
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
            var msg = "";
            if (s.data == 'adicionado')
                msg = 'Este local foi adicionado aos favoritos';
            else
                msg = "Este local foi excluido dos favoritos";
            $ionicPopup.alert({
                title: 'Tueddin',
                template: msg
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
            carregaLocais();
        }
    }

    vm.comentario = function() {

    }

    vm.abrirPagina = function(id) {
        $rootScope.id_local = id;
        window.location = "#/perfilpag";
    }

})
