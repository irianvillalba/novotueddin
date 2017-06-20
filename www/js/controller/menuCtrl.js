app.controller('menuCtrl', function($scope, $rootScope, $http, $window) {
  var vm = $scope;

    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    console.log(vm.perfil);

})
