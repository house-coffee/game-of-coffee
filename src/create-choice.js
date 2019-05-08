function createChoice(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    div.appendChild(label);
    div.appendChild(input);
    console.log(div);
}
export default createChoice;