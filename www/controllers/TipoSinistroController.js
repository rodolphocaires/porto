app.controller('TipoSinistroCtrl', ['$scope', 'SinistroService', 'ApoliceService','$ionicModal', '$stateParams', function ($scope, SinistroService, ApoliceService, $ionicModal, $stateParams) {

	
	 $scope.showModalSinistro = function(pagina){
		$ionicModal.fromTemplateUrl('templates/form-'+ pagina +'.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			 $scope.novoSinistroModal = modal;
			 showModal();
		});
	}
	 
	 var showModal = function(){
		 $scope.novoSinistroModal.show();
	 }

	
	 
		var apoliceId = $stateParams.apoliceId;
	if(apoliceId){
		$scope.apolice =  ApoliceService.getApolice(apoliceId);	
	}
	
}]);