function scoreQuest(user, choice) {
    user.morale += choice.morale;
    user.army += choice.army;

    return user;
}

export default scoreQuest;