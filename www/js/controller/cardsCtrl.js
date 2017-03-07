app.controller('cardsCtrl', function($scope, TDCardDelegate) {
  console.log('CARDS CTRL');
  var cardTypes = [
    {image: '../img/teste/gus2016.jpg', title: 'Gustavo, 29'},{image: '../img/teste/gus2016.jpg', title: 'Gustavo, 29'},{image: '../img/teste/gus2016.jpg', title: 'Gustavo, 29'},
  ];

  $scope.cards = [];

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
 
    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
    }
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
});