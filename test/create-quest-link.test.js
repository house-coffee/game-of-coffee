import createQuestLink from '../src/quests/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('creates correct link html', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'blackwater',
        title: 'Battle of Blackwater',
    };
    const expected = '<a class="quest" href="quest.html?id=blackwater">Battle of Blackwater</a>';

    //Act

    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);
 
    //Assert
    assert.equal(dom.outerHTML, expected);

});