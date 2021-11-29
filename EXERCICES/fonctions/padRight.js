const assert = require('chai').assert;

/**
 * PADRIGHT
 * Implémenter la fonction padRight(char, str, quantity) pour ajouter le caractère donné à la chaîne donnée.
 */

const padRight = (char, str, quantity) => str + char.repeat(quantity);
const padZeros = padRight.bind(null, '0');
const padSpaces = padRight.bind(null, ' ');

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(padRight(" ", "45", 8), "45        ");
assert.equal(padZeros("11011", 8), "1101100000000");
assert.equal(padSpaces("11011", 8), "11011        ");
