// Função auxiliar para exibição de alertas
function exibirAlerta(iconePersonalizado, tituloPersonalizado, textoPersonalizado) {
    AlertaCustomizadoX = new AlertaCustomizado(iconePersonalizado,tituloPersonalizado,textoPersonalizado,'');
    AlertaCustomizadoX.exibeAlerta1();
}

// Função auxiliar para remover todas as linhas da tabela pai x filho
function excluirTodasLinhas() {
    $("table[tablename='tbParticipante'] tbody tr").not(":first").remove();
    $("#qtd_participantes").val(0);
    $("#quantidadeParticipantes").text(0);
}

// Função auxiliar para verificar se os radios estão selecionados
function verificaRadio(radio) {
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            return true;
        }
    }
    return false
}

var beforeSendValidate = function (numState, nextState) {

    // Sufixo de cada elemento filho da tabela Pai x Filho
    var participantes = document.querySelectorAll("[id^='tbParticipanteIndice___']");
    var sufixoParticipantes = [];

    participantes.forEach(function(participante) {
        // Exemplo de Element ID para facilitar: tbParticipanteIndice___1
        let id = participante.id; // tbParticipanteIndice___1
        let idSeparado = id.split("___"); // ['tbParticipanteIndice', '1']
        let sufixoAtual = idSeparado[1]; // '1'
        sufixoParticipantes.push(sufixoAtual);
    })

    // Número da atividade atual
    let numAtividade = $("#numAtividade").val();

    // Informações Gerais
    let areaSolicitante = $("#areaSolicitante").val();
    let matriculaGestorArea = $("#matriculaGestorArea").val();
    let bpRhResponsavel = $("#bpRhResponsavel").val();
    let matriculaSolicitante = $("#matriculaSolicitante").val();
    let gestorImediato = $("#gestorImediato").val();
    let unidade = $("#unidade").val();
    let diretoria = $("#diretoria").val();

    // Dados do Treinamento
    let categoria = $("#categoria").val();
    let nomeTreinamento = $("#nomeTreinamento").val();
    let optionRadioOrigem = $("[name='optionRadioOrigem']");
    let nomeInstituicao = $("#nomeInstituicao").val();
    let contatoInstituicao = $("#contatoInstituicao").val();
    let optionRadioTipo = $("[name='optionRadioTipo']");
    let inscricoes = $("#inscricoes").val();
    let dataTreinamento = $("#dataTreinamento").val();
    let cargaHoraria = $("#cargaHoraria").val();
    let optionRadioModelo = $("[name='optionRadioModelo']");

    // Dados para comparar as datas de inscrição e de treinamento
    let dataInscricoesSeparada = inscricoes.split("/");
    let dataInscricoesFormatada = dataInscricoesSeparada[2] + "-" + dataInscricoesSeparada[1] + "-" + dataInscricoesSeparada[0];
    let dataInscricoesInstanciada = new Date(dataInscricoesFormatada);

    let dataTreinamentoSeparada = dataTreinamento.split("/");
    let dataTreinamentoFormatada = dataTreinamentoSeparada[2] + "-" + dataTreinamentoSeparada[1] + "-" + dataTreinamentoSeparada[0];
    let dataTreinamentoInstanciada = new Date(dataTreinamentoFormatada);

    // Informações dos Participantes
    let escalaParticipantes = $("#escalaParticipantes").val();
    let quantidadeParticipantes = $("#quantidadeParticipantes").val();
    let planilhaParticipantes = $("#divAdicionarPlanilhaParticipantes #planilhaParticipantes").val();
    let documentoNormativo = $("#divAdicionarDocumentoNormativo #documentoNormativo").val();

    // Justificativa de Treinamento
    let optionRadioRequisitos = $("[name='optionRadioRequisitos']");
    let justificativa = $("#justificativa").val();
    let conteudoProgramaticoDescricao = $("#conteudoProgramaticoDescricao").val();
    let programacaoEventoDescricao = $("#programacaoEventoDescricao").val();
    let anexo_programacao_evento = $("#anexo_programacao_evento").val();
    let anexo_conteudo_programatico = $("#anexo_conteudo_programatico").val();

    // Investimento
    let optionRadioViagem = $("[name='optionRadioViagem']");
    let optionRadioEspecificacao = $("[name='optionRadioEspecificacao']");
    let valorPessoa = $("#valorPessoa").val();
    let valorTotal = $("#valorTotal").val();

    // Aprovação da BP
    let aprovarBP = $("#aprovarBP").val();
    let observacaoBP = $("#observacaoBP").val();

    // Aprovação da Área
    let aprovarAreaResponsavel = $("#aprovarAreaResponsavel").val();
    let observacaoAreaResponsavel = $("#observacaoAreaResponsavel").val();

    // Definição de nível de treinamento
    let nivelTreinamento = $("#nivelTreinamento").val();
    let observacaoNivelTreinamento = $("#observacaoNivelTreinamento").val();

    // Validações de campos em branco
    if(/^(0|7|61|64)$/.test(numAtividade)) {

        // Informações Gerais
        if(matriculaGestorArea == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Matrícula do Gestor da área!")
            return false;
        } else if(matriculaSolicitante == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Matrícula do solicitante!")
            return false;
        } else if(areaSolicitante == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Área Solicitante!")
            return false;
        } else if(bpRhResponsavel == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: BP/RH Responsável!")
            return false;
        } else if(gestorImediato == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome do gestor imediato!")
            return false;
        } else if(unidade == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Unidade!")
            return false;
        } else if(diretoria == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Diretoria!")
            return false;
        }

        // Informações Gerais - Hidden
        $("#areaSolicitante_h").val(areaSolicitante);
        $("#matriculaGestorArea_h").val(matriculaGestorArea);
        $("#bpRhResponsavel_h").val(bpRhResponsavel);
        $("#matriculaSolicitante_h").val(matriculaSolicitante);
        $("#gestorImediato_h").val(gestorImediato);
        $("#unidade_h").val(unidade);
        $("#diretoria_h").val(diretoria);

        // Dados do Treinamento
        if(categoria == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Categoria!")
            return false;
        } else if(!verificaRadio(optionRadioOrigem)) {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Origem!")
            return false;
        } else if(!verificaRadio(optionRadioTipo)) {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Tipo!")
            return false;
        } else if(!verificaRadio(optionRadioModelo)) {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Modelo!")
            return false;
        }else if(nomeTreinamento == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome do treinamento!")
            return false;
        } else if(nomeInstituicao == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome da instituição!")
            return false;
        } else if(contatoInstituicao == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Contato da instituição!")
            return false;
        } else if(inscricoes == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Inscrições!")
            return false;
        } else if(dataTreinamento == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Data do treinamento!")
            return false;
        } else if(cargaHoraria == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Carga horária!")
            return false;
        } else if(dataInscricoesInstanciada > dataTreinamentoInstanciada) {
            exibirAlerta("error", "Atenção", "A data do treinamento não pode ser antes da data de inscrição!")
            return false;
        }
        
        // Dados do Treinamento - Hidden
        $("#categoria_h").val(categoria);
        $("#nomeTreinamento_h").val(nomeTreinamento);
        $("#nomeInstituicao_h").val(nomeInstituicao);
        $("#contatoInstituicao_h").val(contatoInstituicao);
        $("#inscricoes_h").val(inscricoes);
        $("#dataTreinamento_h").val(dataTreinamento);
        $("#cargaHoraria_h").val(cargaHoraria);

        // Informações dos Participantes
        if(escalaParticipantes == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Escala de participantes!")
            return false;
        } else if(escalaParticipantes == "maisCincoParticipantes") {

            excluirTodasLinhas()

            if (planilhaParticipantes == '') {
                exibirAlerta("error", "Atenção", "Você deve adicionar uma planilha de participantes!")
                return false;
            } else if (documentoNormativo == '') {
                exibirAlerta("error", "Atenção", "Você deve adicionar um documento normativo!")
                return false;
            }

            // Informações dos Participantes - Hidden
            $("#escalaParticipantes_h").val(escalaParticipantes);
            $("#quantidadeParticipantes_h").val(quantidadeParticipantes);
            $("#divAdicionarPlanilhaParticipantes #planilhaParticipantes_h").val(planilhaParticipantes);
            $("#divAdicionarDocumentoNormativo #documentoNormativo_h").val(documentoNormativo);

            // Justificativa de Treinamento
            if(!verificaRadio(optionRadioRequisitos)) {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Requisitos!");
                return false;
            } else if(justificativa == '') {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Justificativa!");
                return false;
            } else if(conteudoProgramaticoDescricao == '') {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Conteúdo pragmático!");
                return false;
            } else if(programacaoEventoDescricao == '') {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Programação do evento!");
                return false;
            }  

            // Justificativa de Treinamento - Hidden
            $("#justificativa_h").val(justificativa);
            $("#conteudoProgramaticoDescricao_h").val(conteudoProgramaticoDescricao);
            $("#programacaoEventoDescricao_h").val(programacaoEventoDescricao);
            $("#anexo_programacao_evento_h").val(anexo_programacao_evento);
            $("#anexo_conteudo_programatico_h").val(anexo_conteudo_programatico);

            // Investimento
            if(!verificaRadio(optionRadioViagem)) {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: 'Necessário viajar?'");
                return false;
            } else if(!verificaRadio(optionRadioEspecificacao)) {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Especificação!");
                return false;
            }else if(valorPessoa == '') {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor por pessoa!");
                return false;
            } else if(valorTotal == '') {
                exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor total!");
                return false;
            }

            // Investimento - Hidden
            $("#valorPessoa_h").val(valorPessoa);
            $("#valorTotal_h").val(valorTotal);
            
        } else if(escalaParticipantes == "menosCincoParticipantes") {

            // Participantes da tabela Pai x Filho
            let errosEncontrados = false;

            if (sufixoParticipantes.length > 0) {
                sufixoParticipantes.forEach(sufixo => {
                    let indiceParticipante = $(`#tbParticipanteIndice___${sufixo}`).val();

                    if ($(`#tbParticipanteMatricula___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Matrícula do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return; // Sai da iteração atual após dar erro e testa o próximo sufixo
                    } else if ($(`#tbParticipanteNome___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Nome do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteCargo___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: tbParticipanteCargo do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteAdmissao___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Data de admissão! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteSituacao___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Situação do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteTempoEmpresa___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Tempo de empresa do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteADC___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Nota última ADC do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipanteAderenciaSaber___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Aderência na plataforma SABER do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    } else if ($(`#tbParticipantePDI___${sufixo}`).val() == '') {
                        exibirAlerta("error", "Atenção", `O campo deve estar preenchido: tbParticipantePDI do participante! (Índice: ${indiceParticipante})`);
                        errosEncontrados = true;
                        return;
                    }
                });

                if (errosEncontrados) {
                    return false;
                } else {

                    // Justificativa de Treinamento
                    if(!verificaRadio(optionRadioRequisitos)) {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Requisitos!")
                        return false;
                    } else if(justificativa == '') {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Justificativa!")
                        return false;
                    } else if(conteudoProgramaticoDescricao == '') {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Conteúdo pragmático!")
                        return false;
                    } else if(programacaoEventoDescricao == '') {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Programação do evento!")
                        return false;
                    }
                    
                    // Investimento
                    else if(!verificaRadio(optionRadioViagem)) {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: 'Necessário viajar?'")
                        return false;
                    } else if(!verificaRadio(optionRadioEspecificacao)) {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Especificação!")
                        return false;
                    }else if(valorPessoa == '') {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor por pessoa!")
                        return false;
                    } else if(valorTotal == '') {
                        exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor total!")
                        return false;
                    }

                }
            } else {
                exibirAlerta("error", "Atenção", "Devem ser adicionados participantes!");
                return false;
            }
        }

    } else if(/^(8)$/.test(numAtividade)) {

        // Aprovação da BP
        if(aprovarBP == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Aprovação da BP!")
            return false;
        } else if(observacaoBP == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação da BP!")
            return false;
        }

        // Aprovação da BP - Hidden
        $("#aprovarBP_h").val(aprovarBP);
        $("#observacaoBP_h").val(observacaoBP);
        
    } else if(/^(10)$/.test(numAtividade)) {

        // Aprovação da Área
        if(aprovarAreaResponsavel == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Aprovação da área responsável!")
            return false;
        } else if(observacaoAreaResponsavel == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação da área responsável!")
            return false;
        }

        // Aprovação da Área - Hidden
        $("#aprovarAreaResponsavel_h").val(aprovarAreaResponsavel);
        $("#observacaoAreaResponsavel_h").val(observacaoAreaResponsavel);

    } else if(/^(49)$/.test(numAtividade)) {

        // Definição de nível de treinamento
        if(nivelTreinamento == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nível de treinamento!")
            return false;
        } else if(observacaoNivelTreinamento == '') {
            exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação quanto ao nível de treinamento!")
            return false;
        }

        // Definição de nível de treinamento - Hidden
        $("#nivelTreinamento_h").val(nivelTreinamento);
        $("#observacaoNivelTreinamento_h").val(observacaoNivelTreinamento);

    }
}