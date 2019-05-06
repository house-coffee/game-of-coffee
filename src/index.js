import makeUser from './make-user.js';
import api from './api.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', () => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);
    api.signUp(user);

    console.log(user);

    // window.location = 'map.html';
});