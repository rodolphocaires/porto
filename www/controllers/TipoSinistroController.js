app.controller('TipoSinistroCtrl', ['$scope', 'SinistroService', 'ApoliceService', '$ionicModal', '$stateParams', '$ionicSlideBoxDelegate', '$ionicPopup', '$state', '$ionicHistory', function ($scope, SinistroService, ApoliceService, $ionicModal, $stateParams, $ionicSlideBoxDelegate, $ionicPopup, $state, $ionicHistory) {
	$scope.step = 0;
	var confirmacaoPopup = null;

	var apoliceId = $stateParams.apoliceId;
	if (apoliceId) {
		$scope.apolice = ApoliceService.getApolice(apoliceId);
	}

	$scope.sinistro = {
		id: 3,
		apolice: {
			id: apoliceId
		},
		ocorrencia: {
			id: 1,
			nome: 'Colisão'
		},
		descritivo: '',
		status: {
			id: 1,
			nome: 'Aguardando Aprovação'
		},
		mensagem: 'Enviado - Aguardando Análise',
		data: new Date(),
		condutor: '',
		local: ''
	};

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

	$scope.hideModal = function () {
		$scope.novoSinistroModal.hide();

		$ionicHistory.nextViewOptions({
			disableBack: true
		});

		$state.go('app.sinistros');
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

	$scope.collapseFrente = function (aberto) {

		if (aberto) {
			$scope.frente = false;
		} else {
			$scope.frente = true;
			$scope.traseira = false;
			$scope.laterais = false;
			$scope.teto = false;
		}
	};

	$scope.collapseTraseira = function (aberto) {

		if (aberto) {
			$scope.traseira = false;
		} else {
			$scope.traseira = true;
			$scope.frente = false;
			$scope.laterais = false;
			$scope.teto = false;
		}
	};

	$scope.collapseLaterais = function (aberto) {

		if (aberto) {
			$scope.laterais = false;
		} else {
			$scope.laterais = true;
			$scope.frente = false;
			$scope.traseira = false;
			$scope.teto = false;
		}
	};

	$scope.collapseTeto = function (aberto) {

		if (aberto) {
			$scope.teto = false;
		} else {
			$scope.teto = true;
			$scope.frente = false;
			$scope.traseira = false;
			$scope.laterais = false;
		}
	};

	$scope.enviar = function (sinistro) {
		console.log('Enviar');
		console.log($scope.sinistro);
		confirmacaoPopup.close();
		$scope.novoSinistroModal.hide();
		$scope.sinistro.apolice.id = apoliceId;
		SinistroService.addSinistro($scope.sinistro);

		$ionicHistory.nextViewOptions({
			disableBack: true
		});

		$state.go('app.sinistros');
	};

	$scope.showConfirmacaoPopup = function () {
		confirmacaoPopup = $ionicPopup.show({
			templateUrl: 'templates/confirmacao-popup.html',
			cssClass: 'confirmacao-popup',
			scope: $scope
		});
	};

	$scope.cancelConfirmacao = function () {
		confirmacaoPopup.close();
	};
}]);
