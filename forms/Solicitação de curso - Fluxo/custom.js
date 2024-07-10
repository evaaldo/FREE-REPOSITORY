$(document).ready(function() {

    //Número da atividade atual
    let numAtividade = $("#numAtividade").val();

    // Escondendo outras etapas
    if(/^(0|7)$/.test(numAtividade)) {

        $("#fase_6").hide();
        $("#fase_7").hide();
        $("#fase_8").hide();
        $("#fase_9").hide();

    } else if(/^(8)$/.test(numAtividade)) {

        $("#fase_7").hide();
        $("#fase_8").hide();
        $("#fase_9").hide();

        $("#excluirconteudo_programatico").hide();
        $("#excluirdocumentos_processo").hide();
        $("#TBPART_tbody").each(function() {
            $(this).find("button#removerParticipante").hide();
        });

        $("#fase_1 input, #fase_2 input, #fase_3 input, #fase_4 input, #fase_5 input").prop("readonly", true);
        $("#fase_1 textarea, #fase_2 textarea, #fase_3 textarea, #fase_4 textarea, #fase_5 textarea").prop("readonly", true);
        
        desabilitarRadio("optionRadioInternoLbl");
        desabilitarRadio("optionRadioExternoLbl");
        desabilitarRadio("optionRadioIncompanyLbl");

        desabilitarRadio("optionRadioCursoTreinamentoLbl");
        desabilitarRadio("optionRadioWorkshopForumLbl");
        desabilitarRadio("optionRadioPalestraCongressoLbl");
        
        desabilitarRadio("optionRadioEADLbl");
        desabilitarRadio("optionRadioPresencialLbl");
        desabilitarRadio("optionRadioHibridoLbl");
        
        desabilitarRadio("optionRadioISOLbl");
        desabilitarRadio("optionRadioAtualizacaoLeiLbl");
        desabilitarRadio("optionRadioAcaoEngajamentoLbl");
        desabilitarRadio("optionRadioCumprimentoMatrizLbl");
        desabilitarRadio("optionRadioPDILbl");
        desabilitarRadio("optionRadioSemFaciliadorLbl");
        
        desabilitarRadio("optionRadioViajarLbl");
        desabilitarRadio("optionRadioNaoViajarLbl");
        
        desabilitarRadio("optionRadioIndividualLbl");
        desabilitarRadio("optionRadioEmGrupoLbl");
        

    } else if(/^(10)$/.test(numAtividade)) {

        $("#fase_8").hide();
        $("#fase_9").hide();

        $("#excluirconteudo_programatico").hide();
        $("#excluirdocumentos_processo").hide();
        $("#TBPART_tbody").each(function() {
            $(this).find("button#removerParticipante").hide();
        });

        $("#fase_1 input, #fase_2 input, #fase_3 input, #fase_4 input, #fase_5 input, #fase_6 input").prop("readonly", true);
        $("#fase_1 textarea, #fase_2 textarea, #fase_3 textarea, #fase_4 textarea, #fase_5 textarea, #fase_6 textarea").prop("readonly", true);

        desabilitarRadio("optionRadioInternoLbl");
        desabilitarRadio("optionRadioExternoLbl");
        desabilitarRadio("optionRadioIncompanyLbl");

        desabilitarRadio("optionRadioCursoTreinamentoLbl");
        desabilitarRadio("optionRadioWorkshopForumLbl");
        desabilitarRadio("optionRadioPalestraCongressoLbl");
        
        desabilitarRadio("optionRadioEADLbl");
        desabilitarRadio("optionRadioPresencialLbl");
        desabilitarRadio("optionRadioHibridoLbl");
        
        desabilitarRadio("optionRadioISOLbl");
        desabilitarRadio("optionRadioAtualizacaoLeiLbl");
        desabilitarRadio("optionRadioAcaoEngajamentoLbl");
        desabilitarRadio("optionRadioCumprimentoMatrizLbl");
        desabilitarRadio("optionRadioPDILbl");
        desabilitarRadio("optionRadioSemFaciliadorLbl");
        
        desabilitarRadio("optionRadioViajarLbl");
        desabilitarRadio("optionRadioNaoViajarLbl");
        
        desabilitarRadio("optionRadioIndividualLbl");
        desabilitarRadio("optionRadioEmGrupoLbl");

    } else if(/^(49)$/.test(numAtividade)) {

        $("#fase_9").hide();

        $("#excluirconteudo_programatico").hide();
        $("#excluirdocumentos_processo").hide();
        $("#TBPART_tbody").each(function() {
            $(this).find("button#removerParticipante").hide();
        });

        $("#fase_1 input, #fase_2 input, #fase_3 input, #fase_4 input, #fase_5 input, #fase_6 input, #fase_7 input").prop("readonly", true);
        $("#fase_1 textarea, #fase_2 textarea, #fase_3 textarea, #fase_4 textarea, #fase_5 textarea, #fase_6 textarea, #fase_7 textarea").prop("readonly", true);

        desabilitarRadio("optionRadioInternoLbl");
        desabilitarRadio("optionRadioExternoLbl");
        desabilitarRadio("optionRadioIncompanyLbl");

        desabilitarRadio("optionRadioCursoTreinamentoLbl");
        desabilitarRadio("optionRadioWorkshopForumLbl");
        desabilitarRadio("optionRadioPalestraCongressoLbl");
        
        desabilitarRadio("optionRadioEADLbl");
        desabilitarRadio("optionRadioPresencialLbl");
        desabilitarRadio("optionRadioHibridoLbl");
        
        desabilitarRadio("optionRadioISOLbl");
        desabilitarRadio("optionRadioAtualizacaoLeiLbl");
        desabilitarRadio("optionRadioAcaoEngajamentoLbl");
        desabilitarRadio("optionRadioCumprimentoMatrizLbl");
        desabilitarRadio("optionRadioPDILbl");
        desabilitarRadio("optionRadioSemFaciliadorLbl");
        
        desabilitarRadio("optionRadioViajarLbl");
        desabilitarRadio("optionRadioNaoViajarLbl");
        
        desabilitarRadio("optionRadioIndividualLbl");
        desabilitarRadio("optionRadioEmGrupoLbl");

    } else if(/^(58)$/.test(numAtividade)) {

        $("#excluirconteudo_programatico").hide();
        $("#excluirdocumentos_processo").hide();
        $("#TBPART_tbody").each(function() {
            $(this).find("button#removerParticipante").hide();
        });

        $("#fase_1 input, #fase_2 input, #fase_3 input, #fase_4 input, #fase_5 input, #fase_6 input, #fase_7 input, #fase_8 input").prop("readonly", true);
        $("#fase_1 textarea, #fase_2 textarea, #fase_3 textarea, #fase_4 textarea, #fase_5 textarea, #fase_6 textarea, #fase_7 textarea, #fase_8 textarea").prop("readonly", true);

        desabilitarRadio("optionRadioInternoLbl");
        desabilitarRadio("optionRadioExternoLbl");
        desabilitarRadio("optionRadioIncompanyLbl");

        desabilitarRadio("optionRadioCursoTreinamentoLbl");
        desabilitarRadio("optionRadioWorkshopForumLbl");
        desabilitarRadio("optionRadioPalestraCongressoLbl");
        
        desabilitarRadio("optionRadioEADLbl");
        desabilitarRadio("optionRadioPresencialLbl");
        desabilitarRadio("optionRadioHibridoLbl");
        
        desabilitarRadio("optionRadioISOLbl");
        desabilitarRadio("optionRadioAtualizacaoLeiLbl");
        desabilitarRadio("optionRadioAcaoEngajamentoLbl");
        desabilitarRadio("optionRadioCumprimentoMatrizLbl");
        desabilitarRadio("optionRadioPDILbl");
        desabilitarRadio("optionRadioSemFaciliadorLbl");
        
        desabilitarRadio("optionRadioViajarLbl");
        desabilitarRadio("optionRadioNaoViajarLbl");
        
        desabilitarRadio("optionRadioIndividualLbl");
        desabilitarRadio("optionRadioEmGrupoLbl");

    } else if (/^(61)$/.test(numAtividade)) {

        $("#fase_7").hide();
        $("#fase_8").hide();
        $("#fase_9").hide();

        $("#fase_6 input, #fase_7 input, #fase_8 input").prop("readonly", true);
        $("#fase_6 textarea, #fase_7 textarea, #fase_8 textarea").prop("readonly", true);

        $("#aprovarBP").attr("readonly", true);
        $("#aprovarAreaResponsavel").attr("readonly", true);
        $("#nivelTreinamento").attr("readonly", true); 

    } else if (/^(64)$/.test(numAtividade)) {

        $("#fase_8").hide();
        $("#fase_9").hide();

        $("#fase_6 input, #fase_7 input, #fase_8 input").prop("readonly", true);
        $("#fase_6 textarea, #fase_7 textarea, #fase_8 textarea").prop("readonly", true);

        $("#aprovarBP").attr("readonly", true);
        $("#aprovarAreaResponsavel").attr("readonly", true);
        $("#nivelTreinamento").attr("readonly", true);    

    }

    // Definindo se participantes sobem por planilha ou por formulário
    $("#escalaParticipantes").change(function() {
        
        let valorSelecionado = $(this).val();

        if (valorSelecionado == "maisCincoParticipantes") {
            $("#divAdicionarPlanilhaParticipantes").show();
            $("#divAdicionarDocumentoNormativo").show();
            $("#divAdicionarParticipantes").hide();
            $("#divRemoverParticipantes").hide();
            $("#TBPART").hide();
        } else if (valorSelecionado == "menosCincoParticipantes") {
            $("#divAdicionarParticipantes").show();
            $("#divRemoverParticipantes").show();
            $("#TBPART").show();
            $("#divAdicionarPlanilhaParticipantes").hide();
            $("#divAdicionarDocumentoNormativo").hide();
        }
    });

    // Insere dados de solicitante por matrícula
    $("#matriculaSolicitante").on("focusout", function() {
        console.log("integrou")
        let matricula = $(this).val();
        let matriculaSeparada = matricula.split("-");
        let coligada = matriculaSeparada[0];
        let chapa = matriculaSeparada[1];
    
        var c1Colaborador = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Colaborador = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var colaborador = DatasetFactory.getDataset("ds_integracao_rm", ["dados_funcionario_por_matricula"], [c1Colaborador, c2Colaborador], null);
    
        let custo = colaborador.values[0]["CENTROCUSTO"];
    
        var c1BP = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2BP = DatasetFactory.createConstraint("custo", custo, custo, ConstraintType.MUST);
        var bpSolicitante = DatasetFactory.getDataset("ds_integracao_rm", ["colaborador_rh_bp"], [c1BP, c2BP], null);
    
        if (custo.length == 17) {
            custo = custo.substr(3, 14);
        }
    
        var c1 = DatasetFactory.createConstraint("centrocusto", custo, custo, ConstraintType.MUST);
        var diretoria = DatasetFactory.getDataset("ds_integracao_rm", ["diretoria_centroCusto"], [c1], null);
    
        $("#bpRhResponsavel").val(bpSolicitante.values[0]["NOME"]);
        $("#unidade").val(colaborador.values[0]["UNIDADE"]);
        $("#diretoria").val(diretoria.values[0]["DIRETORIA"]);
    
        $("#bpRhResponsavel_h").val(bpSolicitante.values[0]["NOME"]);
        $("#unidade_h").val(colaborador.values[0]["UNIDADE"]);
        $("#diretoria_h").val(diretoria.values[0]["DIRETORIA"]);
    });

    // Insere dados do gestor imediato por matrícula
    $("#matriculaGestorArea").on("focusout", function() {
        let matricula = $("#matriculaGestorArea").val()
        let matriculaSeparada = matricula.split("-");
        let coligada = matriculaSeparada[0];
        let chapa = matriculaSeparada[1];

        var c1Colaborador = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2Colaborador = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var colaborador = DatasetFactory.getDataset("ds_integracao_rm", ["dados_funcionario_por_matricula"], [c1Colaborador, c2Colaborador], null);

        $("#gestorImediato").val(colaborador.values[0]["NOME"]);
        $("#gestorImediato_h").val(colaborador.values[0]["NOME"]);
    })

    //Insere dados de participante por matrícula
    $(document).on("focusout", "[id^='matriculaParticipante___']", function() {
        let id = $(this).attr('id');
        let index = id.split('___')[1];
        
        let matricula = $(this).val();
        let matriculaSeparada = matricula.split('-');
        let coligada = matriculaSeparada[0];
        let chapa = matriculaSeparada[1];

        var c1 = DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("chapa", chapa, chapa, ConstraintType.MUST);
        var colaborador = DatasetFactory.getDataset("ds_integracao_rm", ["dados_funcionario_por_matricula"], [c1, c2], null);

        $(`#nomeParticipante___${index}`).val(colaborador.values[0]["NOME"]);
        $(`#cargo___${index}`).val(colaborador.values[0]["CARGO"]);
        $(`#dataAdmissao___${index}`).val(colaborador.values[0]["DATAADMISSAO"]);
        $(`#situacao___${index}`).val(colaborador.values[0]["CODSITUACAO"]);
        $(`#tempoEmpresa___${index}`).val(colaborador.values[0]["TEMPO_x0020_DE_x0020_EMPRESA"]);
    });

});

