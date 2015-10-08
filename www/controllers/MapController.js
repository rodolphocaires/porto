app.controller('MapCtrl', ['$scope', '$ionicLoading', '$compile', function($scope, $ionicLoading, $compile) {
	var initialize = function() {
		var mapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("map"),
		mapOptions);

		//Marker + infowindow + angularjs compiled ng-click
		var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
		var compiled = $compile(contentString)($scope);

		var infowindow = new google.maps.InfoWindow({
			content: compiled[0]
		});

		$scope.map = map;
	};

	var centerOnMe = function() {
		if(!$scope.map) {
			return;
		}

		navigator.geolocation.getCurrentPosition(function(pos) {
			var position = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
			$scope.map.setCenter(new google.maps.LatLng(position.lat, position.lng));
			var marker = new google.maps.Marker({
				position: position,
				map: $scope.map,
				title: 'Let`s do this'
			});
			marker.addListener(marker, 'click', function () {

			});

		}, function(error) {
			alert('Unable to get location: ' + error.message);
		});
	};

	initialize();
	centerOnMe();

	$scope.clickTest = function() {
		alert('Example of infowindow with ng-click')
	};

}]);
