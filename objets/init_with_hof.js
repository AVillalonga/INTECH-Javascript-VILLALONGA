const assert = require('chai').assert;

/**
 * INIT WITH HOF
 * Implémentez les fonctions initWithZeros(size) et initFrom(size, nb) en redéfinissant la fonction initWith comme étant une higher-order function.
 */

function initWith(f) {
    return function (size, nb) {
        return !nb ?
            Array.apply(null, Array(size))
                .map((v, i) => f()) :
            Array.apply(null, Array(size))
                .map((v, i) => f(i, nb));
    }
}

const initWithZeros = initWith(() => 0);
const initFrom = initWith((index, initial) => initial + index);

//********************************************************************************
// TESTS
//********************************************************************************

const zeros = initWithZeros(3);
zeros.forEach(e => assert.equal(e, 0));
assert.equal(zeros.length, 3);

const from42 = initFrom(5, 42);
from42.forEach((e,i) => assert.equal(e, 42 + i));
assert.equal(from42.length, 5);