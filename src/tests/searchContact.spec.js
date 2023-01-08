const { I, pages } = inject();

Feature('Search App');

Scenario('Buscando um contato', async () => {
    pages.app.accessApp();
    pages.search.tapTransfer();
    pages.search.searchContact('Tony Stark');
    await pages.search.seeContact('Tony Stark');
}).tag('@search').tag('@regressive');