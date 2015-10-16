app.controller('PreferenciasCtrl', ['$scope', 'PreferenciasService', '$stateParams', '$cordovaLocalNotification', 'ApoliceService',function ($scope, PreferenciasService, $stateParams, $cordovaLocalNotification, ApoliceService) {

	$scope.preferencias = PreferenciasService.getPreferencias();


		$scope.gerenciarNotificacoes = function(preferencia, isChecked){
				console.log(preferencia, isChecked);
				if(isChecked){

					var vencimento = getVencimento(preferencia.apolice);

					alertarVencimentoApolice(preferencia.apolice, vencimento);

					alertarRodizio(preferencia.apolice, preferencia.rodizioId);
				}else{
					cancelarNotificacoes(preferencia.apolice);
				}

		}

		var getVencimento = function(apolice){
			console.log('getVencimento');
			if(apolice){
				return  ApoliceService.getApolicePorNumero(apolice).vencimento;
			}
		}


		var alertarVencimentoApolice = function(apolice, vencimento){
			console.log('alertarVencimentoApolice');
			if(vencimento && apolice){
				var dataSplit = vencimento.split("/");
				var dataVencimento = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]);

				var hojeC = new Date();

				var dataMesAnterior = new Date(dataVencimento);
				var dataMesAnteriorC = dataMesAnterior
				dataMesAnterior.setMonth(dataMesAnterior.getMonth() - 1)
				dataMesAnteriorC.setMonth(dataMesAnterior.getMonth() - 1)


				if(hojeC.setHours(0, 0, 0, 0) > dataVencimento.setHours(0, 0, 0, 0)){
					console.log('Vencimento 0');
					agendarNotificacao(apolice, new Date(), 'Alerta Vencimento','Sua apólice venceu no dia ' + vencimento + '.', 0);
				}else if(hojeC.setHours(0, 0, 0, 0) > dataMesAnteriorC.setHours(0, 0, 0, 0)){
					console.log('Vencimento 1');
					var hoje = new Date();
					hoje.setSeconds(hoje.getSeconds() + 30);
					agendarNotificacao(apolice + 'V', hoje, 'Alerta Vencimento','Sua apólice vence no dia ' + vencimento + '.', 0);
				}else{
					console.log('Vencimento 2');
					agendarNotificacao(apolice + 'V', dataMesAnterior, 'Alerta Vencimento','Sua apólice vence no dia ' + vencimento + '.', 0);
				}

			}
		}



		var alertarRodizio = function(apolice,rodizioId){
			console.log('alertarRodizio');
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
							agendarNotificacao(apolice, dataAgendamento, 'Alerta Rodízio','Fique atento ao horário de circulação do rodízio.', 'week');
				}
	}


		var cancelarNotificacoes = function(apolice){

			var notificationIds = [apolice];
			console.log('cancelarNotificacoes');
			console.log(notificationIds);
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
					  icon: 'file://img/logo.png',
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
