function inputFields(form){

    // Será usado para passar valores nos campos hidden
    
    if (form.getValue("numSolicitacao") == "") {
        form.setValue("numSolicitacao", getValue("WKNumProces"));
    }

}