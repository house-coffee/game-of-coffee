import loadProfile from '../../map/load-profile.js';
import api from '../api.js';
import findById from '../find-by-id.js';
import createChoice from '../create-choice.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

// if(!quest) {
//     window.location = 'map.html';
// }

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const result = document.getElementById('result');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const armyDisplay = document.getElementById('army');
const moraleDisplay = document.getElementById('morale');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = 'assets/' + quest.image;
description.textContent = quest.description;


for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    choiceForm.appendChild(questions);

}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('radioButtons');
    const choice = findById(quest.choices, choiceId);
    
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    console.log(choice); 
});
