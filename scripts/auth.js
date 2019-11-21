// sign up
const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signUpForm['email'].value;
    const password = signUpForm['password'].value;
    console.log(email,password);

    // sign up the user
    
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred);
        const modal = document.querySelector("#modalSignUp");
        //modal.modal('hide');
        $('#modalSignUp').modal('hide');
        signUpForm.reset();
    })

    const logOut = document.querySelector('#logOut');

    logOut.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then( () => {
            console.log('user signedOut');
        })
    })
    
});