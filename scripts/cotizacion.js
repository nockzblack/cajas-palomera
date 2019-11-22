// Initializing a class definition
class Cotizacion {
    constructor(material, medidas, imagen, cantidad, user) {
        this.material = material;
        this.medidas = medidas;
        this.urlImagen = imagen;
        this.cantidad = cantidad;
        this.user = user;
    }

    realizarCotizacion() {
        db.collection('cotizaciones').doc(this.user.uid).collection('lista').add({
            material: this.material,
            largo: this.medidas.largo,
            ancho: this.medidas.ancho,
            alto: this.medidas.alto,
            cantidad: this.cantidad,
            logoPath: this.urlImagen
        }).then(() => {
            cotizacionForm.reset();
            
            const auxNotificacionCenter = new NotificationCenter('ferbenavides98@hotmail.com');
            auxNotificacionCenter.sendCotizacionVentas(this.user,this);
    
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
        })
    }
}

class Medidas {
    constructor(largo, ancho, alto) {
        this.largo = largo;
        this.ancho = ancho;
        this.alto = alto;
    }
}