
var app = angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

  // Each tab has its own nav history stack:


  .state('mainmenu', {
    url: '/mainmenu',
	templateUrl: 'templates/mainmenu.html'
  })

  .state('perfil', {
    url: '/perfil',
	templateUrl: 'templates/perfil.html'
  })

  .state('userconfig', {
    url: '/userconfig',
	templateUrl: 'templates/userconfig.html'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html'
  })

.state('match1', {
    url: '/match1',
    templateUrl: 'templates/match1.html'
  })
  
.state('match2', {
    url: '/match2',
    templateUrl: 'templates/match2.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
