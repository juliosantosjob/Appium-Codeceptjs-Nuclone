const { pages } = inject();

When('ele clicar no botão para ver o saldo', () => {
    pages.usability.clickSeeBalance();
});

Then('ele vê o saldo {string}', async (blc) => {
   await pages.usability.iSeeMyBalance(blc);
});