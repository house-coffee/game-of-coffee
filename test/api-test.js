import api from '../src/api.js';
const test = QUnit.test;
QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and returns on getUSer', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'LA',
        house: 'Stark',
        army: 100,
        morale: 50,
        caffeinated: 'yes'
    };
    console.log(user);
    //Act 
    // Call the function you're testing and set the result to a const
    api.signUp(user);
    const result = api.getUser();


    //Assert
    assert.deepEqual(result, user);
});