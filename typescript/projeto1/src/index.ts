
// string, boolean, number, ...
let x:number = 10;

x = 12;

console.log(x);

// inferencia x annotation

// inferencia (Tipagem menos explicita)
let y  = 12;
// y = "teste";

// annotation (Tipagem mais explicita)
let z: number = 12;

// Tipos básicos 
let firstName: string = "Matheus";
let age: number = 30;
const idAdmin: boolean = true;

// String != string
console.log(typeof firstName);
firstName = "João";
console.log(firstName);

// object
const myNumbers: number[] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase())


// Adicionar elemento a uma array
myNumbers.push(5);
console.log(myNumbers);

// Tuplas 
let myTuple: [number, string,string[]];
// ERRADO myTuple = [true, false, false];
myTuple = [5, "asasas", ["asdasd", "adasd","adsad"]];
myTuple.push("dog amarelo",34);
console.log(myTuple)

// Object literals -> {prop : value}
const user: {name:string, age:number} = {
    name: "Pedro",
    age: 12
}
console.log(user);
console.log(user.name);

// any
let a:any = 0
a = "teste";
a = true;
a = [];

// union type
let id:string | number = "10"
id = 200;
id = "200";
// id = True

// type alias
type myIdTipe = number | string
const userId: myIdTipe = 10;
const productId: myIdTipe = "00001";
const shirId: myIdTipe = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequena ",
    M = "Media",
    G = "Grande",
}
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
}
console.log(camisa);

// litaral types
let teste: "autenticado" | null;
// teste = "outrovalor";
teste = "autenticado";
teste = null;

// funcoes
function sum(a: number,b:number ) {
    return a + b
}
console.log(sum(12,34))
// console.log(sum("23",23))

function sayhelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayhelloTo("Jonathan"));

// void = função sem retorno
function logger(msg:string): void {
    console.log(msg)
}
logger("teste!");

function greeting(name:string, greet?:string) {
    if(greet) {
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
}
greeting("Jośe");

// In tsconfig.json exists removeComments: remove todos os comentários

// interface
interface MathFunctionParams{
    n1 : number,
    n2 : number
}
function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1:1 , n2:2 }));
let jsjsjdsd:number = 12;


// narrowing
// checagem de tipos 

function doSometing( info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("não foi passado um numero")
}

function showArrayItems<T>(arr:T[]){
    arr.forEach((item) => {
        console.log(`Item:  ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ['a','b','c']

showArrayItems(a1);
showArrayItems(a2);

//classes 

class User {
    name 
    role
    isApproved

    constructor(name:string, role:string, isApproved:boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}

const zeca = new User("Zeca", "Admin", true);
console.log(zeca);