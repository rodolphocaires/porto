app.controller('DetalheApoliceCtrl', ['$scope', 'ApoliceService', '$stateParams', function ($scope, ApoliceService, $stateParams) {
	
	// Detalhes apolice
	var apoliceId = $stateParams.apoliceId;
	if(apoliceId){
		$scope.apolice =  ApoliceService.getApolice(apoliceId);	
	}
	
}]);