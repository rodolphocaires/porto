app.controller('UtilitariosCtrl', ['$scope', 'UtilitariosService', '$stateParams', function ($scope, UtilitariosService, $stateParams) {




	 $scope.ipvas = UtilitariosService.getIpvas();
	 $scope.rodizios = UtilitariosService.getRodizios();

	 console.log($scope.ipvas);

	$scope.gasAlcool = false;
	$scope.ipva = false;
	$scope.rodizio = false;
	$scope.gasolina = false;
	$scope.alcool = false;

	$scope.collapseGasAlcool = function(aberto){

		$scope.gasolina = false;
		$scope.alcool = false;

					if(aberto){
							$scope.gasAlcool = false;
					}else{
						  $scope.gasAlcool = true;
							$scope.ipva = false;
							$scope.rodizio = false;
					}
	}

	$scope.collapseIPVA = function(aberto){

		$scope.gasolina = false;
		$scope.alcool = false;

					if(aberto){
							$scope.ipva = false;
					}else{
							$scope.ipva = true;
							$scope.gasAlcool = false;
							$scope.rodizio = false;
					}
	}

	$scope.collapseRodizio = function(aberto){

		$scope.gasolina = false;
		$scope.alcool = false;

					if(aberto){
							$scope.rodizio = false;
					}else{
								$scope.rodizio = true;
								$scope.gasAlcool = false;
								$scope.ipva = false;
					}
	}

	$scope.calcularAlcoolGasolina = function(gasolina, alcool){
				console.log('gasolina' + gasolina);
					console.log('alcool' + alcool);

					if(gasolina && alcool && gasolina >  0){
							var resultado = alcool/gasolina;
							if(resultado > 0.7){
									console.log('Abasteça com gasolina.');
									$scope.alcool = false;
									$scope.gasolina = true;
							}else{
									console.log('Abasteça com álcool.');
									$scope.gasolina = false;
									$scope.alcool = true;
							}
					}

	}

}]);
