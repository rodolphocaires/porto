app.controller('SinistrosCtrl', ['$scope', 'SinistroService', '$ionicModal', '$stateParams',function ($scope, SinistroService, $ionicModal, $stateParams) {

	$scope.sinistros = SinistroService.getSinistros();

}]);
