app.controller('PreferenciasCtrl', ['$scope', 'PreferenciasService', '$stateParams', function ($scope, PreferenciasService, $stateParams) {
	
	$scope.preferencias = PreferenciasService.getPreferencias();

}]);