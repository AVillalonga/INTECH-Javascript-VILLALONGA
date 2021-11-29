const assert = require('chai').assert;

/**
 * DEEP EQUAL
 * Implémentez une fonction deepEqual(a1, a2) qui teste si deux tableaux sont égaux “en profondeur”.
 * Vous ne devrez pas utiliser les fonctions JSON.parse et JSON.stringify dans votre implémentation.
 */

function deepEqual(a1, a2) {
    return a1.filter((v, i) => {
        return Array.isArray(v) ? deepEqual(v, a2[parseInt(i)]) : v == a2[i];
    }).length === a1.length;
}

//********************************************************************************
// TESTS
//********************************************************************************

const stringify = v => JSON.parse(JSON.stringify(v));
const v = [1,2,[3,4],5];
deepEqual(v, stringify(v));