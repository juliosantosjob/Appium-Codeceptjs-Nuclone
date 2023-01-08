const { I } = inject();

module.exports = {
  fields: {
    btnUserBalance: "~user-balance",
    txtPapito: "Papito",
    txtNuConta: "NuConta",
    btnShowBalance: "//android.view.ViewGroup[@content-desc='show-balance']/android.widget.TextView"
  },

  clickSeeBalance() {
    I.waitAndTap(this.fields.btnShowBalance);
  },

  async iSeeMyBalance(balance) {
    var btnUserBalance = await I.grabTextFrom(this.fields.btnUserBalance);
    I.seeElement(this.fields.btnUserBalance);
    I.assertOk(btnUserBalance.includes(balance));
  }
}