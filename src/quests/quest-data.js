const wedding = {
    id: 'wedding',
    title: 'Red Wedding',
    image: 'redwedding.jpg',
    description: `
    Edmure Tully is getting married to Roslin Frey! You are invited to attend. 
    Things start to get suspcious...
    `,
    choices: [{
        id: 'stay',
        description: 'Stay and enjoy the music.',
        result: `
        You got a little too tipsy and didn't relize the band is actually 
        assasins. Your morale takes a hit and you loose some of your men. 
        `,
        army: -50,
        morale: -40,
    }, {
        id: 'wolf',
        description: 'You hear a wolf howl and go investiage.',
        result: `
        You run out to see a wolf getting killed by enemy soliders. Drunk and 
        alarmed, you run back in and warn your soliders. 
        `,
        army: -10,
        morale: +15,
    }, {
        id: 'skip',
        description: 'You skip the whole thing',
        result: `
        You decide to skip the wedding and drink by yourself.
        `,
        army: 0,
        morale: -10,
    }]
};
const blackwater = {
    id: 'blackwater',
    title: 'Battle of Blackwater',
    image: 'blackwater.jpg',
    description: `
    Stannis Baratheon has invaded Blackwater Bay with his massive fleet. 
    How do you defend the Red Keep? 
    `,

};
const winterfell = {
    id: 'winterfell',
    title:'Battle of Winterfell',
    image: 'winterfell.jpg',
    description: `
    The Night King is coming to take over all of Westeros, and kill Bran Stark (the three-eyed raven).
    What do you do?
    `,
};

const quests = [wedding, blackwater, winterfell];

export default quests;