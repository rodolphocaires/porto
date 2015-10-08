app.controller('MapCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	var service;
	var infoWindow;
	var query = $stateParams.query;

	var initialize = function() {
		var mapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("map"),
		mapOptions);
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

			var request = {
				location: new google.maps.LatLng(position.lat, position.lng),
				radius: '500',
				query: query
			};

			infoWindow = new google.maps.InfoWindow();
			service = new google.maps.places.PlacesService($scope.map);
			service.textSearch(request, callback);

		}, function(error) {
			alert('Unable to get location: ' + error.message);
		});
	};

	initialize();
	centerOnMe();

	function callback(results, status) {
		if (status !== google.maps.places.PlacesServiceStatus.OK) {
			console.error(status);
			return;
		}
		for (var i = 0, result; result = results[i]; i++) {
			addMarker(result);
		}
	}

	function addMarker(place) {
		var marker = new google.maps.Marker({
			map: $scope.map,
			position: place.geometry.location,
			icon: {
				url: 'http://maps.gstatic.com/mapfiles/circle.png',
				anchor: new google.maps.Point(10, 10),
				scaledSize: new google.maps.Size(10, 17)
			}
		});

		google.maps.event.addListener(marker, 'click', function() {
			service.getDetails(place, function(result, status) {
				if (status !== google.maps.places.PlacesServiceStatus.OK) {
					console.error(status);
					return;
				}
				infoWindow.setContent(result.name);
				infoWindow.open($scope.map, marker);
			});
		});
	}

	$scope.clickTest = function() {
		alert('Example of infowindow with ng-click')
	};

}]);
