app.controller('DetalheSinistroCtrl', ['$scope', 'SinistroService', '$ionicModal', '$stateParams', function ($scope, SinistroService, $ionicModal, $stateParams) {

		// Detalhes sinistro
	var sinistroId = $stateParams.sinistroId;
	if(sinistroId){
		$scope.sinistro =  SinistroService.getSinistro(sinistroId);	
	}
	
	
}]);