import loadProfile from '../../map/load-profile.js';
import api from '../../src/api.js';
import scoreArmy from '../score-army.js';
import scoreMorale from '../score-morale.js';
import armyMessages from '../end/army-messages.js';
import moraleMessages from '../end/morale-message.js';

loadProfile();

const user = api.getUser();

const storyDisplay = document.getElementById('story-display');
const armyResults = scoreArmy(user.army);
const moraleResults = scoreMorale(user.morale);
console.log(armyResults);
console.log(moraleResults);
let displayMessage = null;

if(armyResults === 'alive') {
    if(moraleResults === 'throne') {
        displayMessage = moraleMessages + armyMessages;
        console.log(displayMessage);
    }
    else if(moraleResults === 'home') {
        displayMessage = moraleMessages + armyMessages;
        console.log(displayMessage);
    }
}
else {
    displayMessage = armyMessages;
}

const moraleDictionary = displayMessage[moraleResults];
const armyDictionary = displayMessage[armyResults];
console.log(moraleDictionary);
console.log(armyDictionary);
console.log(displayMessage);
let story = `You've completed all the battles...`;
if(!moraleDictionary) {
    story += armyDictionary;
} else {
    story += moraleDictionary + armyDictionary;
}
storyDisplay.textContent = story;
