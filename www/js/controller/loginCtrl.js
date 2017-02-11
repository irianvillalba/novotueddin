app.controller('loginCtrl', function($scope, $http, $window, $q, localStorage, carregando, $ionicLoading) {
  var vm = $scope;

  ionic.Platform.ready(function() {

    var fbLoginSuccess = function(response) {

      if (!response.authResponse){
        fbLoginError("Cannot find the authResponse");
        return;
      }

      var authResponse = response.authResponse;

      getFacebookProfileInfo(authResponse)
        .then(function(profileInfo) {
          console.log(profileInfo);
          $ionicLoading.hide();
        }, function(fail){
          // Fail get profile info
          console.log('profile info fail', fail);
        });
    };

    var fbLoginError = function(error){
      console.log('fbLoginError', error);
      $ionicLoading.hide();
    };

    var getFacebookProfileInfo = function (authResponse) {
      var info = $q.defer();

      facebookConnectPlugin.api('/me?fields=id,gender,email,name,picture&access_token=' + authResponse.accessToken, null,
        function (response) {
          info.resolve(response);
        },
        function (response) {
          info.reject(response);
        }
      );
      return info.promise;
    };

    vm.loginFacebook = function() {
      facebookConnectPlugin.getLoginStatus(function(success){
        if(success.status === 'connected'){

          getFacebookProfileInfo(success.authResponse)
            .then(function(profileInfo) {
              console.log(profileInfo);
              var req = {
                method: 'POST',
                url: rotas.route_perfil.perfil,
                data: {
                  perfil: profileInfo,
                  redesocial: 'facebook',
                  situacao: "adiciona"
                }
              }

              $http(req).then(sucesso);

              function sucesso(s) {
                localStorage.setObject('perfil', s.data);
                if (typeof(s.data.existe) == 'undefined') {
                  $window.location = "#/cadastro"
                } else {
                  $window.location = "#/mainmenu";
                }
              }

            }, function(fail){
              // Fail get profile info
              console.log('Erro ao retornar o perfil ', fail);
            });

        } else {
          $ionicLoading.show({
            template: 'Carregando...'
          });
          facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
        }
      });
    };
  })
/*
  // AUTENTICAÇÃO COM TWITTER
  vm.loginTwitter = function() {
    provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  // AUTENTICAÇÃO COM GOOGLE+
  vm.loginGoogle = function() {
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
*/
})
