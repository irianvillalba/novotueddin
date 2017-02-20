app.controller('popupPerfilCtrl', function($scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
$scope.popupPerfil = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<ion-list>                           '+
               '  <ion-item class="button button-full" style="border-radius: 5%; background-color: transparent; border: 0; border-bottom:1px white solid" ng-click=""> '+
               '    Bloquear                              '+
               '  </ion-item>                             '+
               '  <ion-item class="button button-full" style="border-radius: 5%; background-color: transparent; border: 0; border-bottom:1px white solid" ng-click=""> '+
               '    Denunciar                             '+
               '  </ion-item>                             '+
               '  <ion-item class="button button-full" style="border-radius: 5%; background-color: transparent; border: 0; border-bottom:1px white solid;" ng-click=""> '+
               '    Descombinar                           '+
               '  </ion-item>                             '+
               '  <ion-item class="button button-full" style="border-radius: 5%; background-color: transparent; border: 0; border-bottom:1px white solid" ng-click=""> '+
               '    Desligar Notificacoes                 '+
               '  </ion-item>                             '+
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
    
});