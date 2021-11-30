const assert = require('chai').assert;

/**
 * FILTER
 * Implémenter un iterator filter(iterable, f) qui retournera uniquement les éléments de iterable qui passent 
 * le test de la fonction f.
 */

function filter(iterable, f) {
    const len = iterable.length
    let i = 0
    return { 
        next : function(){
            let result = null;
            while(i < len) {
                result = f(iterable[i]) ? {value:iterable[i], done:false} : null;
                i++;
                if(result != null) return result;
            }
            return { value: -1, done: true };
        }
    }
}

//********************************************************************************
// TESTS
//********************************************************************************

const iterator = filter("hello", v => "aeiouy".includes(v));
assert.equal(iterator.next().value, 'e');
assert.equal(iterator.next().value, 'o');
assert.equal(iterator.next().done, true);