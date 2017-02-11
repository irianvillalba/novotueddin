app.factory('localStorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);

app.factory('carregando', ['$ionicLoading', function($ionicLoading) {
  return {
    show: function() {
      $ionicLoading.show({
        template: '<ion-spinner icon="spiral"></ion-spinner><br/>'
      })
    },
    hide: function () {
      $ionicLoading.hide();
    }
  }
}]);
