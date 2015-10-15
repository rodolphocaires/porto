app.controller('PreferenciasCtrl', ['$scope', 'PreferenciasService', '$stateParams', '$cordovaLocalNotification',function ($scope, PreferenciasService, $stateParams, $cordovaLocalNotification) {

	$scope.preferencias = PreferenciasService.getPreferencias();


		$scope.gerenciarNotificacoes = function(preferencia, isChecked){
				console.log(preferencia, isChecked);

				if(isChecked){
					alertarRodizio(preferencia.apolice + 'R', preferencia.rodizioId);
				}else{
					cancelarNotificacoes(preferencia.apolice);
				}

		}




		var alertarRodizio = function(apolice,rodizioId){
				var hoje = new Date();
				var diaSemana = hoje.getDay();

				if(rodizioId == diaSemana){
					console.log('dia semana ok');
					agendarNotificacao(apolice + 'R', hoje, 'Alerta Rodízio','Fique atento ao horário de circulação do rodízio.', 'week');
				}else{
						var dataAgendamento;
						var data = new Date();
						var diaCorreto = false;
						while(!diaCorreto){
							data.setDate(data.getDate() + 1);
						    if(data.getDay() == rodizioId){
						    	dataAgendamento = data;
						        diaCorreto = true;
						    }
							}
							console.log("Alarme agendado para" + dataAgendamento);
							agendarNotificacao(apolice + 'R', dataAgendamento, 'Alerta Rodízio','Fique atento ao horário de circulação do rodízio.', 'week');
				}
		}


		var cancelarNotificacoes = function(apolice){

			var notificationIds = [apolice + 'R', apolice + 'V']

			 $cordovaLocalNotification.cancel(notificationIds)
			 .then(function (result) {
					console.log(result);
			 });
		}


		var agendarNotificacao = function (id, data, titulo, mensagem, repetir) {
				// var now = new Date().getTime();
				//  var _10SecondsFromNow = new Date(now + 10 * 1000);
				console.log(id + data + titulo + mensagem);
				 $cordovaLocalNotification.schedule({
					 id: id,
					 title: titulo,
					 text: mensagem,
					 at: data,
					  icon: '../img/logo.png',
						every: repetir
				 }).then(function (result) {
					 		console.log(result);
				 });
	   };

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


}]);
