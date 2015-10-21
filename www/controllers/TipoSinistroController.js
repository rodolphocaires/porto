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

	var apoliceId = $stateParams.apoliceId;
	if (apoliceId) {
		$scope.apolice = ApoliceService.getApolice(apoliceId);
	}

}]);