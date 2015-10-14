app.controller('PreferenciasCtrl', ['$scope', 'PreferenciasService', '$stateParams', '$cordovaLocalNotification',function ($scope, PreferenciasService, $stateParams, $cordovaLocalNotification) {

	$scope.preferencias = PreferenciasService.getPreferencias();

	$scope.exibirNotificacao = function(){
			 var alarmTime = new Date();
		//	 alarmTime.setSeconds(alarmTime.getSeconds() + 5);
			 $cordovaLocalNotification.add({
					 id: 1,
					 date: alarmTime,
					 message: "This is a message",
					 title: "This is a title",
					 autoCancel: true,
					 sound: null,
					  icon: "../img/logo.png"
			 }).then(function () {
					 console.log("The notification has been set");
			 });
		};




		$scope.agendarNotificacao = function (data) {
				var now = new Date().getTime();
				 var _10SecondsFromNow = new Date(now + 10 * 1000);

				 $cordovaLocalNotification.schedule({
					 id: 2,
					 title: 'Vencimento Apólice',
					 text: 'Sua apólice vencerá no dia x',
					 at: _10SecondsFromNow,
					  icon: "../img/logo.png"
				 }).then(function (result) {
					 		console.log(result);
				 });
	   };



}]);
