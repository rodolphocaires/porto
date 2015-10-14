app.controller('CorretorCtrl', ['$scope', 'CorretorService', '$stateParams',  '$ionicActionSheet', function ($scope, CorretorService, $stateParams,  $ionicActionSheet) {



	$scope.corretores = CorretorService.getCorretores();

	// Detalhes Corretor
	var corretorId = $stateParams.corretorId;
	if(corretorId){
		$scope.corretor =  CorretorService.getCorretor(corretorId);
	}


	$scope.showActionSheet = function(buttonsLabel){

		var buttons = [];
		for (var i = 0; i < buttonsLabel.length; i++) {
			buttons[i] = { text: buttonsLabel[i].numero};
		}

		// Show the action sheet
		 $ionicActionSheet.show({
			buttons: buttons,
			titleText: 'Telefones',
			cancelText: 'Cancelar',
			cancel: function() {
					 // add cancel code..
				 },
			buttonClicked: function(index) {
				console.log(buttons[index].text);
				window.plugins.CallNumber.callNumber(function(){
					console.log('Ligação OK');
				}, function(){
					console.log('Ligação Falhou');
				}, buttons[index].text);
				return false;
			}
		});
	}



}]);
