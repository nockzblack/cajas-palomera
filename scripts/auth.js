// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
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
    //console.log(email,password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        //console.log(cred);
        // closing modal
        $('#signUpModal').modal('hide');
        signUpForm.reset();
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
    })
})
