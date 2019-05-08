import api from '../src/api.js';
import createChoice from '../src/create-choice.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('createChoice returns DOM elements', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const choice = {
        id: 'coffee',
        description: 'you drink some coffee'
    };
    const expected = `<div><label>you drink some coffee</label><input type="radio" value="coffee" id="coffee"></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = createChoice(choice);

    //Assert
    assert.deepEqual(result, expected);
});