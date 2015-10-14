app.controller('MapCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	var service;
	var infoWindow;
	var query = $stateParams.query;

	var initialize = function() {
		console.log('initialize');
		var mapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById("map"),
		mapOptions);
		$scope.map = map;
			console.log('after initialize');
				console.log(map);

	};

	var centerOnMe = function() {
			console.log('center on me');
		if(!$scope.map) {
				console.log('map = null');
			return;
		}

		console.log('before getCurrentPosition');
		navigator.geolocation.getCurrentPosition(function(pos) {
			var position = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
				console.log('getCurrent');
			$scope.map.setCenter(new google.maps.LatLng(position.lat, position.lng));

			var request = {
				location: new google.maps.LatLng(position.lat, position.lng),
				radius: '500',
				query: query
			};

			infoWindow = new google.maps.InfoWindow();
			service = new google.maps.places.PlacesService($scope.map);
			service.textSearch(request, callback);
				console.log('textSearch');
		}, function(error) {
			alert('Unable to get location: ' + error.message);
		},{timeout:10000});
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
			console.log('addMarker');
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
