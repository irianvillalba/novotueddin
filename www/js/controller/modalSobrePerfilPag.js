app.controller('modalSobreCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('/templates/modal/PagPerfilSobre.html', {
        scope:$scope,
        animation:'slide-in-up'
    }).then(function(modal){
        $scope.sobre_modal = modal;
    });
    
    $scope.showSobre = function(){
        $scope.sobre_modal.show();
    }
    
});

