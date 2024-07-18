function validateForm(form){
    var formMode = form.getFormMode();
    var tipo = form.getValue("tipo");
    
    if (formMode == "ADD" ) {
		var dsRetorno = DatasetFactory.getDataset(
				'DSCadastrarTipoTreinamento',
				null,
				[   
                    DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST),
                    DatasetFactory.createConstraint("tipo", tipo, tipo, ConstraintType.MUST)
                ],
				null
			).getMap().iterator();
            
        if (dsRetorno.hasNext()) {
		    throw 'Registro já existe.';
		}
   	}
}