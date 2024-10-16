"use strict";
// @strict
// If you get stucked, here is the docs: https://www.typescriptlang.org/docs/handbook/2/functions.html
//
// In these exercises we are diving a little bit deeper of how Typescrip
// supports the typical usage of JS functions.
function onListingTileClick(handler) {
    const productId = 5;
    handler(productId);
}
function getEndpoint(url, fetcher /* add an inline function type expression here */) {
    const options = {
        headers: [{ name: 'contentType', value: 'application/json' }],
        attempts: 3
    };
    fetcher(url, options);
}
// Exercise 2), optional parameters
// TODO: fix the type of the tax arg to
//  conform the latter usage.
const calculateTax = (price, tax) => {
    const appliedTax = tax === undefined ? 100 : tax;
    return price * (appliedTax / 100);
};
const price1 = calculateTax(200, 25);
const price2 = calculateTax(245);
// TODO: an extra exercise, if you know the nullish calesing
//  operator. Short, readable and handy solution for handling
//  optional arguments.
// rewrite calulateTax function to use nullish coalesing operator (??)
const calculateTaxWithDoubleQuestionMark = () => { };
class ValidationError extends Error {
    constructor(message) { super(message); }
}
// TODO: What are the inferred return types of these 3 functions? Why?
const generateTitleError = () => { throw new ValidationError('Title must be a string!'); };
const generatePriceError = () => { throw new ValidationError('Price must be a number!'); };
const generateObjectError = () => { throw new ValidationError('Product is not an object!'); };
// TODO: correct the return type, it looks never, but according
//  to the codeflow analysis it is different.
const validateProduct = (product) => {
    if (typeof product !== 'object' && product === null) {
        generateObjectError();
    }
    if (typeof product?.title !== 'string') {
        generateTitleError();
    }
    if (typeof product?.price !== 'number') {
        generatePriceError;
    }
};
// In this implementation we do not trust in our API, 
//  so the response from the API is unknown. We are
//  checking the response and then we assert the proper
//  type to it.
const getProductFromApi = (productId) => {
    if (Math.random() > 0.5) {
        return { title: 'How to buy cheap courses?', price: 5 };
    }
    throw new Error('Network Error');
};
// TODO: What is the inferred return type of this functoin, why?
// TODO: correct the response type with type assertion after it is vaidated
//  to confirm the onSuccess callback.
const clickHandler = (productId, onError, onSuccess) => {
    try {
        const response = getProductFromApi(productId);
        validateProduct(response);
        onSuccess(response);
    }
    catch (error) {
        // The errors in the catch phrase is unkown
        // by default if useUnknownInCatchVariables complier 
        // option is on, otherwise any, here it is explicitly
        // set to unkown.
        //  
        // TODO: Correct the catch branch. You can use the
        //  narrowing patterns here too.
        // If the error is a ValidationError 
        // use its message in the callback, 
        // otherwhise the 'Unkown Error'
        // string.
        onError(error.message);
    }
};
// Exercise 4), Rest parameters, rest arguments
// TODO: correct the rest parameter type, to be valid for the input.
const applyTaxes = (tax, ...prices) => prices.map(price => price * (1 + tax));
const inputPrices = [100, 200, 300, 500];
const taxed = applyTaxes(0.21, ...inputPrices);
// TODO: correct the "input" variable's type to be valid for this function.
const applyTax = (tax, price) => price * (1 + tax);
const inputs = [.25, 200];
const taxedSingle = applyTax(...inputs);
const renderMessage = ({ message, messageType }) => {
    let color;
    if (messageType === 'error') {
        color = 'red';
    }
    else {
        color = 'green';
    }
    return `<p style="color: ${color}">${message}</p>`;
};
renderMessage({ message: 'Ooops, something is wrong here.', messageType: 'error' });
