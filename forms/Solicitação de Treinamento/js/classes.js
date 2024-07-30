var Classes = {

    camposSalario: function(){ return $(".campo-salario"); },
	
    required: function(etapa){ return $(".obrigatorio" +  etapa); },
    
    required1: function(etapa, termo){ return $(".obrigatorio" +  etapa + '-' + termo); },
    
    requiredTab: function(etapa, termo){ return $(".obrigatorio" +  etapa + '-' + termo + 'tab'); },
	
    obterCamposObrigatorios: function(etapa){

        var lstObrigatorio = [];
        
        this.required(etapa).find('input, textarea, select').each(function(){
            if(this.id != ""){
                lstObrigatorio.push(this.id);
            }
        });

        return lstObrigatorio;

    },

    obterCamposObrigatoriosPorTipoTermo: function(etapa, termo){

        var lstObrigatorio = [];
        
        this.required1(etapa, termo).find('input, textarea, select').each(function(){
            if(this.id != ""){
                lstObrigatorio.push(this.id);
            }
        });

        return lstObrigatorio;
    },

    obterCamposObrigatoriosTab: function(etapa, termo){

        var lstObrigatorio = [];
        
        this.requiredTab(etapa, termo).find('input, textarea, select').each(function(){
            if(this.id != ""){
                lstObrigatorio.push(this.id);
            }
        });

        return lstObrigatorio;
    }
}