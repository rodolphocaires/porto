app.controller('SinistrosCtrl', ['$scope', 'SinistroService', '$ionicModal', function ($scope, SinistroService, $ionicModal) {
	$scope.sinistros = SinistroService.getSinistros();

	$ionicModal.fromTemplateUrl('templates/novo-sinistro.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.novoSinistroModal = modal;
	});
}]);