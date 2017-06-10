
var app = angular.module('starter', ['ionic', 'firebase', 'ngCordova', 'ionic.contrib.ui.tinderCards', 'ionic-datepicker', 'ionic-timepicker', 'ui.utils.masks', 'ionic-ratings'])

app.run(function($ionicPlatform){
   
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
      
.state('listaperfil', {
    url: '/listaperfil',
	templateUrl: 'templates/listaperfil.html'
  })

  .state('cadastro', {
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html'
  })
    
.state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html'
  })
      
  .state('locais', {
    url: '/locais',
    templateUrl: 'templates/locais.html'
  })
    
  .state('turistico', {
    url: '/turistico',
    templateUrl: 'templates/turistico.html'
  })
    
  .state('criar', {
    url: '/criar',
    templateUrl: 'templates/criar.html'
  })
      
  .state('pontoenc', {
    url: '/pontoenc',
    templateUrl: 'templates/pontoenc.html'
  })
      
  .state('perfilpag', {
    url: '/perfilpag',
    templateUrl: 'templates/perfilpag.html',
      controller: 'perfilPagCtrl'
  })

  .state('perfilPagEdita', {
      url:'/perfilPagEdita',
      templateUrl: 'templates/perfilPagEdita.html',
  })

  .state('explorar', {
    url: '/explorar',
    templateUrl: 'templates/explorar.html'
  })
  
 .state('conversas', {
    url: '/conversas',
    templateUrl: 'templates/conversas.html'
  })

  .state('novaMensagem', {
    url: '/novaMensagem',
    templateUrl: 'templates/novaMensagem.html'
  })
  
  .state('modalPerfil', {
    url: '/modalPerfil',
    templateUrl: 'templates/modalPerfil.html'
  })
  
  .state('modalcombinaca', {
      url:'/modalcombinacao',
      templateUrl: 'templates/modalcombinacao.html'
  })
    
  .state('pesquisar', {
      url:'/pesquisar',
      templateUrl: 'templates/pesquisar.html'
  })
    
.state('timeline', {
    url: '/timeline',
    templateUrl: 'templates/timeline.html'
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
