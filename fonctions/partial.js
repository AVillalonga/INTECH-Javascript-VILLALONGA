const assert = require('chai').assert;

/**
 * PARTIAL
 * Créer une fonction partial qui prend en argument une fonction à appliquer partiellement et l’argument qui sera appliqué.
 * La fonction devra en retourner une nouvelle qui ne nécéssitera plus que le nombre d’argument restant par rapport à la fonction d’origine.
 */

function partial(callback, ...args) {
    return callback.bind(null, ...args);
}

const sampleLambda = (x, y, z) => x * (y - z);

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(partial(sampleLambda, 2)(5, 3), 4);