app.factory('ApoliceService', function () {
	var apolices = [
		{
			id: 1,
			assegurado: {
				nome: 'Danilo Savio'
			},
			carro: {
				marca: 'Fiat',
				modelo: 'Uno',
				cor: 'Prata',
				placa: 'ABC-1234'
			}
		},
		{
			id: 2,
			assegurado: {
				nome: 'Rodolpho Caires'
			},
			carro: {
				marca: 'Volkswagen',
				modelo: 'Gol',
				cor: 'Preto',
				placa: 'DEF-5678'
			}
		}
	];

	var getApolices = function () {
		return apolices;
	};

	var getApolice = function (id) {
		
		for(var i = 0; i < apolices.length; i++){
			if(apolices[i].id == id){
				return apolices[i];
				break;
			}
		}
		
		
	};

	return {
		getApolices: getApolices,
		getApolice: getApolice
	};
});