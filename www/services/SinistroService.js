app.factory('SinistroService', function () {
	var sinistros = [
		{
			id: 1,
			apolice: {
				id: 34313124
			},
			ocorrencia: {
				id: 1,
				nome: 'Colisão'
			},
			descritivo: 'Veículo bateu no farol da esquina X com a Y',
			status: {
				id: 1,
				nome: 'Aguardando Aprovação'
			},
			mensagem: 'Em processo de análise detalhada da ocorrência',
			data: new Date()
		},
		{
			id: 2,
			apolice: {
				id: 34312125
			},
			ocorrencia: {
				id: 2,
				nome: 'Roubo/Furto'
			},
			descritivo: 'Ocorreu na madrugada',
			status: {
				id: 1,
				nome: 'Recusado'
			},
			mensagem: 'Boletim de ocorrência não foi informado',
			data: new Date()
		}
	];

	var getSinistros = function () {
		return sinistros;
	};

	var getSinistro = function (id) {
		for(var i = 0; i < sinistros.length; i++){
			if(sinistros[i].id == id){
				return sinistros[i];
				break;
			}
		}
	};

	return {
		getSinistros: getSinistros,
		getSinistro: getSinistro
	};
});
