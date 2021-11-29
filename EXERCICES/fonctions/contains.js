const assert = require('chai').assert;

/**
 * Implémenter une fonction contains(haystack, needle, startIndex) qui doit retourner :
 *      o  -1 si needle ne se trouve pas dans haystack à partir de startIndex
 *      o  l’indice où se trouve le premier needle dans haystack à partir de startIndex
 * Il doit être possible d’appeler la fonction sans donner de troisième argument. Dans ce cas, on commencera à l’indice zéro.
 */

function contains(haystack, needle, startIndex = 0) {
    if (startIndex < 0 || startIndex > haystack.length || needle.length + startIndex > haystack.length)
        return -1;

    for (const i in needle)
        if (haystack[startIndex + parseInt(i)] != needle[i])
            return false;

    return true;
}
