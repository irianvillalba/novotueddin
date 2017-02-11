app.controller('menuCtrl', function($scope, $http, $window, localStorage) {
  var vm = $scope;

  vm.perfil = localStorage.getObject('perfil');

})
