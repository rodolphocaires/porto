app.factory('UtilitariosService', function () {
	var ipvas = [ 			{placa: '0',	vencimento1: '22/01',	vencimento2: '20/02',	vencimento3: '18/03'},
											{placa: '1',	vencimento1: '26/01',	vencimento2: '23/02',	vencimento3: '20/03'},
											{placa: '2',	vencimento1: '28/01',	vencimento2: '25/02',	vencimento3: '24/03'},
											{placa: '3',	vencimento1: '30/01',	vencimento2: '27/02',	vencimento3: '26/03'},
											{placa: '4',	vencimento1: '03/02',	vencimento2: '02/03',	vencimento3: '01/04'},
											{placa: '5',	vencimento1: '05/02',	vencimento2: '04/03',	vencimento3: '06/04'},
											{placa: '6',	vencimento1: '09/02',	vencimento2: '06/03',	vencimento3: '08/04'},
											{placa: '7',	vencimento1: '11/02',	vencimento2: '10/03',	vencimento3: '10/04'},
											{placa: '8',	vencimento1: '13/02',	vencimento2: '12/03',	vencimento3: '14/04'},
											{placa: '9',	vencimento1: '19/02',	vencimento2: '16/03',	vencimento3: '16/04'}];

		var rodizios = [		{placa: '1 e 2',	dia: 'Segunda-feira'},
												{placa: '3 e 4',	dia: 'Terça-feira'},
												{placa: '5 e 6',	dia: 'Quarta-feira'},
												{placa: '7 e 8',	dia: 'Quinta-feira'},
												{placa: '9 e 0',	dia: 'Sexta-feira'}];


	var getIpvas = function () {
		return ipvas;
	};

	var getRodizios = function () {
		return rodizios;
	};

	return {
		getIpvas: getIpvas,
		getRodizios: getRodizios
	};
});
