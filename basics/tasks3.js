"use strict";
// @strict
// If you get stucked, here is the docs: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
//
// Narrowing is one of the most important concept of Typescript. It helps you 
//  to understand why sometimes get strange type errors. The key message from here
//  is typescript extensively analyse the control flow, and in this handbook
//  chapter you find some patterns to help typescript with this analysis and
//  cover all possible cases.
//
// The following examples point out some typical patterns. Look for them in the handbook
// and apply them to the case. Check the types of the variables in each branch to see
// how Typescript narrowing the different types. It is worth to check before and after
// the correction.
const products = [
    {
        title: "How to Hack NSA with HTML? (no typos included)",
        price: 100.8
    },
    {
        title: "Switching on computers 101",
        price: 50.3
    }
];
const cart = {
    products: products
};
// TODO: 
// This function is working only for a list of numbers.
// Correct its implementation with a corresponding type guards to 
// work properly with a single number too.
const getTotal = (prices) => {
    if ( /* add type guard here */) {
        const total = prices.reduce((sum, price) => sum + price, 0);
        return Math.round(total);
    }
    else {
        return Math.round(prices);
    }
};
const courseTotal = getTotal(products[0].price);
const cartTotal = getTotal(cart.products.map(product => product.price));
const accounts = [
    {
        name: 'My Awesome Account',
        domain: 'my.awesome.info'
    },
    {
        name: 'Other Great Account',
        path: '/great'
    }
];
// TODO: Make it possible to handle the getUrl both the DomainAccount and a
//  Path account types.
const getUrl = (account, subPath) => {
    if ( /* add type guard here */) {
        return `${account.path}/${subPath}`;
    }
    else {
        return `${account.domain}/${subPath}`;
    }
};
// TODO: make it possible to handle both the string and number
//  type of price.
const getListingTotal = (listing) => {
    if ( /* add type guard here */) {
        return listing.price * listing.quantity;
    }
    else {
        return parseFloat(listing.price) * listing.quantity;
    }
};
// Exercise 4) Narrowing, instanceof
// 
class InvalidAccountId extends Error {
    constructor(id) {
        super();
        this.id = id;
    }
}
;
class AccessDenided extends Error {
}
;
// TODO: Make it possible to handle different Error objects
//  correctly hence their properties are different.
const getErrorMessage = (error) => {
    if ( /* */) {
        return `Your account ID (${error.id}) is invalid.`;
    }
    else {
        return 'You do not have access to this account.';
    }
};
// TODO: In this example we can distinguish Courses from Programs
//  by the existence of the sequential prop. Fill this custom Type predicate
//  to fulfill the latter usage below.
const isProduct = (product) => {
    /* add the implementation of the type here */
};
const describeProduct = (product) => {
    if (isProduct(product)) {
        return `This is a Program and it is ${product.sequential ? 'sequential' : 'non-sequential'}.`;
    }
    else {
        return `This is a Course.`;
    }
};
// TODO: The account specific promotion is added later to the code,
//  and in some function this case is not handled properly. Add the
//  explicit return type here. Despite the docs the never + default hack is not
//  needed, if the return type is explicit. Correct the function body, to handle
//  the account case.
//  What is the type of the promotion.scope? (to recap a previous topic)
const getPromotionMessage = (promotion) => {
    switch (promotion.scope) {
        case 'user':
            return `Here is your personal discount for you. Only valid with User ID: ${promotion.userId}`;
        case 'listing':
            return `This listing has a discount. Only valid with this listing ID: ${promotion.listingId}`;
        /* TODO */
    }
};
const calculateDiscount = (promotion) => {
    return promotion.listingPrice - promotion.amount;
};
