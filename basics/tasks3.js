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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var products = [
    {
        title: "How to Hack NSA with HTML? (no typos included)",
        price: 100.8
    },
    {
        title: "Switching on computers 101",
        price: 50.3
    }
];
var cart = {
    products: products
};
// TODO: 
// This function is working only for a list of numbers.
// Correct its implementation with a corresponding type guards to 
// work properly with a single number too.
var getTotal = function (prices) {
    if (typeof prices === "object") {
        var total = prices.reduce(function (sum, price) { return sum + price; }, 0);
        return Math.round(total);
    }
    else {
        return Math.round(prices);
    }
};
var courseTotal = getTotal(products[0].price);
var cartTotal = getTotal(cart.products.map(function (product) { return product.price; }));
var accounts = [
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
var getUrl = function (account, subPath) {
    if ("path" in account) {
        return "".concat(account.path, "/").concat(subPath);
    }
    else {
        return "".concat(account.domain, "/").concat(subPath);
    }
};
// TODO: make it possible to handle both the string and number
//  type of price.
var getListingTotal = function (listing) {
    if (typeof listing["price"] === "number") {
        return listing.price * listing.quantity;
    }
    else {
        return parseFloat(listing.price) * listing.quantity;
    }
};
// Exercise 4) Narrowing, instanceof
// 
var InvalidAccountId = /** @class */ (function (_super) {
    __extends(InvalidAccountId, _super);
    function InvalidAccountId(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    return InvalidAccountId;
}(Error));
;
var AccessDenided = /** @class */ (function (_super) {
    __extends(AccessDenided, _super);
    function AccessDenided() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccessDenided;
}(Error));
;
// TODO: Make it possible to handle different Error objects
//  correctly hence their properties are different.
var getErrorMessage = function (error) {
    if (error instanceof InvalidAccountId) {
        return "Your account ID (".concat(error.id, ") is invalid.");
    }
    else {
        return 'You do not have access to this account.';
    }
};
// TODO: In this example we can distinguish Courses from Programs
//  by the existence of the sequential prop. Fill this custom Type predicate
//  to fulfill the latter usage below.
var isProduct = function (product) {
    return product.sequential !== undefined;
};
var describeProduct = function (product) {
    if (isProduct(product)) {
        return "This is a Program and it is ".concat(product.sequential ? 'sequential' : 'non-sequential', ".");
    }
    else {
        return "This is a Course.";
    }
};
console.log(describeProduct({ title: "vmi", sequential: false }));
// TODO: The account specific promotion is added later to the code,
//  and in some function this case is not handled properly. Add the
//  explicit return type here. Despite the docs the never + default hack is not
//  needed, if the return type is explicit. Correct the function body, to handle
//  the account case.
//  What is the type of the promotion.scope? (to recap a previous topic)
var getPromotionMessage = function (promotion) {
    switch (promotion.scope) {
        case 'user':
            return "Here is your personal discount for you. Only valid with User ID: ".concat(promotion.userId);
        case 'listing':
            return "This listing has a discount. Only valid with this listing ID: ".concat(promotion.listingId);
        case 'account':
            return "Here is an account specific discount for you. Only valid with account ID: ".concat(promotion.accountId);
    }
};
var isFlatPromotion = function (promotion) {
    return promotion.type === "flat";
};
var calculateDiscount = function (promotion) {
    if (promotion.listingPrice === 'free') {
        return 0.0;
    }
    var discountedPrice;
    if (isFlatPromotion(promotion)) {
        discountedPrice = promotion.listingPrice - promotion.amount;
    }
    else {
        discountedPrice = promotion.listingPrice * (1 - promotion.amount);
    }
    return Math.max(discountedPrice, 0.0);
};
