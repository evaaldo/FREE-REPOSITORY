class AlertaCustomizado {

    constructor(icone, titulo, texto, rodape) {
        this.icone = icone;
        this.titulo = titulo;
        this.texto = texto;
        this.rodape = rodape;
    }

    exibeAlerta1() {
        Swal.fire({
            icon: this.icone,
            title: this.titulo,
            text: this.texto,
            footer: this.rodape,
            allowOutsideClick: false,
			allowEscapeKey: false,
        });
    }
    
    exibeAlerta2() {
        Swal.fire({
            position: 'top-end',
            icon: this.icone,
            title: this.titulo,
            showConfirmButton: false,
            timer: 8000
        });
    }

    exibeAlertaHtml(){
        Swal.fire({
            icon: this.icone,
            title: this.titulo,
            html: this.texto,
            footer: this.rodape
        });
    }
}