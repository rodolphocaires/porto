app.factory('ApoliceService', function () {
	var apolices = [
		{
			id: 34313124,
			segurado: {
				nome: 'Danilo Savio'
			},
			vencimento: '15/11/2015',
			carro: {
				marca: 'Fiat',
				modelo: 'Uno',
				cor: 'Prata',
				placa: 'ABC-1234'
			},
			tipoSinistros: [{id: 1, descricao: 'Colisão', pagina: 'colisao', icone: 'icon-colisao'},{id: 2, descricao: 'Incêndio',  pagina: 'incendio', icone: 'icon-incendio'},{id: 3, descricao: 'Roubo/Furto',  pagina: 'rouboFurto', icone: 'icon-roubo'},{id: 4, descricao: 'Atropelamento', pagina: 'atropelamento', icone: 'icon-atropelamento'},{id: 5, descricao: 'Enchente', pagina: 'enchente', icone: 'icon-enchente'}, {id: 6, descricao: 'Vidros/Acessórios',  pagina: 'vidrosAcessorios',icone: 'icon-vidros'}]
		},
		{
			id: 34312125,
			segurado: {
				nome: 'Rodolpho Caires'
			},
			vencimento: '15/12/2015',
			carro: {
				marca: 'Volkswagen',
				modelo: 'Gol',
				cor: 'Preto',
				placa: 'DEF-5678'
			},
			tipoSinistros: [{id: 1, descricao: 'Colisão', pagina: 'colisao', icone: 'icon-colisao'},{id: 3, descricao: 'Roubo/Furto', pagina: 'rouboFurto', icone: 'icon-roubo'}]
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

	var getApolicePorNumero = function (apolice) {

		for(var i = 0; i < apolices.length; i++){
			if(apolices[i].id == apolice){
				return apolices[i];
				break;
			}
		}


	};

	return {
		getApolices: getApolices,
		getApolice: getApolice,
		getApolicePorNumero: getApolicePorNumero
	};
});
