app.controller('perfilPagCtrl', function($scope, $ionicPopup, $timeout, localStorage, $http, $window, carregando, $ionicModal) {    
  

  $scope.perfil = localStorage.getObject('perfil');
    
    
    
/*-----------------------------FOTO HORIZONTAIS*/ 
    
    $scope.fotos = [
        {valor:1, url:'img/teste/1.jpg', funcao: 'changeImg1()'},
        {valor:2, url:'img/teste/2.jpg', funcao: 'changeImg2()'},
        {valor:3, url:'img/teste/3.jpg', funcao: 'changeImg3()'},
        {valor:4, url:'img/teste/4.jpg', funcao: 'changeImg4()'},
        {valor:5, url:'img/teste/5.jpg', funcao: 'changeImg5()'}                
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
  };
    
/*------------------------------------POPUP PARA OPCOES*/
    
    
$scope.popupOpcoes = function() {
  $scope.data = {}; 
  var myPopup = $ionicPopup.show({
    template: '<ion-list>                           '+
               '  <i class="button button-full popupperfilbot" ng-click=""> '+
               '    Editar Página                             '+
               '  </i>                             '+
               '  <i class="button button-full popupperfilbot" ng-click=""> '+
               '    Denunciar                             '+
               '  </i>                             '+
               '  <i class="button button-full  popupperfilbot" ng-click=""> '+
               '    Enviar Mensagem                          '+
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


app.controller('reviewCtrl', function($scope){
    


$scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(200, 200, 100)',  //Optional
        iconOffColor:  'rgb(255, 255, 255)',    //Optional
        rating:  2, //Optional
        minRating:1,    //Optional
        readOnly: true, //Optional
        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };
  
      $scope.ratingsCallback = function(rating, index) {
        console.log('Selected rating is : ', rating, ' and the index is : ', index);
      };
    
});


app.controller('comentCrl', function($scope){
$scope.coments = [
    {avatar:'img/teste/5.jpg', nome:'Gustavo', comentario:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', data:'ontem, 23h'},
    {avatar:'img/teste/6.jpg', nome:'Irian', comentario:'Aliquid in excepturi ex nobis, deleniti id iste ducimus fugiat', data:'hoje, 17h'},
    {avatar:'img/teste/7.jpg', nome:'Juliana', comentario:'iusto! Quisquam facere aspernatur.', data:'hoje, 19h'}
]
});