var Classes = {
	
    required: function(etapa){ return $(".obrigatorio" +  etapa); },
	
    obterCamposObrigatorios: function(etapa){

        var lstObrigatorio = [];
        
        this.required(etapa).find('input, textarea, select').each(function(){
            if(this.id != ""){
                lstObrigatorio.push(this.id);
            }
        });

        return lstObrigatorio;

    },
    
}