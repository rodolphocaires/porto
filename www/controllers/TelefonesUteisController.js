app.controller('TelefonesUteisCtrl', ['$scope', 'TelefonesUteisService', '$stateParams', function ($scope, TelefonesUteisService, $stateParams) {




	$scope.telefonesUteis = TelefonesUteisService.getTelefonesUteis();

	console.log($scope.telefonesUteis);

	$scope.realizarChamadaTelefonica = function(numero){
		console.log(numero);
		window.plugins.CallNumber.callNumber(function(){
			console.log('Ligação OK');
		}, function(){
			console.log('Ligação Falhou');
		}, numero);

	}



}]);
