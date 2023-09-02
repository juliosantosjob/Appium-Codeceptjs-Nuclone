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
        txtDeposit: 'Depositar',
        txtTransfer: 'Transferir',
        txtPay: 'Pagar',
        txtBlockCard: 'Bloquear cartão',
        txtVirtualCard: 'Cartão virtual',
    },

    go() {
        I.waitForElement(this.fields.lblTopHeader, 20);
        I.assert(this.fields.lblTopHeader, this.fields.txtPapito);
    },

    showHomeScreen() {
        I.waitForElement(this.fields.btnShowBalance);
        I.see(this.fields.txtIndicateFriends);
        I.see(this.fields.txtDemand);
        I.see(this.fields.txtDeposit);

        I.performSwipe({ x: 1045, y: 1836 }, { x: 92, y: 1836 });
        // I.swipeLeft(this.fields.txtDeposit, 900, 10);

        I.see(this.fields.txtTransfer);
        I.see(this.fields.txtPay);
        I.see(this.fields.txtBlockCard);
        I.see(this.fields.txtVirtualCard);
    },
};