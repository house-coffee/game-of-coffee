import loadProfile from '../../map/load-profile.js';
import api from '../api.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuests(questId);

if(!quest) {
    window.location = 'map.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const choices = document.getElementById('choices');
const description = document.getElementById('description');
const result =  document.getElementById('results');

title.textContent = quest.title;
// image.src = 'assets/' +
description.textContent = quest.description;