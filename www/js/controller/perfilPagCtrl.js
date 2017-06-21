app.controller('perfilPagCtrl', function($scope, $ionicPopup, $timeout, $http, $window, carregando, $ionicModal, $rootScope, carregando) {
    vm = $scope;

    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    regVisualizacao();
    carregaLocal();

    function regVisualizacao() {
        var req = {
            method: 'POST',
            url: rotas.pagina.visualizacao,
            data: {
                "id_perfil":    vm.perfil.id_perfil,
                "id_tipo":      $rootScope.id_local,
                "tipo":         'id_local'
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            console.log(s);
        }
    }

    function carregaLocal() {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.local,
            data: {
                "tipo":     "local",
                "id_local": $rootScope.id_local
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
            vm.local = s.data;
            console.log(vm.local);
        }
    }
    
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
               '  <i class="button button-full popupperfilbot"> '+
               '    Editar Página                             '+
               '  </i>                             '+
               '  <i> '+
               '    <button class="button button-full popupperfilbot" ng-click="denunciar()">Denunciar</button>                             '+
               '  </i>                             '+
               '  <i class="button button-full  popupperfilbot"> '+
               '    Enviar Mensagem                          '+
               '  </i>                             '+
               '  <i class="button button-full  popupperfilbot" ng-click="notifica('+$rootScope.id_local+', \'id_local\')"> '+
               '    Desligar Notificacoes                 '+
               '  </i>                             '+
               '</ion-list>                               ',
    scope: vm,
    buttons: [    
      {  
        text: '<i class="icon button-icon ion-ios-close-outline"></i>',
		type:'popclose'
      }

    ]
  });
 };

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

    vm.comentar = function() {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.comentario,
            data: {
                "acao":         "novo",
                "tipo":         "id_local",
                "comentario":   vm.txt_comentario,
                "id_tipo":      $rootScope.id_local,
                "id_perfil":    vm.perfil.id_perfil
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
        }
    }

    vm.curtida = function(id_tipo, tipo) {
        carregando.show();
        var req = {
            method: 'POST',
            url: rotas.pagina.curtida,
            data: {
                "id_perfil":    vm.perfil.id_perfil,
                "id_tipo":      $rootScope.id_local,
                "tipo":         'id_local'
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
        }
    }

    vm.denunciar = function() {
        console.log("ok");
    }
});


app.controller('reviewCtrl', function($scope, carregando, $rootScope, $http){

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
          carregando.show();
          var req = {
              method: 'POST',
              url: rotas.pagina.avaliacao,
              data: {
                  "id_perfil":    vm.perfil.id_perfil,
                  "id_tipo":      $rootScope.id_local,
                  "tipo":         'id_local',
                  "avaliacao":    rating
              }
          }

          $http(req).then(sucesso);

          function sucesso(s) {
              carregando.hide();
          }
      };
    
});


app.controller('comentCrl', function($scope){
$scope.coments = [
    {avatar:'img/teste/5.jpg', nome:'Gustavo', comentario:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', data:'ontem, 23h'},
    {avatar:'img/teste/6.jpg', nome:'Irian', comentario:'Aliquid in excepturi ex nobis, deleniti id iste ducimus fugiat', data:'hoje, 17h'},
    {avatar:'img/teste/7.jpg', nome:'Juliana', comentario:'iusto! Quisquam facere aspernatur.', data:'hoje, 19h'}
]
});

app.controller('editaPagCtrl', function($scope){
    
    
  $scope.class = "icon-pequeno-apaga ion-close-circled";
  $scope.background = "fotoedita-pequena";
  $scope.classG = "icon-grande-apaga ion-close-circled";
  $scope.backgroundG = "fotoedita-grande";
    
  $scope.changeClass = function(){
    if ($scope.class === "icon-pequeno-apaga ion-close-circled"){
      $scope.class = "icon-pequeno-inclui ion-plus-circled";
      $scope.background = "fotoedita-pequena-vazia";
    }else{
      $scope.class = "icon-pequeno-apaga ion-close-circled";
      $scope.background = "fotoedita-pequena";
    }
  };
    
  $scope.changeClassG = function(){
    if ($scope.classG === "icon-grande-apaga ion-close-circled"){
      $scope.classG = "icon-pequeno-inclui ion-plus-circled";
      $scope.backgroundG = "fotoedita-grande-vazia";
    }else{
      $scope.classG = "icon-grande-apaga ion-close-circled";
      $scope.backgroundG = "fotoedita-grande";
    }
  };
    
});


app.controller('imgMsgCtrl', function($scope){
    $scope.images = [
        {url:'img/teste/gus2016.jpg'}, 
        {url:'img/teste/1.jpg'}, 
        {url:'img/teste/2.jpg'}
    ]
    
    $scope.addImg = function(){
        // completar com os dados do Back.
    }
    
    $scope.removeImg = function(){
        // completar com os dados do Back.
    }
})
