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
