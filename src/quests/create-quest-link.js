function createQuestLink(quest) {

    const link = document.createElement('a');
    link.classList.add('quest');

    console.log(link);
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    link.textContent = quest.title;
    
    console.log('2', link.href);

    return link;
}
export default createQuestLink;