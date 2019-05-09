function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        house: formData.get('house'),
        army: 100,
        morale: 50,
        caffeinated: formData.get('caffeinated'),
        completed: {
            quest1: false,
            quest2: false,
            quest3: false
        },
    };
    return user;
}
export default makeUser;