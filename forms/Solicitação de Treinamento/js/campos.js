var Campos = {

    // Campos auxiliares

    numAtividade: function() {
        return $("#numAtividade");
    },

    qtdParticipantes: function() {
        return $("#qtd_participantes");
    },

    // Campos de informações gerais
    
    matriculaGestorArea: function() {
        return $("#matriculaGestorArea");
    },
 
    bpRhResponsavel: function() {
        return $("#bpRhResponsavel");
    },
 
    areaSolicitante: function() {
        return $("#areaSolicitante");
    },
 
    matriculaSolicitante: function() {
        return $("#matriculaSolicitante");
    },
 
    gestorImediato: function() {
        return $("#gestorImediato");
    },
 
    unidade: function() {
        return $("#unidade");
    },
 
    diretoria: function() {
        return $("#diretoria");
    },

    // Campos de dados do treinamento
 
    categoria: function() {
        return $("#categoria");
    },
 
    optionRadioInterno: function() {
        return $("#optionRadioInterno");
    },
 
    optionRadioExterno: function() {
        return $("#optionRadioExterno");
    },
 
    optionRadioInCompany: function() {
        return $("#optionRadioInCompany");
    },
 
    optionRadioCursoTreinamento: function() {
        return $("#optionRadioCursoTreinamento");
    },
 
    optionRadioWorkshopForum: function() {
        return $("#optionRadioWorkshopForum");
    },
 
    optionRadioPalestraCongresso: function() {
        return $("#optionRadioPalestraCongresso");
    },
 
    optionRadioEAD: function() {
        return $("#optionRadioEAD");
    },
 
    optionRadioPresencial: function() {
        return $("#optionRadioPresencial");
    },
 
    optionRadioHibrido: function() {
        return $("#optionRadioHibrido");
    },
 
    nomeTreinamento: function() {
        return $("#nomeTreinamento");
    },
 
    nomeInstituicao: function() {
        return $("#nomeInstituicao");
    },
 
    contatoInstituicao: function() {
        return $("#contatoInstituicao");
    },
 
    inscricoes: function() {
        return $("#inscricoes");
    },
 
    dataTreinamento: function() {
        return $("#dataTreinamento");
    },
 
    cargaHoraria: function() {
        return $("#cargaHoraria");
    },

    // Campos de informações dos participantes (Pai x Filho)
 
    escalaParticipantes: function() {
        return $("#escalaParticipantes");
    },
 
    anexo_planilhaParticipantes: function() {
        return $("#anexo_planilhaParticipantes");
    },
 
    anexo_documentoNormativo: function() {
        return $("#anexo_documentoNormativo");
    },
 
    // Campos de justificativa do treinamento
 
    optionRadioISO: function() {
        return $("#optionRadioISO");
    },
 
    optionRadioAtualizacaoLei: function() {
        return $("#optionRadioAtualizacaoLei");
    },
 
    optionRadioAcaoEngajamento: function() {
        return $("#optionRadioAcaoEngajamento");
    },
 
    optionRadioCumprimentoMatriz: function() {
        return $("#optionRadioCumprimentoMatriz");
    },
 
    optionRadiotbParticipantePDI: function() {
        return $("#optionRadiotbParticipantePDI");
    },
 
    optionRadioSemFaciliador: function() {
        return $("#optionRadioSemFaciliador");
    },

    justificativa: function() {
        return $("#justificativa");
    },
 
    conteudoProgramaticoDescricao: function() {
        return $("#conteudoProgramaticoDescricao");
    },
 
    anexoConteudoProgramatico: function() {
        return $("#anexo_conteudo_programatico");
    },
 
    programacaoEventoDescricao: function() {
        return $("#programacaoEventoDescricao");
    },
 
    anexoProgramacaoEvento: function() {
        return $("#anexo_programacao_evento");
    },
 
    // Campos de investimento

    optionRadioViajar: function() {
        return $("#optionRadioViajar");
    },
 
    optionRadioNaoViajar: function() {
        return $("#optionRadioNaoViajar");
    },
 
    optionRadioIndividual: function() {
        return $("#optionRadioIndividual");
    },
 
    optionRadioEmGrupo: function() {
        return $("#optionRadioEmGrupo");
    },
 
    valorPessoa: function() {
        return $("#valorPessoa");
    },
 
    valorTotal: function() {
        return $("#valorTotal");
    },

    // Campos de aprovação da BP
 
    aprovarBP: function() {
        return $("#aprovarBP");
    },
 
    observacaoBP: function() {
        return $("#observacaoBP");
    },

    // Campos de aprovação da área
 
    aprovarAreaResponsavel: function() {
        return $("#aprovarAreaResponsavel");
    },
 
    observacaoAreaResponsavel: function() {
        return $("#observacaoAreaResponsavel");
    },

    // Campos de definição de nível de treinamento
 
    nivelTreinamento: function() {
        return $("#nivelTreinamento");
    },
 
    observacaoNivelTreinamento: function() {
        return $("#observacaoNivelTreinamento");
    },

    // Campos de correção de erros (Notificação automática)
 
    envioCorrecao: function() {
        return $("#envioCorrecao");
    },
 
    envioCorrecaoObservacao: function() {
        return $("#envioCorrecaoObservacao");
    },
 
    // Botões

    adicionarParticipante: function() {
        return $("#adicionarParticipante");
    },

    removerTodosParticipante: function() {
        return $("#removerTodosParticipante");
    },
 
    excluirplanilhaParticipantes: function() {
        return $("#excluirplanilhaParticipantes");
    },

    excluirdocumentoNormativo: function() {
        return $("#excluirdocumentoNormativo");
    },

    removerParticipante: function() {
        return $("#removerParticipante");
    },

    // Tabela de participantes

    tbParticipante: "tbParticipante",
    separador: "___",
    
    participantes: {

        _prefixo: function() {
            return Campos.tbParticipante;
        },
        _separador: function() {
            return Campos.separador;
        },

        indice: function(indice) {
            return $("#" + this._prefixo() + "Indice" + this._separador() + indice);
        },
        matricula: function(indice) {
            return $("#" + this._prefixo() + "Matricula" + this._separador() + indice);
        },
        nome: function(indice) {
            return $("#" + this._prefixo() + "Nome" + this._separador() + indice);
        },
        cargo: function(indice) {
            return $("#" + this._prefixo() + "Cargo" + this._separador() + indice);
        },
        admissao: function(indice) {
            return $("#" + this._prefixo() + "Admissao" + this._separador() + indice);
        },
        tempoEmpresa: function(indice) {
            return $("#" + this._prefixo() + "TempoEmpresa" + this._separador() + indice);
        },
        adc: function(indice) {
            return $("#" + this._prefixo() + "ADC" + this._separador() + indice);
        },
        aderenciaSaber: function(indice) {
            return $("#" + this._prefixo() + "AderenciaSaber" + this._separador() + indice);
        },
        pdi: function(indice) {
            return $("#" + this._prefixo() + "PDI" + this._separador() + indice);
        }

    },

    // Funções auxiliares

    checked: function (inputName) {
        for (var i in inputName) {
            if (inputName[i].checked) {
            return inputName[i].value;
            }
        }
        return false;
    },
    
    parent: function (element) {
        return $(element).parent();
    },

    indice: function (campo) {
        return campo.attr("name").split(this.separador)[1];
    },

    indiceById: function (id) {
        return id.split(this.separador)[1];
    },

    habilitar: function (campo) {
        campo.removeAttr("tabindex");
        campo.removeAttr("aria-disabled");
        if (campo.is("input[type=text],textarea")) {
            campo.prop("readonly", false);
        } else if (campo.is("select")) {
            campo.removeClass("desabilitado");
            campo.unbind("mousedown").mousedown(function () {
            return true;
            });
            campo.unbind("keydown").keydown(function () {
            return true;
            });
        } else if (campo.is("input[type=checkbox]")) {
            campo.prop("disabled", false);
        }
    },

    desabilitar: function (campo) {
        campo.attr("tabindex", -1);
        campo.attr("aria-disabled", true);
        if (campo.is("input[type=text],textarea")) {
            campo.prop("readonly", true);
        } else if (campo.is("select")) {
            campo.addClass("desabilitado");
            campo.unbind("mousedown").mousedown(function () {
            return false;
            });
            campo.unbind("keydown").keydown(function () {
            return false;
            });
        } else if (campo.is("input[type=checkbox]")) {
            campo.prop("disabled", true);
        }
    },

    val: function (campo) {
        return campo.is("input[type=text],input[type=hidden],select,textarea")
            ? null != campo.val()
            ? campo.val().trim()
            : ""
            : campo.html();
    }

}