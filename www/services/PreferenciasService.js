app.factory('PreferenciasService', function () {

	// rodizioId Domingo = 0, Segunda-feira = 1, Terça = 2, Quarta = 3, Quinta = 4, Sexta = 5, Sabado = 6;

	var preferencias = [{
	id: 1,
	apolice: '34313124',
	IPVA: 'OK',
	validade: '50 dias para vencimento da apólice.',
	rodizio: 'Terça-feira',
	rodizioId: 2
},
{
	id: 2,
	apolice: '34312125',
	IPVA: 'OK',
	validade: '180 dias para vencimento da apólice.',
	rodizio: 'Quinta-feira',
	rodizioId: 4
}]

	var getPreferencias = function () {
		return preferencias;
	};



	return {
		getPreferencias: getPreferencias
	};
});
