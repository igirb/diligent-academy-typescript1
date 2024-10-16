"use strict";
let num = 10;
console.log(num);
function add(a, b) {
    return a + b;
}
let result = add(1, 2);
console.log(result);
let person1 = {
    name: 'Will Smith',
    age: 50,
    greet(message) {
        console.log(`${message}: ${this.name}`);
    }
};
person1.greet('Hello, my name is');
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(message) {
        console.log(message);
    }
}
let person2 = new Person2('Will Smith', 50);
person2.greet('Hi');
let userID = 12;
let c = 'hello';
let d = 1;
// let incorrectUser: UserWithRole = {
//     name: 'Gipsz Jakab',
//     age: 55
// }
let correctUser = {
    name: "Bob",
    age: 23,
    permission: ['read', 'write', 'admin']
};
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(`correct numbers: ${numbers}`);
//numbers.push("6");
console.log(`incorrect numbers: ${numbers}`); //after conversion to js will still run - have to be careful
//if you want your function to accept any type:
function firstElement(arr) {
    return arr[0];
}
const names = ['Annamari', 'Béla', 'Cecil'];
console.log("first element of names: " + firstElement(names));
const nbrs = [1, 2, 3, 4];
console.log("first element of nbrs: " + firstElement(nbrs));
function swap(a, b) {
    return [b, a];
}
console.log(swap('a', 'b'));
function getArea(shape) {
    if (isCircle(shape)) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return Math.pow(shape.side, 2);
    }
}
function isCircle(shape) {
    return shape.kind === 'circle';
}
