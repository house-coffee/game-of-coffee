function scoreMorale(morale) {
    console.log('score function', morale);
    if(morale >= 50) {
        return 'throne';
    } 
    else if(morale < 50 && morale > 0) {
        return 'home';
    }
    else {
        return 'dead';
    }
}

export default scoreMorale;