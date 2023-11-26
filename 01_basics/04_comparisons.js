// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   //out-false
console.log(null == 0);  //out-false
console.log(null >= 0);  //out-true
//NOTE- == and >,<,>=,<= works diffrently.In >,<,>=,<= null change in 0 but in == ,null not change

console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined < 0);

//== check only value
// === strict check- check both value and datatype

console.log("2" === 2); //out-false