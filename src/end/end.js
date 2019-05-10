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

const moraleDictionary = moraleMessages[moraleResults];
const armyDictionary = armyMessages[armyResults];

let story = `You've completed all the battles...`;

if(armyResults === 'dead') {
    story += armyDictionary;
} else {
    story += armyDictionary + moraleDictionary;
} 
storyDisplay.textContent = story;
