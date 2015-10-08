app.controller('CorretorCtrl', ['$scope', 'CorretorService', '$stateParams', function ($scope, CorretorService, $stateParams) {
	
	
	
	$scope.corretores = CorretorService.getCorretores();
	
	// Detalhes Corretor
	var corretorId = $stateParams.corretorId;
	if(corretorId){
		$scope.corretor =  CorretorService.getCorretor(corretorId);	
	}
	
}]);