import scoreArmy from '../src/score-army.js';
const test = QUnit.test;

QUnit.module('score army');

test('alive', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        army: 10
    }

    //Act
    // Call the function you're testing and set the result to a const
    const score = scoreArmy(user.army);

 
    //Assert
    assert.equal(score, 'alive');

});