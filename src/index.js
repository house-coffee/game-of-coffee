import makeUser from './make-user.js';
import api from './api.js';

const userSaveUser = document.getElementById('user-sign-up');

userSaveUser.addEventListener('submit', () => {
    event.preventDefault();

    const formData = new FormData(userSaveUser);
    const user = makeUser(formData);
    api.saveUser(user);

    window.location = './map.html';
});