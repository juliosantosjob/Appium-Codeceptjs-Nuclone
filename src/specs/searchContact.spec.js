const { pages } = inject();
const data = require('../support/dynamicData');

Feature('Pesquisa no app');

Scenario('Buscando um contato existente', async () => {
    const contact = data.randomContact();

    pages.app.go();
    pages.search.tapTransfer();
    pages.search.searchContact(contact);
    pages.search.viewContact(contact);
}).tag('@search').tag('@regression');