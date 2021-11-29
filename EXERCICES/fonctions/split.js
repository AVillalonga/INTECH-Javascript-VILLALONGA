const assert = require('chai').assert;

/**
 * SPLIT
 * Réimplémenter la fonction split(str, sep) où str est la chaîne à découper et sep le séparateur.
 * La fonction devra retourner un tableau de chaînes de caractères parmi lesquelles on ne devra pas retourer 
 * le chaîne sep (puisqu’elle a servi à faire le découpage et qu’on ne la conserve pas).
 */

function split(str, sep) {
    const result = [];

    let tmp = '';
    let slice = '';
    let inc = 0;

    while(inc < str.length) {
        if(str[inc] === sep[0] && str.length > inc + sep.length) {
            slice = str.slice(inc, inc + sep.length);
            if(slice === sep) {
                str.substring(inc, sep.length);
                result.push(tmp);
                tmp = "";
                inc = inc + sep.length;
            } else {
                tmp = tmp + sep[0];
                inc = inc + 1;
            }
        } else {
            tmp = tmp + str[inc];
            inc = inc + 1;
        }
    }
    result.push(tmp);
    return result;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(split("Bonjour, je m'appelle Jean !", " ").toString(), ["Bonjour,", "je", "m'appelle", "Jean", "!"].toString());
assert.equal(split("I'm reading a wooden book.", "oo").toString(), ["I'm reading a w", "den b", "k."].toString());
