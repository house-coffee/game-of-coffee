import hasCompletedAllQuests from '../src/has-completed-all-quests.js';

const test = QUnit.test;

const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('completed all quests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        completed: {
            one: true,
            two: true,
            three: true
        }
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const hasCompleted = hasCompletedAllQuests(quests, user); 

    //Assert
    assert.equal(hasCompleted, true);
});

test('test not all completed', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        completed: {
            one: true,
            three: true
        }
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const hasCompleted = hasCompletedAllQuests(quests, user); 

    //Assert
    assert.equal(hasCompleted, false);
});