import makeUser from '../src/make-user.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'LA');
    formData.set('house', 'Stark');
    formData.set('army', 100);
    formData.set('morale', 50);
    formData.set('caffeinated', 'yes');

    const expected = {
        name: 'LA',
        house: 'Stark',
        army: 100,
        morale: 50,
        caffeinated: 'yes',
    };

    //Act 
    // Call the function you're testing and set the result to a const

    const user = makeUser(formData);

    //Assert
    assert.deepEqual(user, expected);
});
