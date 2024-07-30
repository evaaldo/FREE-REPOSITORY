var beforeSendValidate = function (numState, nextState) {

    // Sufixo de cada elemento filho da tabela Pai x Filho
    var sufixoParticipantes = [];

    Campos.indicesParticipantes().forEach(function(participanteId) {
        let idSeparado = participanteId.split("___");
        let sufixoAtual = idSeparado[1];
        sufixoParticipantes.push(sufixoAtual);
    })

    let optionRadioOrigem = $("[name='optionRadioOrigem']");
    let inscricoes = $("#inscricoes").val();
    let dataTreinamento = $("#dataTreinamento").val();
    let optionRadioModelo = $("[name='optionRadioModelo']");

    // Dados para comparar as datas de inscrição e de treinamento
    let dataInscricoesSeparada = inscricoes.split("/");
    let dataInscricoesFormatada = dataInscricoesSeparada[2] + "-" + dataInscricoesSeparada[1] + "-" + dataInscricoesSeparada[0];
    let dataInscricoesInstanciada = new Date(dataInscricoesFormatada);

    let dataTreinamentoSeparada = dataTreinamento.split("/");
    let dataTreinamentoFormatada = dataTreinamentoSeparada[2] + "-" + dataTreinamentoSeparada[1] + "-" + dataTreinamentoSeparada[0];
    let dataTreinamentoInstanciada = new Date(dataTreinamentoFormatada);

    // Investimento
    let optionRadioViagem = $("[name='optionRadioViagem']");
    let optionRadioEspecificacao = $("[name='optionRadioEspecificacao']");

    // Validações de campos em branco
    if(/^(0|7|61|64)$/.test(Campos.numAtividade().val())) {

        // Informações Gerais
        if(Campos.matriculaGestorArea().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Matrícula do Gestor da área!")
            return false;
        } else if(Campos.matriculaSolicitante().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Matrícula do solicitante!")
            return false;
        } else if(Campos.areaSolicitante().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Área Solicitante!")
            return false;
        } else if(Campos.bpRhResponsavel().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: BP/RH Responsável!")
            return false;
        } else if(Campos.gestorImediato().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome do gestor imediato!")
            return false;
        } else if(Campos.unidade().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Unidade!")
            return false;
        } else if(Campos.diretoria().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Diretoria!")
            return false;
        }

        // Dados do Treinamento
        if(Campos.categoria().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Categoria!");
            return false;
        } else if(Campos.tipo().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Categoria!");
            return false;
        } else if(!Formulario.verificaRadio(optionRadioOrigem)) {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Origem!");
            return false;
        } else if(!Formulario.verificaRadio(optionRadioModelo)) {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Modelo!");
            return false;
        }else if(Campos.nomeTreinamento().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome do treinamento!");
            return false;
        } else if(Campos.nomeInstituicao().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nome da instituição!");
            return false;
        } else if(Campos.contatoInstituicao().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Contato da instituição!");
            return false;
        } else if(Campos.inscricoes().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Inscrições!");
            return false;
        } else if(Campos.dataTreinamento().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Data do treinamento!");
            return false;
        } else if(Campos.cargaHoraria().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Carga horária!");
            return false;
        } else if(dataInscricoesInstanciada > dataTreinamentoInstanciada) {
            Utils.exibirAlerta("error", "Atenção", "A data do treinamento não pode ser antes da data de inscrição!");
            return false;
        }

        // Informações dos Participantes
        if(Campos.escalaParticipantes().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Escala de participantes!");
            return false;
        } else if(Campos.escalaParticipantes().val() == "maisCincoParticipantes") {

            Formulario.excluirTodasLinhas();

            if (Campos.planilhaParticipantes().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "Você deve adicionar uma planilha de participantes!");
                return false;
            } else if (Campos.documentoNormativo().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "Você deve adicionar um documento normativo!");
                return false;
            }

            // Justificativa de Treinamento
            if(Campos.requisito().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Requisitos!");
                return false;
            } else if(Campos.justificativa().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Justificativa!");
                return false;
            } else if(Campos.conteudoProgramaticoDescricao().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Conteúdo pragmático!");
                return false;
            } else if(Campos.programacaoEventoDescricao().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Programação do evento!");
                return false;
            }

            // Investimento
            if(!Formulario.verificaRadio(optionRadioViagem)) {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: 'Necessário viajar?'");
                return false;
            } else if(!Formulario.verificaRadio(optionRadioEspecificacao)) {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Especificação!");
                return false;
            }else if(Campos.valorPessoa().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor por pessoa!");
                return false;
            } else if(Campos.valorTotal().val() == '') {
                Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor total!");
                return false;
            }
            
        } else if(Campos.escalaParticipantes().val() == "menosCincoParticipantes") {

            // Participantes da tabela Pai x Filho
            let errosEncontrados = false;

            if (sufixoParticipantes.length > 0) {
                sufixoParticipantes.forEach(sufixo => {
                    let indiceParticipante = $(`#tbParticipanteIndice___${sufixo}`).val();

                    if (Campos.participantes.matricula(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Matrícula do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return; // Sai da iteração atual após dar erro e testa o próximo sufixo
                    } else if (Campos.participantes.nome(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Nome do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.cargo(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: tbParticipanteCargo do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.admissao(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Data de admissão! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.situacao(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Situação do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.tempoEmpresa(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Tempo de empresa do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.adc(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Nota última ADC do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.aderenciaSaber(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: Aderência na plataforma SABER do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    } else if (Campos.participantes.pdi(sufixo).val() == '') {
                        Utils.exibirAlerta("error", "Atenção", `O campo deve estar preenchido: PDI do participante! (Índice: ${Campos.participantes.indice(sufixo).val()})`);
                        errosEncontrados = true;
                        return;
                    }
                });

                if (errosEncontrados) {
                    return false;
                } else {

                    // Justificativa de Treinamento
                    if(Campos.requisito().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Requisitos!")
                        return false;
                    } else if(Campos.justificativa().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Justificativa!")
                        return false;
                    } else if(Campos.conteudoProgramaticoDescricao().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Conteúdo pragmático!")
                        return false;
                    } else if(Campos.programacaoEventoDescricao().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Programação do evento!")
                        return false;
                    }
                    
                    // Investimento
                    else if(!Formulario.verificaRadio(optionRadioViagem)) {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: 'Necessário viajar?'")
                        return false;
                    } else if(!Formulario.verificaRadio(optionRadioEspecificacao)) {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Especificação!")
                        return false;
                    }else if(Campos.valorPessoa().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor por pessoa!")
                        return false;
                    } else if(Campos.valorTotal().val() == '') {
                        Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Valor total!")
                        return false;
                    }

                }
            } else {
                Utils.exibirAlerta("error", "Atenção", "Devem ser adicionados participantes!");
                return false;
            }
        }

    } else if(/^(8)$/.test(Campos.numAtividade().val())) {

        // Aprovação da BP
        if(Campos.aprovarBP().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Aprovação da BP!")
            return false;
        } else if(Campos.observacaoBP().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação da BP!")
            return false;
        }
        
    } else if(/^(10)$/.test(Campos.numAtividade().val())) {

        // Aprovação da Área
        if(Campos.aprovarAreaResponsavel().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Aprovação da área responsável!")
            return false;
        } else if(Campos.observacaoAreaResponsavel().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação da área responsável!")
            return false;
        }

    } else if(/^(49)$/.test(Campos.numAtividade().val())) {

        // Definição de nível de treinamento
        if(Campos.nivelTreinamento().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Nível de treinamento!")
            return false;
        } else if(Campos.observacaoNivelTreinamento().val() == '') {
            Utils.exibirAlerta("error", "Atenção", "O campo deve estar preenchido: Observação quanto ao nível de treinamento!")
            return false;
        }

    }
}