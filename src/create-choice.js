function createChoice(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.textContent = choice.description;
    
    div.appendChild(label);
    input.setAttribute('type', 'radio');
    input.value = choice.id;
    input.id = choice.id;
    
    div.appendChild(input);
    return div;
}

export default createChoice;