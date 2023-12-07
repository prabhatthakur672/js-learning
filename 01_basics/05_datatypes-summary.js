//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++Stack(Primitive) & Heap(Non-Primitive)++++++++++++++

//Stack
let a=20;
let a=b;
b=10;
console.log(a)  // out-20
console.log(b) // out-10


//Heap
let userOne={
    email:'pt672@gmail.com'
};

let userTwo=userOne;
userTwo.email='iam123@outlook'

console.log(userOne)  // out-iam123@outlook
console.log(userTwo) // out-iam123@outlook

