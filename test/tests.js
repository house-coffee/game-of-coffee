const test = QUnit.test;

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        house: formData.get('house'),
        army: 100,
        morale: 50,
        caffeinated: formData.get('caffeinated')
    };

    return user;
}



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