app.controller('popupPerfilCtrl', function($scope, $ionicPopup, $timeout, localStorage, $http, $window, carregando, $ionicModal) {    
  

  $scope.perfil = localStorage.getObject('perfil');
    
    
    
/*-----------------------------FOTO HORIZONTAIS*/ 
    
    $scope.fotos = [
        {valor:1, url:'img/teste/1.jpg', funcao: 'changeImg1()'},
        {valor:2, url:'img/teste/2.jpg', funcao: 'changeImg2()'},
        {valor:3, url:'img/teste/3.jpg', funcao: 'changeImg3()'},
        {valor:4, url:'img/teste/4.jpg', funcao: 'changeImg4()'},
        {valor:5, url:'img/teste/5.jpg', funcao: 'changeImg5()'},
        {valor:6, url:'img/teste/6.jpg', funcao: 'changeImg6()'},
        {valor:7, url:'img/teste/7.jpg', funcao: 'changeImg7()'}                 
    ]

/*---------------------------------------MUDA FOTO DE PERFIL*/
    
    
    
  $scope.imgBack = 'img/teste/1.jpg';
  $scope.changeImg1 = function () {
    $scope.imgBack = 'img/teste/1.jpg';
  };$scope.changeImg2 = function () {
    $scope.imgBack = 'img/teste/2.jpg';
  };$scope.changeImg3 = function () {
    $scope.imgBack = 'img/teste/3.jpg';
  };$scope.changeImg4 = function () {
    $scope.imgBack = 'img/teste/4.jpg';
  };$scope.changeImg5 = function () {
    $scope.imgBack = 'img/teste/5.jpg';
  };$scope.changeImg6 = function () {
    $scope.imgBack = 'img/teste/6.jpg';
  };$scope.changeImg7 = function () {
    $scope.imgBack = 'img/teste/7.jpg';
  };$scope.changeImg8 = function () {
    $scope.imgBack = 'img/teste/1.jpg';
  };$scope.changeImg9 = function () {
    $scope.imgBack = 'img/teste/2.jpg';
  };$scope.changeImg10 = function () {
    $scope.imgBack = 'img/teste/3.jpg';
  };$scope.changeImg11 = function () {
    $scope.imgBack = 'img/teste/4.jpg';
  };$scope.changeImg12 = function () {
    $scope.imgBack = 'img/teste/5.jpg';
  };$scope.changeImg13 = function () {
    $scope.imgBack = 'img/teste/6.jpg';
  };$scope.changeImg14 = function () {
    $scope.imgBack = 'img/teste/7.jpg';
  };
  
    
/*-------------------------------------MOSTRA FOTO FULL*/    
    
$scope.imgFull = 'img/teste/insta1.jpg';
          $scope.changeinstaImg1 = function () {
            $scope.imgFull = 'img/teste/insta2.jpg';
          };$scope.changeinstaImg2 = function () {
            $scope.imgFull = 'img/teste/insta2.jpg';
          };$scope.changeinstaImg3 = function () {
            $scope.imgFull = 'img/teste/insta3.jpg';
          };$scope.changeinstaImg4 = function () {
            $scope.imgFull = 'img/teste/insta4.jpg';
          };$scope.changeinstaImg5 = function () {
            $scope.imgFull = 'img/teste/insta5.jpg';
          };$scope.changeinstaImg6 = function () {
            $scope.imgFull = 'img/teste/insta6.jpg';
          };$scope.changeinstaImg7 = function () {
            $scope.imgFull = 'img/teste/insta7.jpg';
          };$scope.changeinstaImg8 = function () {
            $scope.imgFull = 'img/teste/insta8.jpg';
          };$scope.changeinstaImg9 = function () {
            $scope.imgFull = 'img/teste/insta9.jpg';
          };

    
    
    
/*----------------------------------------FOTOS INSTAGRAM*/
    $scope.instagram = [
        {valor:1, url:'img/teste/insta1.jpg'},
        {valor:2, url:'img/teste/insta2.jpg'},
        {valor:3, url:'img/teste/insta3.jpg'},
        {valor:4, url:'img/teste/insta4.jpg'},
        {valor:5, url:'img/teste/insta5.jpg'},
        {valor:6, url:'img/teste/insta6.jpg'},
        {valor:7, url:'img/teste/insta7.jpg'},
        {valor:8, url:'img/teste/insta8.jpg'},
        {valor:9, url:'img/teste/insta9.jpg'},
 
    ]
    
    $ionicModal.fromTemplateUrl('templates/modalPerfil.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

/*------------------------------------ALTERA TEXTO*/    
    $scope.textos = 'Insira um texto novo aqui.Insira um texto novo aqui.Insira um texto novo aqui.';
        
    $scope.mudaTexto = function() { 
        $scope.novoTexto = null;
        $scope.textos.push(novoTexto);
            $scope.textos = novoTexto;
  };
  
/*------------------------------------POPUP PARA OPCOES*/
    
    
$scope.popupOpcoes = function() {
  $scope.data = {}; 
  var myPopup = $ionicPopup.show({
    template: '<ion-list>                           '+
               '  <i class="button button-full popupperfilbot" ng-click=""> '+
               '    Bloquear                              '+
               '  </i>                             '+
               '  <i class="button button-full popupperfilbot" ng-click=""> '+
               '    Denunciar                             '+
               '  </i>                             '+
               '  <i class="button button-full  popupperfilbot" ng-click=""> '+
               '    Descombinar                           '+
               '  </i>                             '+
               '  <i class="button button-full  popupperfilbot" ng-click=""> '+
               '    Desligar Notificacoes                 '+
               '  </i>                             '+
               '</ion-list>                               ',
    buttons: [    
      {  
        text: '<i class="icon button-icon ion-ios-close-outline"></i>',
		type:'popclose',          
      }
    ]
  });
 };
    
    
    
});