var Datasets = {

    dsRMFuncionarios: "ds_integracao_rm",
    dsFuncionarioPorMatricula: "dados_funcionario_por_matricula",
    dsBPColaborador: "colaborador_rh_bp",
    dsDiretoriaCentroCusto: "diretoria_centroCusto",
	processHistory : "processHistory",

    get: function(dataset,fields,constraints,order){
		
		var _constraints = [];
		
		for (var i in constraints) {
			
			var campo = constraints[i][0];
			var valorInicial = constraints[i][1];
			var valorFinal = valorInicial;
			var tipo = ConstraintType.MUST;
			var like = constraints[i][3] || false;
			
			_constraints.push(DatasetFactory.createConstraint(campo,valorInicial,valorFinal,tipo,like))
		}
		
		return _dataset = DatasetFactory.getDataset(
			dataset,
			fields,
			_constraints,
			order
		).values;
	},
	
	getRow: function(dataset,fields,constraints,order){
		//if (null != constraints) {
		//	constraints.push(["sqlLimit",1,"must"]);
		//}
		var _dataset = this.get(dataset,fields,constraints,order);
		return undefined != _dataset && _dataset.length > 0 ? _dataset[0] : null;
	},
	
	getRows: function(dataset,fields,constraints,order){
		var _dataset = this.get(dataset,fields,constraints,order);
		return undefined != _dataset && _dataset.length > 0 ? _dataset : null;
	},

    getDadosSolicitante: function(matricula) {
        var matriculaSeparada = matricula.split("-");
        var coligada = matriculaSeparada[0];
        var chapa = matriculaSeparada[1];
    
        var c1Colaborador = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Colaborador = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var colaborador = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsFuncionarioPorMatricula], [c1Colaborador, c2Colaborador], null);
    
        var custo = colaborador.values[0]["CENTROCUSTO"];
    
        var c1BP = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2BP = DatasetFactory.createConstraint("custo", custo, custo, ConstraintType.MUST);
        var bpSolicitante = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsBPColaborador], [c1BP, c2BP], null);

        if (custo.length == 17) {
            custo = custo.substr(3, 14);
        }
    
        var c1 = DatasetFactory.createConstraint("centrocusto", custo, custo, ConstraintType.MUST);
        var diretoria = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsDiretoriaCentroCusto], [c1], null);

        return [{colaborador,bpSolicitante,diretoria}];
    },

    getDadosGestor: function(matricula) {
        var matriculaSeparada = matricula.split("-");
        var coligada = matriculaSeparada[0];
        var chapa = matriculaSeparada[1];

        var c1Gestor = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Gestor = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var gestor = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsFuncionarioPorMatricula], [c1Gestor, c2Gestor], null);

        return gestor;
    },

    getDadosParticipante: function(idForm) {        
        var matricula = $("#" + idForm).val();
        var matriculaSeparada = matricula.split('-');
        var coligada = matriculaSeparada[0];
        var chapa = matriculaSeparada[1];

        var c1 = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var participante = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsFuncionarioPorMatricula], [c1, c2], null);  
        
        return participante;
    },

    getAtividadesPercorridas: function(numeroSolicitacao) {
        var atividadesPercorridas = Datasets.getRows(
            Datasets.processHistory,
            ["stateSequence"],
            [
                ["processInstanceId",numeroSolicitacao,"must"],
            ],
            ['stateSequence']
        )

        return atividadesPercorridas;
    },

    getAreas: function() {
        var areas = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, ["areas"], null, null);

        return areas;
    },

}