import api from '../src/api.js';

function loadProfile() {
    const avatar = document.getElementById('avatar');
    const userName = document.getElementById('user-name');
    const army = document.getElementById('army');
    const morale = document.getElementById('morale');
    const coffee = document.getElementById('coffee');
    
    const user = api.getUser();
    
    if(!user) {
        window.location = './';
    }
    
    avatar.src = '../assets/' + user.house + '.png';
    userName.textContent = user.name;
    army.textContent = user.army;
    morale.textContent = user.morale;
    coffee.textContent = user.caffeinated;
}

export default loadProfile;