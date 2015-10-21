app.controller('TipoSinistroCtrl', ['$scope', 'SinistroService', 'ApoliceService', '$ionicModal', '$stateParams', '$ionicSlideBoxDelegate', function ($scope, SinistroService, ApoliceService, $ionicModal, $stateParams, $ionicSlideBoxDelegate) {
	$scope.step = 0;

	$scope.showModalSinistro = function (pagina) {
		$ionicModal.fromTemplateUrl('templates/form-' + pagina + '.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.novoSinistroModal = modal;
			showModal();
		});
	};

	var showModal = function () {
		$scope.novoSinistroModal.show();
	};

	$scope.next = function () {
		$ionicSlideBoxDelegate.next();
	};

	$scope.previous = function () {
		$ionicSlideBoxDelegate.previous();
	};

	$scope.stepChanged = function (index) {
		$scope.step = index;
	};


	$scope.frente = false;
	$scope.traseira = false;
	$scope.laterais = false;
	$scope.teto = false;

	$scope.collapseFrente = function(aberto){

					if(aberto){
							$scope.frente = false;
					}else{
							$scope.frente = true;
							$scope.traseira = false;
							$scope.laterais = false;
							$scope.teto = false;
					}
	}


		$scope.collapseTraseira = function(aberto){

						if(aberto){
								$scope.traseira = false;
						}else{
								$scope.traseira = true;
								$scope.frente = false;
								$scope.laterais = false;
								$scope.teto = false;
						}
		}


			$scope.collapseLaterais = function(aberto){

							if(aberto){
									$scope.laterais = false;
							}else{
									$scope.laterais = true;
									$scope.frente = false;
									$scope.traseira = false;
									$scope.teto = false;
							}
			}


				$scope.collapseTeto = function(aberto){

								if(aberto){
										$scope.teto = false;
								}else{
										$scope.teto = true;
										$scope.frente = false;
										$scope.traseira = false;
										$scope.laterais = false;
								}
				}



	var apoliceId = $stateParams.apoliceId;
	if (apoliceId) {
		$scope.apolice = ApoliceService.getApolice(apoliceId);
	}

}]);
