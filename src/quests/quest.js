import loadProfile from '../../map/load-profile.js';
import api from '../api.js';
import findById from '../find-by-id.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);
console.log(quest);

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