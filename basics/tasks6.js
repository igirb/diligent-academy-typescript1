"use strict";
// @strict
// This chapter picks some pages from here: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
// and from here: https://www.typescriptlang.org/docs/handbook/utility-types.html
const featureFlagEnabler = (flag, activators) => {
    activators[flag]();
};
const table = {
    rows: [
        { title: 'How to Hack NASA with HTML?', price: 100.0 },
        { title: 'What is your favorite colour? Brown?', price: 200.0 }
    ],
    columns: [
        { header: 'Price', field: 'price' },
        { header: 'Title', field: 'title' }
    ]
};
const getField = (table, row, field) => table.rows[row][field];
const getCuratorName = (curator) => curator.name;
const listingFixture = (overrides /* */) => ({
    title: "Schrödringer's Cat under testing",
    price: 100.0,
    type: "Course",
    ...overrides
});
const freeListing = listingFixture({ price: 0.0 });
const messages = {
    user_not_found: 'Sry, Your user is not found.',
    invalid_account: 'Sry, your account is invalid.',
    ongoing_checkout: 'There is another checkout is ongoing. It is not allowed to start a new one.',
    permission_denided: 'Sry, you do not have the proper rights to access this site.'
};
const getHumanReadableMessage = (code) => messages[code];
const getIdFromAccount = (account) => account.id;
