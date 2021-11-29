const assert = require('chai').assert;

/**
 * PADLEFT
 * Implémenter la fonction padLeft(char, str, quantity) pour ajouter le caractère donné à la chaîne donnée.
 */

const padLeft = (char, str, quantity) => char.repeat(quantity) + str;
const padZeros = padLeft.bind(null, '0');
const padSpaces = padLeft.bind(null, ' ');

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(padLeft("0", "123", 6),"000000123");
assert.equal(padZeros("11011", 8), "0000000011011");
assert.equal(padSpaces("11011", 8), "        11011");

