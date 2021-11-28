/**
 * CONTAINS
 * -1 si needle ne se trouve pas dans haystack à partir de startIndex
 * l’indice où se trouve le premier needle dans haystack à partir de startIndex
 * Il doit être possible d’appeler la fonction sans donner de troisième argument. Dans ce cas, on commencera à l’indice zéro.
 */

/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @param {number} startIndex 
 * @returns 
 */
 function contains(haystack, needle, startIndex=0) {
    if(startIndex < 0 || startIndex > haystack.length || needle.length + startIndex > haystack.length) {
        return -1;
    }

    for(const i in needle) {
        if(haystack[startIndex + parseInt(i)] != needle[i]) {
            return false;
        }
    }

    return true;
}


    console.log(contains("haystack", "stack", 3));
    console.log(contains("bullshit", "bull"));
    console.log(contains("bullshit", "shit", 1));
