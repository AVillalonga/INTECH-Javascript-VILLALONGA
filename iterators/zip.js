const assert = require('chai').assert;

/**
 * ZIP
 * Implémenter un generator zip(...iterables) qui combine les valeurs de plusieurs iterables une à la fois.
 * Quand l’un des iterable est vide, on arrête de lui demander des valeurs et on continue sur les iterables restants.
 */

function* zip(...iterables) {
    let iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    let result = [];

    while(iterators.length) {
        iteratorsValues = iterators.map(iterator => iterator.next());
        iterators = iterators.filter((iterator, index) => !iteratorsValues[index].done);

        iteratorsValues.forEach((interatorValue, index) => {
            if(!iteratorsValues[index].done)
                result.push(interatorValue.value)
        });
    }

    yield* result;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.deepEqual([...zip("abc", [1, 2, 3])], ['a', 1, 'b', 2, 'c', 3]);
assert.deepEqual([...zip("abcd", "123", "+-")], ['a', '1', '+', 'b', '2', '-', 'c', '3', 'd']);