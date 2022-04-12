// Index pair values in js.

const arr = [];
console.log(arr);

let size = 3;
const arr2 = new Array(size).fill(0);
console.log(arr2);

const arr3 = new Array(1,2,3,4,5);
console.log(arr3);

// Hoisting
// let x = 100;

// function fun(){
//     x = i = 10;
// }
// fun();
// console.log(x,i);
// 10 10
let x = 100;

function fun(){
   var x = i = 10;
}
fun();
console.log(x,i);

n = 100;
console.log(n)