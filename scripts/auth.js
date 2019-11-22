// listen for auth status changes
// userChangedStatus(User)
auth.onAuthStateChanged(user => {
    if (user) {
        // account info         
        console.log('user logged in: ', user);
        setupUI(user);

    } else  {
        console.log('user logged out');
        setupUI(user);
    }
})


// sign up
const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signUpForm['email-register'].value;
    const password = signUpForm['password-register'].value;
    const name = signUpForm['name-register'].value;
    const phone = signUpForm['phone-register'].value;
    //console.log(email,password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            nombre: name,
            telefono: phone,
            email:  email
        });
    }).then(() =>{
        //console.log(cred);
        // closing modal
        $('#signUpModal').modal('hide');
        signUpForm.reset();
    }).catch(err => {
        console.log(err.message);
        alert(err.message);
    })
});

//log Out
const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})


// login
const loginForm = document.querySelector('#logInForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['email-logIn'].value;
    const password = loginForm['password-logIn'].value;
    console.log(email,password);

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        // closing modal
        $('#logInModal').modal('hide');
        loginForm.reset();
    }).catch(err => {
        console.log(err.message);
        alert(err.message);
    })
})




