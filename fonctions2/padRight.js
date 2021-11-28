const chai = require("chai");

/**
 * PADRIGHT
 * Réimplémenter les fonctions padLeft(char, str, quantity) et padRight(char, str, quantity) pour ajouter 
 * le caractère donné à la chaîne donnée selon la quantité donnée.
 */

function padRight(char, str, quantity) {
    
    let toPad = ""
    for (let q = 0; q < quantity; q++) {
        toPad += char
    }

    return str + toPad
}

const padZeros = padRight.bind(null, "0");
const padSpaces = padRight.bind(null, " ");

chai.assert.equal(padRight(" ", "45", 8), "45        ");
chai.assert.equal(padZeros("11011", 8), "1101100000000");
chai.assert.equal(padSpaces("11011", 8), "11011        ");
