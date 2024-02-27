const { I } = inject();

module.exports = {

    fields: {
        lblTopHeader: '~top-header',
        btnShowBalance: '~show-balance',
        lblNuConta: { xpath: '//*[@content-desc="card-hero"]/*[2]' },
        txtPapito: 'Papito',
        txtNuConta: 'NuConta',
        textAmount: 'Saldo disponível',
        txtTrasfer: 'Transferencia de R$ 5.000 recebida do Tony Stark hoje as 09:00h',
        txtIndicateFriends: 'Indicar amigos',
        txtDemand: 'Cobrar',
        txtDeposit: '//*[contains(@text,"Depositar")]',
        txtTransfer: 'Transferir',
        txtPay: '//*[contains(@text,"Pagar")]',
        txtBlockCard: 'Bloquear cartão',
        txtVirtualCard: '//*[contains(@text,"Cartão virtual")]',
    },

    go() {
        I.waitForElement(this.fields.lblTopHeader, 20);
        I.assert(this.fields.lblTopHeader, this.fields.txtPapito);
    },

    async showHomeScreen() {
        I.waitForElement(this.fields.btnShowBalance);
        I.waitForElement(this.fields.txtIndicateFriends);
        I.waitForElement(this.fields.txtDemand);
        I.waitForElement(this.fields.txtDeposit);
        
        await I.doASwipe({ from: this.fields.txtDeposit, direction: 'elementright -> screenleft' });

        I.waitForElement(this.fields.txtTransfer);
        I.waitForElement(this.fields.txtPay);
        I.waitForElement(this.fields.txtBlockCard);
        I.waitForElement(this.fields.txtVirtualCard);
    },
};