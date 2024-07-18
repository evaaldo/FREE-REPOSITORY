function validateForm(form){
    var formMode = form.getFormMode();
    var categoria = form.getValue("categoria");
    
    if (formMode == "ADD" ) {
		var dsRetorno = DatasetFactory.getDataset(
				'DSCadastrarCategoriaTreinamento',
				null,
				[   
                    DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST),
                    DatasetFactory.createConstraint("categoria", categoria, categoria, ConstraintType.MUST)
                ],
				null
			).getMap().iterator();
            
        if (dsRetorno.hasNext()) {
		    throw 'Registro já existe.';
		}
   	}
}