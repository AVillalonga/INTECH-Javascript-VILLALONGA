const assert = require('chai').assert;

/**
 * INIT WITH
 * Implémentez une fonction initWith(size, f) qui prend en argument la taille du tableau
 * et une fonction responsable de fournir la valeur initiale pour chaque emplacement du tableau nouvellement créé.
 */

function initWith(size, f) {
    return Array
        .apply(null, Array(size))
        .map((v, i) => f(i));
}


const widthZero = () => 0;
const fromZero = index => index;
const from42 = index => 42 + index;
console.log(initWith(5, widthZero));
console.log(initWith(5, fromZero));
console.log(initWith(5, from42));