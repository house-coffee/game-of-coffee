function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        house: formData.get('house'),
        army: 100,
        morale: 50,
        caffeinated: formData.get('caffeinated'),
        completed: {},
    };
    return user;
}
export default makeUser;