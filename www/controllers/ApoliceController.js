app.controller('ApoliceCtrl', ['$scope', 'ApoliceService', '$stateParams', function ($scope, ApoliceService, $stateParams) {
	
	
	
	$scope.apolices = ApoliceService.getApolices();
	
	// Detalhes apolice
	var apoliceId = $stateParams.apoliceId;
	if(apoliceId){
		$scope.apolice =  ApoliceService.getApolice(apoliceId);	
	}
	
}]);