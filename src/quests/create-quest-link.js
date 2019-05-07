function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html' + searchParams.toString();

    link.textContent = quest.title;

    return link;
}
export default createQuestLink;