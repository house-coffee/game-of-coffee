const test = QUnit.test;

QUnit.module('create completed test');

function createCompletedQuestLink(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.textContent = quest.title;

    return span;
}

test('creates completed quest test, should disable link', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'blackwater',
        title: 'Battle of Blackwater',
    };
    const expected = '<span class="quest completed">Battle of Blackwater</span>';

    //Act

    // Call the function you're testing and set the result to a const
    const dom = createCompletedQuestLink(quest);
 
    //Assert
    assert.equal(dom.outerHTML, expected);

});