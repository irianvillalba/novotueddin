app.controller('modalComentariosCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('/templates/modal/pagcomentarios.html',{
        scope:$scope,
        animation:'slide-in-up'
    }).then(function(modal){
        $scope.coment_modal = modal;
    });
    
    $scope.showComent = function(){
        $scope.coment_modal.show();
    }
    
});

app.controller('popupComent', function($scope, $ionicPopup){
  $scope.popupOpcoes = function() {
  $scope.data = {}; 
  var myPopup = $ionicPopup.show({
    templateUrl: 'templates/popup/popupComentarios.html',
    buttons: [    
      {  
        text: '<i class="icon button-icon ion-ios-close-outline"></i>',
		type:'popclose',          
      }
    ]
  });
 };
});

app.controller('comentConteudo', function($scope){
    
    $scope.conteudo = [
        {nome: 'Teste 1', avatar:'img/teste/gus2016.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
        {nome: 'Teste 2', avatar:'img/teste/1.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
        {nome: 'Teste 3', avatar:'img/teste/2.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
        {nome: 'Teste 4', avatar:'img/teste/3.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
        {nome: 'Teste 5', avatar:'img/teste/2.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
        {nome: 'Teste 6', avatar:'img/teste/3.jpg', mensagem:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 15h50'},
    ]
    
    $scope.resposta = [
        {nome: 'Teste 5', avatar:'img/teste/gus2016.jpg', resposta:'sodif jlsdk lsdk sdlkjlkdsf lksdj', hora:'Hoje, 16h50'},
    ]
    
});