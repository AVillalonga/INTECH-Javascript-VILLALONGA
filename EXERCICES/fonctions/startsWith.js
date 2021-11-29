const assert = require('chai').assert;

/**
 * STARTS WITH
 * Réimplémenter la fonction startsWith(str, start) où str est la chaîne contenant éventuellement start.
 * La fonction devra retourner un tableau de chaînes de caractères parmi lesquelles on ne devra pas retrouver 
 * le chaîne sep (puisqu’elle a servi à faire le découpage et qu’on ne la conserve pas).
 */

function startsWith(str, start) {
    for (let index = 0; index < start.length; index++)
        if (start[index] != str[index])
            return false;
    return true;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(startsWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain"), true);
assert.equal(startsWith("Les ogres c'est comme les oignons.", "Ça schlingue ?"), false);