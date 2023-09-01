const { I } = inject();

module.exports = {
    fields: {
        btnTopHeader: '~top-header',
        txtNuConta: '~card-hero',
        btnViewBalance: '~show-balance',
        txtTrasfer: '//*[@text="Transferencia de R$ 5.000 recebida do Tony Stark hoje as 09:00h"]',
        txtIndicateFriends: '//*[@text="Indicar amigos"]',
        txtDemand: '//*[@text="Cobrar"]',
        txtDeposit: '//*[@text="Depositar"]',
        txtTransfer: '//*[@text="Transferir"]',
        txtPay: '//*[@text="Pagar"]',
        txtBlockCard: '//*[@text="Bloquear cartão"]',
        txtVirtualCard: '//*[@text="Bloquear cartão"]',
        txtPapito: 'Papito',
        txtNuConta: 'NuConta'
    },

    accessApp() {
        I.waitForElement(this.fields.btnTopHeader, 20);
    },

    async validHome() {
        I.waitForElement(this.fields.txtNuConta);
        I.waitForElement(this.fields.btnViewBalance);
        I.waitForElement(this.fields.txtTrasfer);
        I.waitForElement(this.fields.txtIndicateFriends);
        I.waitForElement(this.fields.txtDemand);
        I.waitForElement(this.fields.txtDeposit);

        I.performSwipe({ x: 1045, y: 1836 }, { x: 92, y: 1836 });
        
        
        I.wait(5);
        I.waitForElement(this.fields.txtTransfer);
        I.waitForElement(this.fields.txtPay);
        I.waitForElement(this.fields.txtBlockCard);
        I.waitForElement(this.fields.txtVirtualCard);

        var btnTopHeader = await I.grabTextFrom(this.fields.btnTopHeader);
        I.assertOk(btnTopHeader.includes(this.fields.txtPapito));

        var btnNuConta = await I.grabTextFrom(this.fields.txtNuConta);
        I.assertOk(btnNuConta.includes("NuConta"));
    },
}