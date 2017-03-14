app.controller('footCtrl', function($scope, $ionicScrollDelegate, $rootScope) {
  $rootScope.slideHeader = true;
  $rootScope.slideHeaderPrevious = 0;
})

.directive('scrollWatch', function($rootScope) {
  return function(scope, elem, attr) {
    var start = 0;
    var threshold = 150;
    
    elem.bind('scrollfoot', function(e) {
      if(e.detail.scrollTop - start > threshold) {
        $rootScope.slideHeader = false;
      } else {
        $rootScope.slideHeader = true;
      }
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        $rootScope.slideHeader = false;
      }
      $rootScope.slideHeaderPrevious = e.detail.scrollTop- start;
      $rootScope.$apply();
    });
  };
})
