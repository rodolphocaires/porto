app.controller('ApoliceCtrl', ['$scope', 'ApoliceService', function ($scope, ApoliceService) {
	$scope.apolices = ApoliceService.getApolices();
}]);