const { I, pages } = inject();

Feature('Search App');

Scenario('Buscando um contato', async () => {
    const contactName = 'Tony Stark'

    pages.app.accessApp();
    pages.search.tapTransfer();
    pages.search.searchContact(contactName);
    await pages.search.displayedContact(contactName);
}).tag('@search').tag('@regressive');