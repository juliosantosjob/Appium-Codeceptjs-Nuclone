const { I } = inject();

module.exports = {

    fields: {
        lblUserBalance: '~user-balance',
        txtPapito: 'Papito',
        txtNuConta: 'NuConta',
        btnShowBalance: '~show-balance',
    },

    tapShowBalance() {
        I.waitAndTap(this.fields.btnShowBalance);
    },

    viewBalance(balance) {
        I.seeElement(this.fields.lblUserBalance);
        I.assert(this.fields.lblUserBalance, balance);
    }
};