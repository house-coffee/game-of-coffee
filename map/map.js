import api from '../src/api.js';
import loadProfile from './load-profile.js';
import createQuestLink from '../src/quests/create-quest-link.js';
import createCompletedQuest from '../src/create-completed-quest.js';


loadProfile();

const quests = api.getQuests();
const user = api.getUser();
const section = document.getElementById('battles');
for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    section.appendChild(link);
    
    // let dom;
    if(user.completed[quest.id]) {
        // dom = createCompletedQuest(quest);
        link.classList.add('completed');
    }
    // else {
    //     dom = createQuestLink(quest);
    // }
    // section.appendChild(dom);
}



