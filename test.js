/*
undefined
number
boolean
string
object
*/



let n = null;

console.log(typeof n);

let undef = undefined;

console.log(typeof undef);

let obj = {};

console.log(typeof obj);

let m = [1, 2, 3, 4];

console.log(typeof m);

let sk = 1;
let sk1 = NaN;
let sk2 = Infinity;

console.log(typeof sk, typeof sk1, typeof sk2);

let str = "tekstas";

console.log(typeof str);

let artiesa = true;

console.log(typeof artiesa);

let f = () => {};

console.log(typeof f);



let o1 = {
    pirma: 1,
    antra: 2
}; 

let o2 = o1;

o1.trecia = 3;
o1.pirma = 11;

console.log(o2);