
const test = QUnit.test;

QUnit.module('create quest link');

function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html' + searchParams.toString();

    link.textContent = quest.title;

    return link;
}

test('creates correct link html', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'blackwater',
        title: 'Battle of Blackwater',
    };
    const expected = '<a class="quest" href="quest.htmlid=blackwater">Battle of Blackwater</a>';

    //Act

    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);
 
    //Assert
    assert.equal(dom.outerHTML, expected);

});