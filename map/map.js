import api from '../src/api.js';
import loadProfile from './load-profile.js';
import createQuestLink from '../src/quests/create-quest-link.js';

loadProfile();

const quests = api.getQuests();

const section = document.getElementById('battles');
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    console.log('link', link);
    section.appendChild(link);
}



