function displayFields(form,customHTML){
    var numAtividade = getValue("WKNumState");
	var formMode = form.getFormMode();
	var mobile = form.getMobile();

	customHTML.append('<script type="text/javascript">');
	customHTML.append('Formulario.formMode = "' + formMode + '";');
	customHTML.append('Formulario.numState = "' + numAtividade + '";');
	customHTML.append('Formulario.isMobile = "' + mobile + '";');
	customHTML.append('</script>');
}