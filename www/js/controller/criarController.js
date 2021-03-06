app.controller('dataCtrl', function ($scope, $http, $window, carregando, ionicDatePicker) {
    $scope.datePickerDias;
    $scope.datePickerTermina = function (val) {
        var ipObj1 = {
            callback: function (val) { //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                $scope.datePickerDias = new Date(val);
                $scope.paginas.datatermina = $scope.datePickerDias;
            }
            , inputDate: new Date()
            , titleLabel: 'Selecione uma data'
            , setLabel: 'Fixar'
            , todayLabel: 'Hoje'
            , closeLabel: 'Fechar'
            , mondayFirst: false
            , weeksList: ["D", "S", "T", "Q", "Q", "S", "S"]
            , monthsList: ["Jan", "Fev", "Mar", "Abril", "Maio", "Jun", "Jul", "Ago", "Sete", "Out", "Nov", "Dez"]
            , templateType: 'popup'
            , from: new Date(2017, 1, 1)
            , to: new Date(2018, 31, 12)
            , showTodayButton: true
            , dateFormat: 'dd MMMM yyyy'
            , closeOnSelect: true
            , disableWeekdays: []
        };
        ionicDatePicker.openDatePicker(ipObj1);
    };
});

app.controller('horaCtrl', function ($scope, ionicTimePicker) {
    $scope.finalTime;
    $scope.openTimePicker1 = function () {
        var ipObj1 = {
            callback: function (val) {
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                }
                else {
                    var selectedTime = new Date(val * 1000);
                    $scope.finalTime = (selectedTime.getUTCHours() + 'h:' + selectedTime.getUTCMinutes() + 'm');
                    $scope.paginas.horatermina = $scope.finalTime;
                }
            }
            , inputTime: 50400
            , format: 24
            , step: 10
        };
        ionicTimePicker.openTimePicker(ipObj1);
    };
});


app.controller('imgController', function ($scope, $cordovaCamera, $cordovaFile) {

    $scope.addImage = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
});

app.controller('gerarPagina', function($scope, $http, carregando){
    vm = $scope;

    vm.paginas = {};
    vm.perfil = JSON.parse(localStorage.getItem('perfil'));

    vm.criarPagina = function() {
        carregando.show();
        vm.paginas.id_perfil = vm.perfil.id_perfil;
        var req = {
            method: 'POST',
            url: rotas.pagina.pagina,
            data: {
                situacao: "novo",
                tipo: vm.paginas.categoria,
                pagina: vm.paginas
            }
        }

        $http(req).then(sucesso);

        function sucesso(s) {
            carregando.hide();
        }

    }
});

app.controller('modalMapa', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('/templates/modal/googlemaps.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.maps_modal = modal;
  });
    
    $scope.showMaps = function(){
        $scope.maps_modal.show();
    }
})
