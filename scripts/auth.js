// listen for auth status changes
auth.onAuthStateChanged(user => {
     
})

// sign up
const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signUpForm['email-register'].value;
    const password = signUpForm['password-register'].value;
    console.log(email,password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred);
        // closing modal
        $('#signUpModal').modal('hide');
        signUpForm.reset();
    })
});

//log Out
const logOut = document.querySelector('#logOut');

logOut.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then( () => {
        console.log('user signedOut');
    })
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
    })
})
