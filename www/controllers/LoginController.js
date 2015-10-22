app.controller('LoginCtrl', ['$scope', '$ionicPopup', '$timeout', function ($scope, $ionicPopup, $timeout) {
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
		}, 500);
	};
}]);