const { pages } = inject();

Given('que o usuario acesse o app', () => {
    pages.app.accessApp();
});

Then('ele visualiza a home', async () => {
    await pages.app.validHome();
});