// Initializing a class definition
class NotificationCenter {
    constructor(email) {
        this.emailEmpresa = email;
    }


    // Adding a method to the constructor
    sendCotizacionVentas(user, coti) {
        if (user) {
            let email;
            let name;
            let phone;
            db.collection('users').doc(user.uid).get().then(doc => {
                email = doc.data().email;
                name = doc.data().nombre;
                phone = doc.data().telefono;
                
            }).then(() => {
                const html = `<h2> Nueva Cotización <h2><h3> El usuario:${email} </h3><h3> con el nombre: ${name}</h3><h3> y telefono: ${phone}</h3><p>Requiere la cotización de una caja con las especificaciones</p><p>Material: ${coti.material}</p><p>Medidas</p><p>    -largo: ${coti.medidas.largo} cm</p><p>  -ancho: ${coti.medidas.ancho} cm</p><p>    -alto: ${coti.medidas.alto} cm</p><p>Cantidad: ${coti.cantidad}</p><p>Imagen </p><img src="${coti.urlImagen}" width="300"/><p>Saludos Firebase 🤖</p>`;

                const Http = new XMLHttpRequest();
                const url='https://us-central1-cajas-palomera.cloudfunctions.net/sendMail?dest='+ this.emailEmpresa;
                const htmlEncode = encodeURIComponent(html);
                //console.log(html);
            
                const finalURL = url + '&' + 'message='+htmlEncode;
                Http.open("GET", finalURL);
                Http.send();
                Http.onreadystatechange = (e) => {
                    console.log(Http.responseText)
                }
                //console.log('cotizacion a ventas enviada');
                this.sendCotizacionCliente(email, coti);
            });   
        }
        
        
    }

    sendCotizacionCliente(email, coti) {
        const html = `<h2> Copia de Cotización<h2><p>Requiere la cotización de una caja con las especificaciones</p><p>Material: ${coti.material}</p><p>Medidas</p><p>    -largo: ${coti.medidas.largo} cm</p><p>  -ancho: ${coti.medidas.ancho} cm</p><p>    -alto: ${coti.medidas.alto} cm</p><p>Cantidad: ${coti.cantidad}</p><p>Imagen </p><img src="${coti.urlImagen}" width="300"/><p>Saludos Firebase 🤖</p>`;
        //console.log(email);
        const Http = new XMLHttpRequest();
        const url='https://us-central1-cajas-palomera.cloudfunctions.net/sendMail?dest='+ email;
        const htmlEncode = encodeURIComponent(html);
        //console.log(html);
            
        const finalURL = url + '&' + 'message='+htmlEncode;
        Http.open("GET", finalURL);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
        console.log('cotizacion copia a cliente enviada');
        const str = 'cotizacion enviada correctamente, se ha enviado una copia al correo: ' + email;
        alert(str);
    }
}