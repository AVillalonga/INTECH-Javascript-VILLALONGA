const assert = require('chai').assert;

/**
 * DIFF
 * Implémenter une fonction diff(source, propertyNames) qui retourne un nouvel objet à partir de celui source,
 * amputé des propriétés données par propertyNames.
 */

function diff(source, propertyNames) {
    const result = {};
    const find = (property) => Object.getOwnPropertyNames(propertyNames).filter(propertyName => propertyName == property).length > 0;
    Object.getOwnPropertyNames(source).forEach((key) => {
        if (!find(key))
            result[key] = source[key];
    });

    return result;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(Object.keys(diff({ r: 0, g: 0, b: 0, a: 0 }, { a: null })).length, 3);
assert.equal(diff({ r: 0, g: 0, b: 0, a: 0 }, { a: null }).a, undefined);