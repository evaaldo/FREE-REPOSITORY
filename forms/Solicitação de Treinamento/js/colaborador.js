var Colaboradores = {
    
    preencherDadosGestor: function() {
        var matricula = Campos.matriculaGestorArea().val()
        var gestor = Datasets.getDadosGestor(matricula);

        if(gestor.values.length > 0) {
            $("#gestorImediato").val(gestor.values[0]["NOME"]);
            $("#gestorImediato_h").val(gestor.values[0]["NOME"]);
        } else {
            Utils.exibirAlerta("error", "Sem resultados", "Nenhum colaborador foi encontrado com essa matrícula")
        }
    },

    preencherDadosSolicitante: function() {
        var retornoDadosSolicitante = Datasets.getDadosSolicitante(Campos.matriculaSolicitante().val());

        var colaborador = retornoDadosSolicitante[0]["colaborador"];
        var bpSolicitante = retornoDadosSolicitante[0]["bpSolicitante"];
        var diretoria = retornoDadosSolicitante[0]["diretoria"];

        Campos.bpRhResponsavel().val(bpSolicitante.values[0]["NOME"]);
        Campos.unidade().val((colaborador.values[0]["UNIDADE"]).toUpperCase());
        Campos.diretoria().val((diretoria.values[0]["DIRETORIA"]).toUpperCase());
    },

    preencherDadosParticipante: function(idForm) {
        var indice = idForm.split('___')[1];
        
        var participante = Datasets.getDadosParticipante(idForm);

        Campos.participantes.nome(indice).val(participante.values[0]["NOME"]);
        Campos.participantes.cargo(indice).val(participante.values[0]["CARGO"]);
        Campos.participantes.admissao(indice).val(participante.values[0]["DATAADMISSAO"]);
        Campos.participantes.situacao(indice).val(participante.values[0]["CODSITUACAO"]);
        Campos.participantes.tempoEmpresa(indice).val(participante.values[0]["TEMPO_x0020_DE_x0020_EMPRESA"]);
    }

}