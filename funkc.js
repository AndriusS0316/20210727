"use strict";

var vardas = "Jonas";
var pavarde = "Jonaitis";

let zmogus = {
    vardas: vardas,
    pavarde: pavarde,
    labas() {
        console.log("Labas", this.vardas, this.pavarde);
    }
};

// console.log(this);
// console.log(global);
zmogus.labas();