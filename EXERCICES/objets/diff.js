const assert = require('chai').assert;

/**
 * DIFF
 * Implémenter une fonction diff(source, propertyNames) qui retourne un nouvel objet à partir de celui source,
 * amputé des propriétés données par propertyNames.
 */

function diff(source, propertyNames) {
    return Object.keys(source).reduce((accumulator, key) => {
        for (const deletedKey of Object.keys(propertyNames))
            if (key !== deletedKey)
                accumulator[key] = source[key];
        return accumulator;
    }, {});
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(Object.keys(diff({ r: 0, g: 0, b: 0, a: 0 }, { a: null })).length, 3);
assert.equal(diff({ r: 0, g: 0, b: 0, a: 0 }, { a: null }).a, undefined);