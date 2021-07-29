function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this. turis = turis;
    this.kiekis = 0;
}

let p1 = new Puodukas ("baltas", 250);
console.log(p1);
let p2 = new Puodukas ("rudas", 300);

console.log(p1, p2);


// let o = {}; //tas pats, kas zemesneje eiluteje.

// let o1 = new Object(); //tas pats, kas aukstesneje eiluteje.

// function suma (a, b) {
//     return a + b;
// }

// let s = new suma();

// console.log(s);




// console.log("----------------");

// let puodukas = {
//     spalva: "baltas",
//     turis: 250,
//     kiekis: 0
// };

// let kitasPuodukas = {
//     spalva: "rudas",
//     turis: 300,
//     kiekis: 0
// };

// console.log(puodukas, kitasPuodukas);



// let o = {};

// console.log(o.labas);

// o.labas = "hello";

// console.log(o.labas);

// o.labas = "hi";

// console.log(o.labas);

// console.log(o);

// o.savybe = "reiksme";

// console.log(o);

// let pav = "labas";

// console.log(o[pav]);

// console.log(o["savybe"]);

// o.kitaSavybe = 654;

// console.log(o);

// delete o.savybe;

// console.log(o);

// delete o["kitaSavybe"];

// console.log(o);