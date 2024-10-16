"use strict";
// @strict
// If you get stucked, here is the docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeAssert = typeAssert;
// Exercise 1) Primitives and arrays
// TODO: remove the "any" type, and add a concerete type for these basic primitives
// How they are working, if you remove all type definitions? How inference is working here?
var price; /* add the correcy type annotation here instead of any */
price = 100.5;
var title; /* add type annotation here */
title = "How to Hack NASA with HTML?";
var option; /* add type annotation here */
option = true;
var prices; /* add type annotation here */
prices = [3, 5, 100, 3.5];
var titles; /* add type annotation here */
titles = ["How to Hack NASA with HTML?", "Cat Taming Masterclass"];
var options; /* add type annotation here */
options = [true, true, false];
var anyProduct = { title: 'Book', price: 45 };
var productTitle = anyProduct.title;
var priceWithTaxes = anyProduct.price * (1.25);
var upperCaseTitle = anyProduct.title.toUpperCase();
console.log(productTitle, priceWithTaxes, upperCaseTitle);
// Exercise 3) Anonymus Functions
// In JS we are putting anonymus functions to a lot of place, 
//  typically in the higher order functions like map. Typescript
//  can figure out the anonymus functions types based on the usage.
// TODO: correct the parameter's type of createKeysFromTitles. Spot out
//  how it is changing the map function's types. 
var titelsToConvert = ["How to Hack NASA with HTML?", "Cat Taming Masterclass"];
var createKeysFromTitles = function (titles) {
    return titles.map(function (title) { return title.toLowerCase().replaceAll(" ", "_").replaceAll("?", ""); });
};
var keys = createKeysFromTitles(titelsToConvert);
console.log(keys);
var checkoutCourse = {
    title: "What You can Learn from Your Cat?",
    price: 100.0,
};
var shoppingCartCourse = {
    title: "What You can Learn from your Cat?",
    price: "100.0"
};
// TODO: Ooops, after the Course interface is changed,
//  something is gone wrong here. Correct the funtion body for now
//  creatively, in the Narrowing chapter we will see a lot of
//  patterns to handle these cases.
var getTax = function (course) {
    return Number(course.price) * 0.25;
};
console.log(getTax(checkoutCourse));
var account = {
    id: 5,
    name: "Awesome Account",
    currency: "USD",
};
var getAccountName = function (account) { return account.name; };
// TODO: Interesting, here we are not using the Account Type Alias,
//  however the function is correctly typed, and accepts accounts.
//  Why?
var getCurrency = function (account) { return account.currency; };
var accountName = getAccountName(account);
var accountCurrency = getCurrency(account);
// Exercise 6) Type Assertions
//
// It is possible to tell Typescript how to
// handle some data. Typically this data is 
// comes from the API.
// TODO: The fetch account method just fetch a general object,
//  In our application we trust in the API. Assert it to an 
//  Account type (declared above) to be able to use it as an Account
//  in the other parts of the application.  
var fetchAccount = function (id) { return ({ id: id, name: "Some Account", currency: "USD" }); };
var currentAccount = fetchAccount(4); /* add Type Assertion here */
var currentAccountName = currentAccount.name;
var firstCurrency = 'USD';
var secondCurrency = 'EUR';
var usd = firstCurrency;
var eur = secondCurrency;
// TODO: When corrected the Currency type, another issue come up
//  later in the code. 
//  Check the inferred type of the someAccount variable.
//  It is inferred to string, but in the getSomeCurrency
//  function we using our Currency type. How add some Type 
//  assertion to the someAccount object to correct the later
//  usage of the someAccount variable. 
//
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
var someAccount = {
    name: "My Awesome Account",
    currency: usd
};
var getSomeCurrency = function (account) { return account.currency; };
var someCurrency = getSomeCurrency(someAccount);
console.log(getSomeCurrency(someAccount));
var removeCurrency = function (account) {
    return __assign(__assign({}, account), { currency: null });
};
// Spoiler Alert!
//
// The exercises are over. Here are some type tests to check
// your solutions. They should be error free. Also here you can 
// check some solutions too.
//
// Exercise 1 tests
typeAssert();
typeAssert();
typeAssert();
typeAssert();
typeAssert();
typeAssert();
/**
 * A simple type assertion function which always expects a true-type.
 */
function typeAssert() { }
