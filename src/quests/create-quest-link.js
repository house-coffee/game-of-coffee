function createQuestLink(quest) {
    console.log('call');
    const link = document.createElement('a');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = '../src/quests/quest.html?' + searchParams.toString();
    
    link.textContent = quest.title;
    
    console.log(searchParams);
    return link;
}
export default createQuestLink;