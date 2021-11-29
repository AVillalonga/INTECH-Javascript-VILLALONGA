const assert = require('chai').assert;

/**
 * FOR EACH OWN PROPERTY
 * Augmentez les capacités de tous les objets à pouvoir appeler une méthode forEachOwnProperty(f)
 * qui se comporte comme un forEach mais qui parcourt les propriétés propres d’un objet à la place.
 */

 function forEachOwnProperty(callback) {
    Object.entries(this).forEach((v) => {
        callback(v[0]);
    });
}

Object.defineProperty(Object.prototype, 'forEachOwnProperty', { value: forEachOwnProperty });

//********************************************************************************
// TESTS
//********************************************************************************

const o1 = { a: 1 };
const o2 = Object.create(o1);
o2.b = 2;
o2.c = 3;
const props = [];
o2.forEachOwnProperty(prop => props.push(prop));

assert.equal(props[0], 'b');
assert.equal(props[1], 'c');