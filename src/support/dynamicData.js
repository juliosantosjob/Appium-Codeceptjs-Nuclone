function randomContact() {
    const contacts = [
        'Fernando Papito (Você)',
        'Reed Richards',
        'Tony Stark',
        'Stan Lee',
        'Hank Pym',
    ];
    const random = Math.floor(Math.random() * contacts.length);
    return contacts[random];
};

module.exports = {
    randomContact
};