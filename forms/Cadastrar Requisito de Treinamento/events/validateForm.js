function validateForm(form){
    var formMode = form.getFormMode();
    var requisito = form.getValue("requisito");
    
    if (formMode == "ADD" ) {
		var dsRetorno = DatasetFactory.getDataset(
				'DSCadastrarRequisitodeTreinamento',
				null,
				[   
                    DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST),
                    DatasetFactory.createConstraint("requisito", requisito, requisito, ConstraintType.MUST)
                ],
				null
			).getMap().iterator();
            
        if (dsRetorno.hasNext()) {
		    throw 'Registro já existe.';
		}
   	}
}