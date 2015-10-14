// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('porto', ['ionic', 'ngCordova']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.apolices', {
		url: '/apolices',
		views: {
			'menuContent': {
				templateUrl: 'templates/apolices.html',
				controller: 'ApoliceCtrl'
			}
		}
	})
	.state('app.apolices-sinistro', {
		url: '/apolices-sinistro/:apoliceId',
		views: {
			'menuContent': {
				templateUrl: 'templates/apolices-sinistro.html',
				controller: 'ApoliceSinistroCtrl'
			}
		}
	})
	.state('app.detalhe-apolice', {
		url: '/apolice/:apoliceId',
		views: {
			'menuContent': {
				templateUrl: 'templates/detalhe-apolice.html',
				controller: 'DetalheApoliceCtrl'
			}
		}
	})
	.state('app.sinistros', {
		url: '/sinistros',
		views: {
			'menuContent': {
				templateUrl: 'templates/sinistros.html',
				controller: 'SinistrosCtrl'
			}
		}
	})
	.state('app.detalhe-sinistro', {
		url: '/sinistro/:sinistroId',
		views: {
			'menuContent': {
				templateUrl: 'templates/detalhe-sinistro.html',
				controller: 'DetalheSinistroCtrl'
			}
		}
	})
	.state('app.tipo-sinistro', {
		url: '/tipo-sinistro/:apoliceId',
		views: {
			'menuContent': {
				templateUrl: 'templates/tipo-sinistro.html',
				controller: 'TipoSinistroCtrl'
			}
		}
	})
	.state('app.corretores', {
		url: '/corretores',
		views: {
			'menuContent': {
				templateUrl: 'templates/corretores.html',
				controller: 'CorretorCtrl'
			}
		}
	})
	.state('app.preferencias', {
		url: '/preferencias',
		views: {
			'menuContent': {
				templateUrl: 'templates/preferencias.html',
				controller: 'PreferenciasCtrl'
			}
		}
	})
	.state('app.locais', {
		url: '/locais',
		views: {
			'menuContent': {
				templateUrl: 'templates/locais.html',
				controller: 'LocaisCtrl'
			}
		}
	})
	.state('app.map', {
		url: '/map/:query',
		views: {
			'menuContent': {
				templateUrl: 'templates/map.html',
				controller: 'MapCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/sinistros');
});
