"use strict";
// @strict
const productForDetailsPage = {
    type: "Course",
    title: "Cat Taming 101, Forget It",
    price: 0.0,
    isPaid: false,
};
const productForCheckoutPage = {
    type: "Course",
    title: "Cat Taming 101, Forget It",
    price: 0.0,
    isFree: true,
};
// TODO: correct the function body to calculate the product'S
// free status correctly.
// What if, we do net set the function's return type
// explicitly just let the Typescript to infer it?
//  Typesciprt is not a "Godmode", it is still possible
//  to make runtime failures. 
const isProductFree = (product) => {
    return product.isFree;
};
// TODO: Modify the Cart interface to make it possible
// to empty the cart.
const emptyCart = (cart) => cart.products = [];
// TODO: Modify the Cart interface to disallow pushing 
//  a new Item to the cart's products.
// TODO: Modifty the function's body below (addProductToCart), to allow
//  add a new product, but the array, remains readonly.
const addProductToCart = (product, cart) => cart.products.push(product);
const mapProductsToPrices = (cart) => {
    let mapped = {};
    cart.products.forEach(product => mapped[product.title] = product.price);
    return mapped;
};
// TODO: Generalize the FeatureFlags interface to allow adding
// any kind of feature flag. What kind of trouble we got?
// TODO: We decided to create a separate API endpoint to get the
//  the blocked emails, in this interface we just enable the feature.
//  Modify the FeatureFlags intrface and the function signature to
//  correct the type errors.
const addFeatureFlag = (featureFlags, feature, flag) => {
    featureFlags[feature] = flag;
};
// TODO: correct the PathAccount interface, using the already
//  existing Account's interface to make this function type error free.
const renderPathAccount = (account) => {
    return `<a href="${account.path}">${account.name}</a>`;
};
const renderDomainSubAccount = (account) => {
    return `<span>${account.domain}: <a href="/accounts/${account.rootId}">Go To Root Account</a></span>`;
};
// Revisit the Everyday Types chapter to compare the interfaces and the types. In the Object Types
// chapter it is not so elaborated: 
//   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// It is worth to check this chapter also in the Object Types
//   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// Exercise 6)
// Tuples
// TODO: complete the type to conform the function declaration.
const calculateTax = ([price, tax] /* add type declaration here */) => price * (tax / 100);
// TODO: Define the return type of the function.
const calculateTotalAndDiscount = (cartData) => {
    const [itemPrice, ...discounts] = cartData;
    const discount = discounts.reduce((sum, discountData) => {
        const [discountType, amount] = discountData;
        let itemDiscount;
        if (discountType === 'flat') {
            itemDiscount === Math.max(itemPrice - amount, 0);
        }
        else {
            itemDiscount === Math.max(itemPrice - (itemPrice * amount / 100), 0);
        }
        return sum + itemPrice;
    }, 0);
    const total = itemPrice - discount;
    return [total, discount];
};
const cart = [1000, ['flat', 10], ['percent', 20], ['flat', 100]];
const [total, discount] = calculateTotalAndDiscount(cart);
