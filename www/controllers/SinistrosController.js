app.controller('SinistrosCtrl', ['$scope', 'SinistroService', '$ionicModal', '$stateParams',function ($scope, SinistroService, $ionicModal, $stateParams) {

	// var clearHistory = $stateParams.clearHistory;
	//
	// if(clearHistory){
	//
	// 	 var menuButton = document.getElementsByClassName("hide");
	// 	 console.log(menuButton);
	// 		menuButton[0].className = "button button-icon button-clear ion-navicon";
	// 	 	menuButton[1].className = "button button-icon button-clear ion-navicon";
	//
	//
	// 		console.log('clearHistory');
	// 		 var buttons = document.getElementsByClassName("back-button");
	//
	// 		buttons[1].className = "hide";
	// 		buttons[0].className = "hide";
	// 		console.log(	buttons[1]);
	//
	// }


	$scope.sinistros = SinistroService.getSinistros();


}]);
