app.controller('explorarCtrl', function($scope, $ionicModal, $window, $http) {
    var vm = $scope;

    var req = {
        method: 'POST',
        url: rotas.pagina.categoria
    }

    $http(req).then(sucesso);

    function sucesso(s) {
        vm.categorias = s.data;
    }

    vm.explorar = function(id) {
        console.log(id);
    }
})