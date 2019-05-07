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
        morale: 15,
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
    choices: [{
        id: 'fire',
        description: 'Use Green Fire against your enemies',
        result: `
        You discover the Green Fire and use it to demolish Stannis's fleet.
        `,
        army: 0,
        morale: 25,
    }, {
        id: 'hide',
        description: 'You get scared and hide',
        result: `
        While none of your soldiers die, you miss the entire battle.  You spend your time 
        cowering with Joffrey  
        `,
        army: 0,
        morale: -10,
    }, {
        id: 'frontline',
        description: 'You decide to go to the front line and fight!',
        result: `
        You rally your troops, and fight the good fight. Surprisingly you win, 
        but you lose many soldiers in the process.
        `,
        army: -30,
        morale: 15,
    }]

};
const winterfell = {
    id: 'winterfell',
    title:'Battle of Winterfell',
    image: 'winterfell.jpg',
    description: `
    The Night King is coming to take over all of Westeros, and kill Bran Stark (the three-eyed raven).
    What do you do?
    `, 
    choices: [{
        id: 'nightking',
        description: 'You go after the Night King',
        result: `
        You and your men go after the Night King, and get destroyed by his army of White Walkers.
        `,
        army: -75,
        morale: -30,
    }, {
        id: 'trench',
        description: 'Reinforce Winterfell\'s defense, and dig a trench',
        result: `
        The trench holds off the Night King's army off for a while, 
        but they still find a way to invade.', 
        `,
        army: -30,
        morale: 15,
    }, {
        id: 'arya',
        description: 'You decide to stick close to Arya Stark',
        result: `
        HOLY CRAP! Arya is amazing and kills the Night King on her own. 
        You cheer her along! The battle is won.
        `,
        army: 0,
        morale: 50,
    }]
};

const quests = [wedding, blackwater, winterfell];

export default quests;