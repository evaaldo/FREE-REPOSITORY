var Colaboradores = {

    // Insere dados do gestor imediato por matrícula
    
    preencherDadosGestor: function() {
        var matricula = Campos.matriculaGestorArea().val()
        var gestor = Datasets.getDadosGestor(matricula);

        if(gestor.values.length > 0) {
            $("#gestorImediato").val(gestor.values[0]["NOME"]);
            $("#gestorImediato_h").val(gestor.values[0]["NOME"]);
        } else {
            exibirAlerta("error", "Sem resultados", "Nenhum colaborador foi encontrado com essa matrícula")
        }
    },

    // Insere dados do solicitante por matrícula

    preencherDadosSolicitante: function() {
        Campos.bpRhResponsavel().val(bpSolicitante.values[0]["NOME"]);
        Campos.unidade().val(colaborador.values[0]["UNIDADE"]);
        Campos.diretoria().val(diretoria.values[0]["DIRETORIA"]);
    
        Campos.bpRhResponsavel().val(bpSolicitante.values[0]["NOME"]);
        Campos.unidade().val(colaborador.values[0]["UNIDADE"]);
        Campos.diretoria().val(diretoria.values[0]["DIRETORIA"]);
    }

}