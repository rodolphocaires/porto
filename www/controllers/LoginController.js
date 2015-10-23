app.controller('LoginCtrl', ['$scope', '$ionicPopup', '$timeout', '$ionicLoading', function ($scope, $ionicPopup, $timeout, $ionicLoading) {
	var loginPopup = null;

	$scope.loginPorto = function () {
		loginPopup = $ionicPopup.show({
			templateUrl: 'templates/login-popup.html',
			cssClass: 'login-popup',
			scope: $scope
		});
	};

	$scope.cancelLogin = function () {
		loginPopup.close();
	};

	$scope.authenticate = function () {
		loginPopup.close();
		$timeout(function () {
			$scope.closeLogin();
			$scope.show();
		}, 500);
	};

	$scope.show = function() {
		 $ionicLoading.show({
			 template: 'Sincronizando dados...',
			 duration: 3000
		 });
	 };
	 $scope.hide = function(){
		 $ionicLoading.hide();
	 };


}]);
