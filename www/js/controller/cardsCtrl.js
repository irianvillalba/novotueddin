app.controller('cardsCtrl', function($scope, TDCardDelegate, $ionicModal) {
  console.log('CARDS CTRL');
  var cardTypes = [
    {image: 'img/teste/1.jpg', title: 'Gustavo, 29'},
    {image: 'img/teste/2.jpg', title: 'Gustavo, 29'},
    {image: 'img/teste/3.jpg', title: 'Gustavo, 29'},
  ];

  $scope.cards = [];
    
    $ionicModal.fromTemplateUrl('templates/modalcombinacao.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

  console.log('Cards', $scope.cards);

  $scope.addCard = function(i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
 
    for(var i = 0; i < 3; i++) $scope.addCard();
 
    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
    }
 
    $scope.cardSwipedRight = function(modal) {
        console.log('Right swipe');  
        $scope.modal = modal.show;
    }
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
    
    
     
    
    
});