const { pages } = inject();

When('ele clicar no botão para ver o saldo', () => {
    pages.usability.tapShowBalance();
});

Then('ele vê o saldo {string}', async (balance) => {
    pages.usability.viewBalance(balance);
});