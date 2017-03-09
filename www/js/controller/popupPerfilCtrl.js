app.controller('popupPerfilCtrl', function($scope, $ionicPopup, $timeout, localStorage, $http, $window, carregando) {    
  

  $scope.perfil = localStorage.getObject('perfil');
  $scope.imgback = 'img/teste/1.jpg';
  $scope.changeImg1 = function () {
    $scope.imgback = 'img/teste/1.jpg';
  };$scope.changeImg2 = function () {
    $scope.imgback = 'img/teste/2.jpg';
  };$scope.changeImg3 = function () {
    $scope.imgback = 'img/teste/3.jpg';
  };$scope.changeImg4 = function () {
    $scope.imgback = 'img/teste/4.jpg';
  };$scope.changeImg5 = function () {
    $scope.imgback = 'img/teste/5.jpg';
  };$scope.changeImg6 = function () {
    $scope.imgback = 'img/teste/6.jpg';
  };$scope.changeImg7 = function () {
    $scope.imgback = 'img/teste/7.jpg';
  };$scope.changeImg8 = function () {
    $scope.imgback = 'img/teste/1.jpg';
  };$scope.changeImg9 = function () {
    $scope.imgback = 'img/teste/2.jpg';
  };$scope.changeImg10 = function () {
    $scope.imgback = 'img/teste/3.jpg';
  };$scope.changeImg11 = function () {
    $scope.imgback = 'img/teste/4.jpg';
  };$scope.changeImg12 = function () {
    $scope.imgback = 'img/teste/5.jpg';
  };$scope.changeImg13 = function () {
    $scope.imgback = 'img/teste/6.jpg';
  };$scope.changeImg14 = function () {
    $scope.imgback = 'img/teste/7.jpg';
  };$scope.changeImg15 = function () {
    $scope.imgback = 'img/teste/1.jpg';
  };
  
// Triggered on a button click, or some other target
$scope.popupPerfil = function() {
  $scope.data = {};
   

  // An elaborate, custom popup
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
  /*$timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 5000);*/
 };

$scope.imginstaFull = function() {
  $scope.data = {};
  $scope.imgFull = 'img/teste/insta1.jpg';
    

  // An elaborate, custom popup
  var myImg = $ionicPopup.show({
    template: '<ion-list style="color:black;">'+
                    '<img style="height:67vw; width:90%; border-radius:10px; margin:5%; background-image:url({{imgFull}});">'+   
                '</ion-list>',                                     
    buttons: [    
      {  
        text: '<i class="icon button-icon ion-ios-close-outline"></i>',
		type:'popclose',
          
      }
    ]
  });
  /*$timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 5000);*/
 };

    
    
    
    
    
});