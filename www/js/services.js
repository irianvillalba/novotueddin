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
}])

app.service('authService', authService);

    authService.$inject = ['$rootScope', 'angularAuth0', 'authManager', 'jwtHelper', '$location', '$ionicPopup', '$http', '$window'];

    function authService($rootScope, angularAuth0, authManager, jwtHelper, $location, $ionicPopup, $http, $window) {

        function login(username, password) {
            angularAuth0.login({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                popup: true,
                email: username,
                password: password
            }, onAuthenticated, null);
        }

        function signup(username, password) {
            angularAuth0.signup({
                connection: 'Username-Password-Authentication',
                responseType: 'token',
                popup: true,
                email: username,
                password: password
            }, onAuthenticated, null);
        }

        function loginWithFacebook() {
            angularAuth0.login({
                connection: 'facebook',
                responseType: 'token',
                popup: true
            }, onAuthenticated, null);
        }

        function loginWithInstagram() {
            angularAuth0.login({
                connection: 'instagram',
                responseType: 'token',
                popup: true
            }, onAuthenticated, null);
        }

        function loginWithTwitter() {
            angularAuth0.login({
                connection: 'twitter',
                responseType: 'token',
                popup: true
            }, onAuthenticated, null);
        }


        // Logging out just requires removing the user's
        // id_token and profile
        function logout() {
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            authManager.unauthenticate();
            userProfile = {};
        }

        function authenticateAndGetProfile() {
            var result = angularAuth0.parseHash(window.location.hash);

            if (result && result.idToken) {
                onAuthenticated(null, result);
            } else if (result && result.error) {
                onAuthenticated(result.error);
            }
        }

        function onAuthenticated(error, authResult) {
            if (error) {
                return $ionicPopup.alert({
                    title: 'Login failed!',
                    template: error
                });
            }

            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();

            angularAuth0.getProfile(authResult.idToken, function (error, profileData) {

                var req = {
                    method: 'POST',
                    url: rotas.route_perfil.perfil,
                    data: {
                        perfil: profileData,
                        situacao: "adiciona"
                    }
                }

                $http(req).then(sucesso);

                function sucesso(s) {
                    localStorage.setItem('perfil', JSON.stringify(s.data));
                    if (typeof(s.data.existe) == 'undefined') {
                        $window.location = "#/cadastro"
                    } else {
                        $window.location = "#/mainmenu";
                    }
                }

                if (error) {
                    return console.log(error);
                }

            });
        }

        function checkAuthOnRefresh() {
            var token = localStorage.getItem('id_token');
            if (token) {
                if (!jwtHelper.isTokenExpired(token)) {
                    if (!$rootScope.isAuthenticated) {
                        authManager.authenticate();
                    }
                }
            }
        }

        return {
            login: login,
            logout: logout,
            signup: signup,
            loginWithFacebook: loginWithFacebook,
            loginWithInstagram: loginWithInstagram,
            loginWithTwitter: loginWithTwitter,
            checkAuthOnRefresh: checkAuthOnRefresh,
            authenticateAndGetProfile: authenticateAndGetProfile
        }
    }



/*app.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }   } 

}]);*/
