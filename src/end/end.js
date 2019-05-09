import loadProfile from '../../map/load-profile.js';
import api from '../../src/api.js';
import scoreArmy from '../score-army.js';
import scoreMorale from '../score-morale.js';
import armyMessages from '../end/army-messages.js';
import moraleMessages from '../end/morale-message.js';

loadProfile();

const user = api.getUser();
const morale = user.morale;
console.log('user', morale);

const storyDisplay = document.getElementById('story-display');
const armyResults = scoreArmy(user.army);
const moraleResults = scoreMorale(morale);
const armyMessage = armyMessages[armyResults];

let displayMessage = null;
if(moraleResults === 'throne') {
    displayMessage = moraleMessages;
}
else {
    displayMessage = moraleMessages;
}

const moraleDictionary = displayMessage[moraleResults];
const armyDictionary = displayMessage[armyResults];

let story = `You've completed all the battles...` + moraleDictionary;
storyDisplay.textContent = story;
