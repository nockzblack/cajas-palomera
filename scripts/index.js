// DOM elements
const loggedOutLinks = document.querySelectorAll('.loggedOut');
const loggedInLinks = document.querySelectorAll('.loggedIn');
const accountDetails = document.querySelector('.accountDetails');

const setupUI = (user) => {
  if (user) {
      db.collection('users').doc(user.uid).get().then(doc => {
          const html = `
            <div>Logged in as ${user.email}</div>
            <div>${doc.data().nombre}</div>
            <div>${doc.data().telefono}</div>
          `;
        accountDetails.innerHTML = html;
      });
      // toggle user UI elements
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        accountDetails.innerHTML = '';
        // toggle user elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};




const cotizacionForm = document.querySelector('#cotizadorForm');
// click nueva cotización()
cotizacionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    let material = cotizacionForm['materialFormControSelect'].value;
    let largo = cotizacionForm['large-dimention'].value;
    let ancho = cotizacionForm['width-dimention'].value;
    let alto = cotizacionForm['height-dimention'].value;
    let cantidad = cotizacionForm['amount'].value;
    let logoPath = cotizacionForm['file-selector'].value;

    const auxMedidas = new Medidas(largo,ancho, alto);
    const auxCotizacion = new Cotizacion(material, auxMedidas, logoPath, cantidad, user);
    auxCotizacion.realizarCotizacion();
})