// DOM elements
const guideList = document.querySelector('.guides');


// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {

    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
  

};


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