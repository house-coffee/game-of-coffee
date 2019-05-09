function scoreMorale(morale) {
    if (morale > 50) {
        return 'iron throne';
    } 
    else if(morale > 0) {
        return 'go home';
    }
    else {
        return 'dead';
    }
}

export default scoreMorale;