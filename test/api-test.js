import api from '../src/api.js';
import questData from '../src/quests/quest-data.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('saves user sets user and returns on getUSer', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'LA',
        house: 'Stark',
        army: 100,
        morale: 50,
        caffeinated: 'yes'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    api.saveUser(user);
    const result = api.getUser();

    //Assert
    assert.deepEqual(result, user);
});

test('returns list of quest', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = questData;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const quests = api.getQuests();


    //Assert
    assert.deepEqual(quests, expected);
});

test('returns quest by ID', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expectedQuest = questData[1];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const foundQuest = api.getQuest(expectedQuest.id);


    //Assert
    assert.deepEqual(foundQuest, expectedQuest);
});
