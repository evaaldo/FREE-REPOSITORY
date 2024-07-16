function inputFields(form){

    if (form.getValue("numSolicitacao") == "") {
        form.setValue("numSolicitacao", getValue("WKNumProces"));
    }

}