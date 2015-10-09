app.controller('ApoliceSinistroCtrl', ['$scope', 'ApoliceService', '$stateParams', function ($scope, ApoliceService, $stateParams) {
	
	$scope.apolices = ApoliceService.getApolices();
	
}]);;