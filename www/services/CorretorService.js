app.factory('CorretorService', function () {
	var corretores = [
		{
			id: 1,
			nome: 'Alfredo Jones',
			email: 'alfredones@email.com',
			telefones: [{numero: 11985231111},{ numero:1156569900},{numero: 11977775656}]
		},
		{
			id: 2,
			nome: 'Joilson Santos',
			email: 'jojo_ilson_santos@email.com',
			telefones: [{numero: 11952366533}]	
		},
		{
			id: 3,
			nome: 'Alberto Candido Parreira',
			email: 'albertocparreira@email.com',
			telefones: [{numero: 1158895566},{numero: 11998589585}]	
		}];

	var getCorretores = function () {
		return corretores;
	};

	

	return {
		getCorretores: getCorretores
		
	};
});