// Adicionando linhas da tabela pai x filho
function adicionarLinha() {
    let qtdParticipantes = parseInt($("#qtd_participantes").val());

    // id começa com o valor 0
    if(qtdParticipantes < 5) {
        wdkAddChild("TBPART");
        qtdParticipantes++;
        $("#qtd_participantes").val(qtdParticipantes);
        $("#quantidadeParticipantes").text(qtdParticipantes);

        // Atualiza o texto do elemento indiceParticipantes para corresponder à nova linha
        atualizarIndices();
    } else {
        exibirAlerta("error", "Atenção", "O número máximo de participantes cadastrados via formulário é 5. Caso precise cadastrar mais, anexe a planilha de participantes!");
    }
}

// Função para atualizar os índices dos participantes
function atualizarIndices() {
    $("#TBPART tbody tr").slice(1).each(function(index) {

        let indice = index + 1; // Começa com 1
        $(this).find("[id^='indiceParticipantes']").val(indice);
    });
}


// Remover linha da tabela pai x filho
function excluirLinha(elemento) {
    let numAtividade = $("#numAtividade").val();
    let qtdParticipantes = parseInt($("#qtd_participantes").val());

    if(qtdParticipantes >= 0 && /^(0|7|61|64)$/.test(numAtividade)) {
        fnWdkRemoveChild(elemento);
        qtdParticipantes--;   
        $("#qtd_participantes").val(qtdParticipantes);
        $("#quantidadeParticipantes").text(qtdParticipantes);

        // Atualiza o texto do elemento indiceParticipantes para corresponder à nova linha
        atualizarIndices();
    } else {
        exibirAlerta("error", "Atenção", "Não é possível remover participantes nessa etapa!");
    }
}

// Remover todas as linhas da tabela pai x filho
function excluirTodasLinhas() {
    $("table[tablename='TBPART'] tbody tr").not(":first").remove();
    $("#qtd_participantes").val(0);
    $("#quantidadeParticipantes").text(0);
}

// Função auxiliar para exibição de alertas
function exibirAlerta(iconePersonalizado, tituloPersonalizado, textoPersonalizado) {
    AlertaCustomizadoX = new AlertaCustomizado(iconePersonalizado,tituloPersonalizado,textoPersonalizado,'');
    AlertaCustomizadoX.exibeAlerta1();
}

// Função auxiliar para desabilitar campo
function desabilitarRadio(idRadio) {
    var radio = $("#" + idRadio);
    radio.css({
        "pointer-events": "none",
        "opacity": "0.5"
    });
    radio.closest('label').css({
        "color": "gray"
    });
}

// Função auxiliar para habilitar campo
function habilitarRadio(idRadio) {
    var radio = $("#" + idRadio);
    radio.css({
        "pointer-events": "auto",
        "opacity": "1"
    });
    radio.closest('label').css({
        "color": "black"
    });
}