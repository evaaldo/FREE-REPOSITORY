function enableFields(form){

    var numAtividade = getValue("WKNumState")

    // Número da Atividade
    form.setValue("numAtividade", numAtividade)
    form.setEnabled("numAtividade", true)

    if(/^(0|7|61|64)$/.test(numAtividade)) {

        // Informações Gerais
        form.setEnabled("matriculaGestorArea", true)
        form.setEnabled("matriculaSolicitante", true)
        form.setEnabled("areaSolicitante", true)
        form.setEnabled("bpRhResponsavel", true)
        form.setEnabled("gestorImediato", true)
        form.setEnabled("unidade", true)
        form.setEnabled("diretoria", true)

        // Dados do Treinamento
        form.setEnabled("categoria", true)
        form.setEnabled("nomeTreinamento", true)
        form.setEnabled("optionRadioInterno",true)
        form.setEnabled("optionRadioExterno",true)
        form.setEnabled("optionRadioInCompany",true)
        form.setEnabled("nomeInstituicao", true)
        form.setEnabled("contatoInstituicao", true)
        form.setEnabled("optionRadioCursoTreinamento",true)
        form.setEnabled("optionRadioWorkshopForum",true)
        form.setEnabled("optionRadioPalestraCongresso",true)
        form.setEnabled("inscricoes", true)
        form.setEnabled("dataTreinamento", true)
        form.setEnabled("cargaHoraria", true)
        form.setEnabled("optionRadioEAD",true)
        form.setEnabled("optionRadioPresencial",true)
        form.setEnabled("optionRadioHibrido",true)

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", true)
        form.setEnabled("quantidadeParticipantes", true)
        form.setEnabled("anexo_planilhaParticipantes", true)
        form.setEnabled("anexo_documentoNormativo", true)

        // Informações dos Participantes - Filhos
        habilitaCamposTabelaParticipantes(form, numAtividade)

        // Justificativa de Treinamento
        form.setEnabled("optionRadioISO", true)
        form.setEnabled("optionRadioAtualizacaoLei", true)
        form.setEnabled("optionRadioAcaoEngajamento", true)
        form.setEnabled("optionRadioCumprimentoMatriz", true)
        form.setEnabled("optionRadiotbParticipantePDI", true)
        form.setEnabled("optionRadioSemFaciliador", true)
        form.setEnabled("justificativa", true)
        form.setEnabled("conteudoProgramaticoDescricao", true)
        form.setEnabled("programacaoEventoDescricao", true)
        form.setEnabled("anexo_programacao_evento", true)
        form.setEnabled("anexo_conteudo_programatico", true)
        
        // Investimento
        form.setEnabled("optionRadioViajar", true)
        form.setEnabled("optionRadioNaoViajar", true)
        form.setEnabled("optionRadioIndividual", true)
        form.setEnabled("optionRadioEmGrupo", true)
        form.setEnabled("valorPessoa", true)
        form.setEnabled("valorTotal", true)

    } else if(/^(8)$/.test(numAtividade)) {

        // Aprovação da BP
        form.setEnabled("aprovarBP", true);
        form.setEnabled("observacaoBP", true);
        
        // Campos de preenchimento do solicitante
        form.setEnabled("categoria", false);
        form.setEnabled("escalaParticipantes", false);
        
    } else if(/^(10)$/.test(numAtividade)) {
        
        // Aprovação da Área
        form.setEnabled("aprovarAreaResponsavel", true)
        form.setEnabled("observacaoAreaResponsavel", true)

        // Campos de preenchimento do solicitante
        form.setEnabled("categoria", false);
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("aprovarBP", false);

    } else if(/^(49)$/.test(numAtividade)) {

        // Definição de nível de treinamento
        form.setEnabled("nivelTreinamento", true)
        form.setEnabled("observacaoNivelTreinamento", true)

        // Campos de preenchimento do solicitante
        form.setEnabled("categoria", false);
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("aprovarBP", false);
        form.setEnabled("aprovarAreaResponsavel", false);
        
    } else if(/^(58)$/.test(numAtividade)) {

        // Campos de preenchimento do solicitante
        form.setEnabled("categoria", false);
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("aprovarBP", false);
        form.setEnabled("aprovarAreaResponsavel", false);
        form.setEnabled("nivelTreinamento", false);
        form.setEnabled("observacaoAreaResponsavel", false);

    }

}

function habilitaCamposTabelaParticipantes(form, numAtividade) {
    var participantes = form.getChildrenIndexes("tbParticipante");
    var i = /^(0|7|61|64)$/.test(numAtividade) ? -1 : 0;
    var sufixo = null;
    
    if(participantes.length > 0) {
        for(i; i < participantes.length; i++) {
            sufixo = i == "-1" ? "" : "___" + participantes[i]
    
            form.setEnabled("tbParticipanteIndice" + sufixo, true);
            form.setEnabled("tbParticipanteMatricula" + sufixo, true);
            form.setEnabled("tbParticipanteNome" + sufixo, true);
            form.setEnabled("tbParticipanteCargo" + sufixo, true);
            form.setEnabled("tbParticipanteAdmissao" + sufixo, true);
            form.setEnabled("tbParticipanteSituacao" + sufixo, true);
            form.setEnabled("tbParticipanteTempoEmpresa" + sufixo, true);
            form.setEnabled("tbParticipanteADC" + sufixo, true);
            form.setEnabled("tbParticipanteAderenciaSaber" + sufixo, true);
            form.setEnabled("tbParticipantePDI" + sufixo, true);
        }
    }
}