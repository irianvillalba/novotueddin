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

//CARD PONTO DE ENCONTRO
app.directive('cardPontoenc', [function(){
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

//CARD LOCAIS
app.directive('cardLocais', [function(){
    var ddo={};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope={
        titulo: '@titulo',
        imagem: '@imagem',
        local: '@local',
    }
    ddo.templateUrl='/templates/card/cardLocais.html';
    return ddo;
}]);

app.directive('cardTur', [function(){
    var ddo={};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope={
        titulo: '@titulo',
        imagem: '@imagem',
        local: '@local',
    }
    ddo.templateUrl='/templates/card/cardTuristico.html';
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

app.directive('comentarioCard', [function(){
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        avatar: '@avatar',
        nome: '@nome',
        mensagem: '@mensagem',
        hora: '@hora'
    }
    
    ddo.templateUrl = '/templates/card/cardChatComent.html';
    return ddo;
}]);

app.directive('respostaCard', [function(){
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        avatar: '@avatar',
        nome: '@nome',
        resposta: '@resposta',
        hora: '@hora'
    }
    
    ddo.templateUrl = '/templates/card/cardChatResposta.html';
    return ddo;
}]);

app.directive('footerTueddin', [function(){
    var ddo= {};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        
    }
    
    ddo.templateUrl = '/templates/card/footerTueddin.html';
    
    return ddo;
}]);

app.directive('imgMsg', [function(){
    var ddo= {};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
        url :'@url',
    }
    
    ddo.templateUrl = '/templates/card/imgMensagem.html';
    
    return ddo;
}]);

