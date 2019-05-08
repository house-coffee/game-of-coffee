// import quests from "./quests/quest-data.js";

function scoreQuest(user, choice, quest) {
    user.morale += choice.morale;
    user.army += choice.army;
    user.completed[quest.id] = true;

    return user;
}

export default scoreQuest;