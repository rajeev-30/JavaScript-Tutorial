// console.log(typeof(a));
let a = "String";
let b = "Str";
console.log(a[1]);
console.log(`String length: ${a.length}`); // template literals
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.slice(1,3));
console.log(a.replace('St','333'));
console.log(a.concat(b,"new","S"));

let x = "   whitespaces   ";
console.log(x.trim())
console.log(a.startsWith('St'));
console.log(a.startsWith('G'));