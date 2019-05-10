import isDead from '../src/is-dead.js';

const test = QUnit.test;

QUnit.module('create quest link');

test('you are dead', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        army: 0
    };

    //Act
    // Call the function you're testing and set the result to a const
    const dead = isDead(user);

 
    //Assert
    assert.equal(dead, true);

});

test('you are NOT dead', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        army: 10
    };

    //Act
    // Call the function you're testing and set the result to a const
    const dead = isDead(user);

 
    //Assert
    assert.equal(dead, false);

});