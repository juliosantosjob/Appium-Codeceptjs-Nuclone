const { I } = inject();

module.exports = {
    
    fields: {
        txtTransfer: 'Transferir',
        fldSearch: 'Buscar Contato',
        fldContact: '~contacts'
    },

    tapTransfer() {
        I.tap(this.fields.txtTransfer);
    },

    searchContact(contact) {
        I.fillField(this.fields.fldSearch, contact);
    },

    viewContact(contact) {
        I.waitForElement(this.fields.fldContact, 5);
        I.see(contact);
    }
};