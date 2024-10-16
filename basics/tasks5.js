// @strict
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var productForDetailsPage = {
    type: "Course",
    title: "Cat Taming 101, Forget It",
    price: 0.0,
    isPaid: false,
};
var productForCheckoutPage = {
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
var isProductFree = function (product) {
    return product.isFree;
};
console.log(isProductFree(productForCheckoutPage));
var fullCart = {
    products: [productForCheckoutPage, productForDetailsPage]
};
// Modify the emptyCart function to allow clearing the cart
// by replacing the `products` array with an empty array.
var emptyCart = function (cart) {
    return __assign(__assign({}, cart), { products: [] }); // Return a new cart with an empty products array
};
/* function emptyMyCart<Type>(name: string, product: string, something: Type) {
    return name.concat(" " + product + something);
}

console.log(emptyMyCart<number>("Julia", "milk", 4)); */
// Modify the addProductToCart function to return a new cart with the new product
// while keeping the original `products` array readonly.
var addProductToCart = function (product, cart) {
    return __assign(__assign({}, cart), { products: __spreadArray(__spreadArray([], cart.products, true), [product], false) }); // Return a new cart with the new product added
};
console.log(addProductToCart(productForCheckoutPage, fullCart));
var mapProductsToPrices = function (cart) {
    var mapped = {};
    cart.products.forEach(function (product) { return mapped[product.title] = product.price; });
    return mapped;
};
console.log(mapProductsToPrices(fullCart));
// TODO: Generalize the FeatureFlags interface to allow adding
// any kind of feature flag. What kind of trouble we got?
// TODO: We decided to create a separate API endpoint to get the
//  the blocked emails, in this interface we just enable the feature.
//  Modify the FeatureFlags intrface and the function signature to
//  correct the type errors.
var addFeatureFlag = function (featureFlags, feature, flag) {
    featureFlags[feature] = flag;
};
// TODO: correct the PathAccount interface, using the already
//  existing Account's interface to make this function type error free.
var renderPathAccount = function (account) {
    return "<a href=\"".concat(account.path, "\">").concat(account.name, "</a>");
};
var renderDomainSubAccount = function (account) {
    return "<span>".concat(account.domain, ": <a href=\"/accounts/").concat(account.rootId, "\">Go To Root Account</a></span>");
};
// Revisit the Everyday Types chapter to compare the interfaces and the types. In the Object Types
// chapter it is not so elaborated: 
//   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// It is worth to check this chapter also in the Object Types
//   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// Exercise 6)
// Tuples
// TODO: complete the type to conform the function declaration.
var calculateTax = function (_a) {
    var price = _a[0], tax = _a[1];
    return price * (tax / 100);
};
// TODO: Define the return type of the function.
var calculateTotalAndDiscount = function (cartData) {
    var itemPrice = cartData[0], discounts = cartData.slice(1);
    var discount = discounts.reduce(function (sum, discountData) {
        var discountType = discountData[0], amount = discountData[1];
        var itemDiscount;
        if (discountType === 'flat') {
            itemDiscount = Math.max(amount, 0);
        }
        else {
            itemDiscount = Math.max(itemPrice * amount / 100, 0);
        }
        return sum + itemDiscount;
    }, 0);
    var total = Math.max(itemPrice - discount, 0);
    return [total, discount];
};
var cart = [1000, ['flat', 10], ['percent', 20], ['flat', 100]];
var _a = calculateTotalAndDiscount(cart), total = _a[0], discount = _a[1];
console.log(calculateTotalAndDiscount(cart));
