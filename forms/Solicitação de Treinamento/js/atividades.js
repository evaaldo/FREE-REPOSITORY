Atividades = {
    
    inicializar: function(){
        this.desabilitarTodosOsPaineis();
        
        if(/^(0|7)$/.test(Campos.numAtividade().val())) Atividades.etapaPreencherSolicitacao();
        else if(Campos.numAtividade().val() == 8) Atividades.etapaAprovacaoBP();
        else if(Campos.numAtividade().val() == 10) Atividades.etapaAprovacaoAreaResponsavel();
        else if(Campos.numAtividade().val() == 49) Atividades.etapaDefinicaoNivelTreinamento();
        else if(Campos.numAtividade().val() == 58) Atividades.etapaCorrecaoErroNotificacao();
    },

    desabilitarTodosOsPaineis: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoNivelTreinamento).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoCorrecaoNotificacao).hide();
    },

    etapaPreencherSolicitacao: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).show();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).show();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).show();
    },

    etapaAprovacaoBP: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).show();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).show();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).show();

        Campos.inputAtividades.inputPreenchimentoSolicitante().prop("readonly", true);
        Campos.textareaAtividades.textareaPreenchimentoSolicitante().prop("readonly", true);

        this.mapaDeLabelRadio().forEach((radio) => {
            Utils.desabilitarRadio(radio);
        });

        Utils.ocultarBotoesExclusao();
    },

    etapaAprovacaoAreaResponsavel: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).show();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).show();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel).show();

        Campos.inputAtividades.inputPreenchimentoSolicitante().prop("readonly", true);
        Campos.textareaAtividades.textareaPreenchimentoSolicitante().prop("readonly", true);
        Campos.inputAtividades.inputAprovacaoBP().prop("readonly", true);
        Campos.textareaAtividades.textareaAprovacaoBP().prop("readonly", true);

        Utils.ocultarBotoesExclusao();
    },

    etapaDefinicaoNivelTreinamento: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).show();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).show();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel).show();
        Campos.painel(Campos.sufixosPaineis.sufixoNivelTreinamento).show();

        Campos.inputAtividades.inputPreenchimentoSolicitante().prop("readonly", true);
        Campos.textareaAtividades.textareaPreenchimentoSolicitante().prop("readonly", true);
        Campos.inputAtividades.inputAprovacaoBP().prop("readonly", true);
        Campos.textareaAtividades.textareaAprovacaoBP().prop("readonly", true);
        Campos.inputAtividades.inputAprovacaoAreaResponsavel().prop("readonly", true);
        Campos.textareaAtividades.textareaAprovacaoAreaResponsavel().prop("readonly", true);

        Utils.ocultarBotoesExclusao();
    },

    etapaCorrecaoErroNotificacao: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoInfosGerais).show();
        Campos.painel(Campos.sufixosPaineis.sufixoDadosTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInfosParticipantes).show();
        Campos.painel(Campos.sufixosPaineis.sufixoJustificativaTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoInvestimento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).show();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel).show();
        Campos.painel(Campos.sufixosPaineis.sufixoNivelTreinamento).show();
        Campos.painel(Campos.sufixosPaineis.sufixoCorrecaoNotificacao).show();

        Campos.inputAtividades.inputPreenchimentoSolicitante().prop("readonly", true);
        Campos.textareaAtividades.textareaPreenchimentoSolicitante().prop("readonly", true);
        Campos.inputAtividades.inputAprovacaoBP().prop("readonly", true);
        Campos.textareaAtividades.textareaAprovacaoBP().prop("readonly", true);
        Campos.inputAtividades.inputAprovacaoAreaResponsavel().prop("readonly", true);
        Campos.textareaAtividades.textareaAprovacaoAreaResponsavel().prop("readonly", true);
        Campos.inputAtividades.inputNivelTreinamento().prop("readonly", true);
        Campos.textareaAtividades.textareaNivelTreinamento().prop("readonly", true);

        Utils.ocultarBotoesExclusao();
    },

    mapaDeLabelRadio: function() {
        return [
            Campos.radios.labelInterno,
            Campos.radios.labelExterno,
            Campos.radios.labelInCompany,
            
            Campos.radios.labelCursoTreinamento,
            Campos.radios.labelWorkshopForum,
            Campos.radios.labelPalestraCongresso,

            Campos.radios.labelEAD,
            Campos.radios.labelPresencial,
            Campos.radios.labelHibrido,

            Campos.radios.labelISO,
            Campos.radios.labelAtualizacaoLei,
            Campos.radios.labelAcaoEngajamento,
            Campos.radios.labelCumprimentoMatriz,
            Campos.radios.labelParticipantePDI,
            Campos.radios.labelSemFaciliador,
            
            Campos.radios.labelViajar,
            Campos.radios.labelNaoViajar,
            
            Campos.radios.labelIndividual,
            Campos.radios.labelEmGrupo,
        ]
    }

}

document.addEventListener("DOMContentLoaded", function(event){
	Atividades.inicializar();
});