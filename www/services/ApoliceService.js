app.factory('ApoliceService', function () {
	var apolices = [
		{
			id: 1,
			segurado: {
				nome: 'Danilo Savio'
			},
			carro: {
				marca: 'Fiat',
				modelo: 'Uno',
				cor: 'Prata',
				placa: 'ABC-1234'
			},
			tipoSinistros: [{id: 1, descricao: 'Colisão', pagina: 'colisao', icone: 'ion-model-s'},{id: 2, descricao: 'Incêndio',  pagina: 'incendio', icone: 'ion-fireball'},{id: 3, descricao: 'Roubo/Furto',  pagina: 'rouboFurto', icone: 'ion-android-walk'},{id: 4, descricao: 'Atropelamento', pagina: 'atropelamento', icone: 'ion-ios-body'},{id: 5, descricao: 'Enchente', pagina: 'enchente', icone: 'ion-ios-rainy'}, {id: 6, descricao: 'Vidros/Acessórios',  pagina: 'vidrosAcessorios',icone: 'ion-wrench'}]
		},
		{
			id: 2,
			segurado: {
				nome: 'Rodolpho Caires'
			},
			carro: {
				marca: 'Volkswagen',
				modelo: 'Gol',
				cor: 'Preto',
				placa: 'DEF-5678'
			},
			tipoSinistros: [{id: 1, descricao: 'Colisão', pagina: 'colisao', icone: 'ion-model-s'},{id: 3, descricao: 'Roubo/Furto', pagina: 'rouboFurto', icone: 'ion-android-walk'}]
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