const assert = require('chai').assert;

/**
 * CONTAINS
 * Implémenter une fonction contains(haystack, needle, startIndex) qui doit retourner :
 *      o  -1 si needle ne se trouve pas dans haystack à partir de startIndex
 *      o  l’indice où se trouve le premier needle dans haystack à partir de startIndex
 * Il doit être possible d’appeler la fonction sans donner de troisième argument.
 * Dans ce cas, on commencera à l’indice zéro.
 */

function contains(haystack, needle, startIndex = 0) {
    if (startIndex < 0 || needle.length - 1 + startIndex > haystack.length - 1)
        return -1;

    for (const iH in haystack) {
        let inc = 0;

        if (parseInt(iH) >= startIndex) {
            for (const iN in needle) {
                haystackIndex = parseInt(iH) + parseInt(iN);
                if (haystack[haystackIndex] && haystack[haystackIndex] == needle[parseInt(iN)])
                    inc = inc + 1;
            }
        }

        if (inc == needle.length)
            return iH - startIndex;
    }
    return -1;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(contains("haystack", "stack", 0), 3);
assert.equal(contains("bullshit", "bull"), 0);
assert.equal(contains("bullshit", "shit", 3), 1);
assert.equal(contains("bullshit", "bull", 3), -1);