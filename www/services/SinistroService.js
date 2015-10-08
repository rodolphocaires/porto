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
				id: 52758991
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

	return {
		getSinistros: getSinistros
	};
});