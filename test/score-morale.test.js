import scoreMorale from '../src/score-morale.js';
const test = QUnit.test;

QUnit.module('score morale');

test('test morale, iron throne', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        morale: 60
    };

    //Act
    // Call the function you're testing and set the result to a const
    const morale = scoreMorale(user.morale);

 
    //Assert
    assert.equal(morale, 'throne');

});

test('test morale, go home', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        morale: 10
    };

    //Act
    // Call the function you're testing and set the result to a const
    const morale = scoreMorale(user.morale);

 
    //Assert
    assert.equal(morale, 'home');

});

test('test morale, dead', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        morale: 0
    };

    //Act
    // Call the function you're testing and set the result to a const
    const morale = scoreMorale(user.morale);

 
    //Assert
    assert.equal(morale, 'dead');

});