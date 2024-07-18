var Utils = {
    
    desabilitarRadio: function(idRadioLabel) {
        var radio = $("#" + idRadioLabel);
        radio.css({
            "pointer-events": "none",
            "opacity": "0.5"
        });
        radio.closest('label').css({
            "color": "gray"
        });
    },

    habilitarRadio: function(idRadioLabel) {
        var radio = $("#" + idRadioLabel);
        radio.css({
            "pointer-events": "auto",
            "opacity": "1"
        });
        radio.closest('label').css({
            "color": "black"
        });
    },

    ocultarBotoesExclusao: function() {
        Campos.excluirConteudoPragmatico().hide();
        Campos.excluirdocumentos_processo().hide();
        Campos.linhasTbParticipantes().each(function() {
            $(this).find(Campos.btnRemoverParticipante()).hide();
        });
    },

    exibirAlerta: function(iconePersonalizado, tituloPersonalizado, textoPersonalizado) {
        AlertaCustomizadoX = new AlertaCustomizado(iconePersonalizado,tituloPersonalizado,textoPersonalizado,'');
        AlertaCustomizadoX.exibeAlerta1();
    }

}