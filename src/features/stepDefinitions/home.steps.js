const { pages } = inject();

Given('que o usuario acesse o app', () => {
    pages.app.go();
});

Then('ele visualiza a home', async () => {
    pages.app.showHomeScreen();
});