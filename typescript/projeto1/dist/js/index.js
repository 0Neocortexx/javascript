"use strict";
// string, boolean, number, ...
let x = 10;
x = 12;
console.log(x);
// inferencia x annotation
// inferencia (Tipagem menos explicita)
let y = 12;
// y = "teste";
// annotation (Tipagem mais explicita)
let z = 12;
// Tipos básicos 
let firstName = "Matheus";
let age = 30;
const idAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
// Adicionar elemento a uma array
myNumbers.push(5);
console.log(myNumbers);
// Tuplas 
let myTuple;
// ERRADO myTuple = [true, false, false];
myTuple = [5, "asasas", ["asdasd", "adasd", "adsad"]];
myTuple.push("dog amarelo", 34);
console.log(myTuple);
// Object literals -> {prop : value}
const user = {
    name: "Pedro",
    age: 12
};
console.log(user);
console.log(user.name);
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
id = "200";
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequena ";
    Size["M"] = "Media";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
// litaral types
let teste;
// teste = "outrovalor";
teste = "autenticado";
teste = null;
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 34));
// console.log(sum("23",23))
function sayhelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayhelloTo("Jonathan"));
// void = função sem retorno
function logger(msg) {
    console.log(msg);
}
logger("teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Jośe");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
let jsjsjdsd = 12;
// narrowing
// checagem de tipos 
function doSometing(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("não foi passado um numero");
}
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item:  ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
//classes 
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    
        //THIS == SELF
    
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
