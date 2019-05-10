import loadProfile from '../../map/load-profile.js';
import api from '../api.js';
import findById from '../find-by-id.js';
import createChoice from '../create-choice.js';
import scoreQuest from '../score-quest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const result = document.getElementById('result');
const choiceForm = document.getElementById('choice-form');
const resultDescription = document.getElementById('result-description');
const user = api.getUser();

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
    
    api.saveUser(scoreQuest(user, choice, quest)); 
    loadProfile();
});
