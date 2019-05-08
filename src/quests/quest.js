import loadProfile from '../../map/load-profile.js';
import api from '../api.js';
// import findById from '../find-by-id.js';
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

title.textContent = quest.title;
image.src = 'assets/' + quest.image;
description.textContent = quest.description;


for(let i = 0; i < quest.choices.length; i++) {
    console.log('hi')
    const choice = quest.choices[i];
    console.log(quest.choices.length);
    const questions = createChoice(choice);
    console.log(choiceForm)
    choiceForm.appendChild(questions);

}



