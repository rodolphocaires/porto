app.factory('TelefonesUteisService', function () {
	var telefonesUteis = [
		{
			id: 1,
			descricao: 'Seguradora',
			numero: '33376786'
		},
		{
			id: 2,
			descricao: 'SAMU',
			numero: '192'
		},
		{
			id: 3,
			descricao: 'Bombeiros',
			numero: '193',
		},
		{
			id: 4,
			descricao: 'Polícia',
			numero: '190'
		},
		{
			id: 5,
			descricao: 'PRF',
			numero: '27952300'
		},
		{
			id: 6,
			descricao: 'SAC',
			numero: '08007272766'
		}];

	var getTelefonesUteis = function () {
		return telefonesUteis;
	};



	return {
		getTelefonesUteis: getTelefonesUteis

	};
});
