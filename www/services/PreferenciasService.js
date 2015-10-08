app.factory('PreferenciasService', function () {
	var preferencias = [{
	id: 1,
	apolice: '34313124',
	IPVA: 'OK',
	validade: '50 dias para vencimento da apólice.',
	rodizio: 'Terça-feira'
},
{
	id: 2,
	apolice: '34312125',
	IPVA: 'OK',
	validade: '180 dias para vencimento da apólice.',
	rodizio: 'Quinta-feira'
}]

	var getPreferencias = function () {
		return preferencias;
	};

	

	return {
		getPreferencias: getPreferencias
	};
});