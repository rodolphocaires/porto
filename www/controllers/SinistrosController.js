app.controller('SinistrosCtrl', ['$scope', 'SinistroService', '$ionicModal', '$stateParams', function ($scope, SinistroService, $ionicModal, $stateParams) {
	$scope.sinistros = SinistroService.getSinistros();

	$ionicModal.fromTemplateUrl('templates/novo-sinistro.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.novoSinistroModal = modal;
	});
	
	
	
	
		// Detalhes sinistro
	var sinistroId = $stateParams.sinistroId;
	if(sinistroId){
		$scope.sinistro =  SinistroService.getSinistro(sinistroId);	
	}
	
	
}]);