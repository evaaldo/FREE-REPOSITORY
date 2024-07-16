var Datasets = {

    dsRMFuncionarios: "ds_integracao_rm",
    dsFuncionarioPorMatricula: "dados_funcionario_por_matricula",
    dsBPColaborador: "colaborador_rh_bp",
    dsDiretoriaCentroCusto: "diretoria_centroCusto",

    getDadosSolicitante: function(matricula) {
        let matriculaSeparada = matricula.split("-");
        let coligada = matriculaSeparada[0];
        let chapa = matriculaSeparada[1];
    
        var c1Colaborador = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Colaborador = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var colaborador = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsFuncionarioPorMatricula], [c1Colaborador, c2Colaborador], null);
    
        let custo = colaborador.values[0]["CENTROCUSTO"];
    
        var c1BP = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2BP = DatasetFactory.createConstraint("custo", custo, custo, ConstraintType.MUST);
        var bpSolicitante = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsBPColaborador], [c1BP, c2BP], null);

        if (custo.length == 17) {
            custo = custo.substr(3, 14);
        }
    
        var c1 = DatasetFactory.createConstraint("centrocusto", custo, custo, ConstraintType.MUST);
        var diretoria = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsDiretoriaCentroCusto], [c1], null);

        return [colaborador,bpSolicitante,diretoria];
    },

    getDadosGestor: function(matricula) {
        let matriculaSeparada = matricula.split("-");
        let coligada = matriculaSeparada[0];
        let chapa = matriculaSeparada[1];

        var c1Gestor = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Gestor = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var gestor = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, [Datasets.dsFuncionarioPorMatricula], [c1Gestor, c2Gestor], null);

        return gestor;
    }

}