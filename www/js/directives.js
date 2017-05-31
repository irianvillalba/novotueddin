app.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

app.directive('myTouchstart', [function() {
  return function(scope, element, attr) {

    element.on('touchstart', function(event) {
      scope.$apply(function() {
        scope.$eval(attr.myTouchstart);
      });
    });
  };
}]);

app.directive('myTouchend', [function() {
  return function(scope, element, attr) {

    element.on('touchend', function(event) {
      scope.$apply(function() {
        scope.$eval(attr.myTouchend);
      });
    });
  };
}]);


app.directive('tueddinCard', [function(){
    var ddo={};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope={
        titulo: '@titulo',
        logo: '@logo',
        imagem: '@imagem',
        local: '@local' 
    }
    ddo.templateUrl = '/templates/card/cardPontoEnc.html';
    return ddo;
}]);

app.directive('comentPag',[function(){
    var ddo={};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope={
        avatar: '@avatar',
        nome:'@nome',
        comentario: '@comentario',
        data:'@data'
    }
    ddo.templateUrl = '/templates/card/cardComentPag.html';
    return ddo;
}]);
