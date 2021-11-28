const chai = require("chai");

/**
 * SPLIT
 * Réimplémenter la fonction split(str, sep) où str est la chaîne à découper et sep le séparateur.
 * La fonction devra retourner un tableau de chaînes de caractères parmi lesquelles on ne devra pas retourer 
 * le chaîne sep (puisqu’elle a servi à faire le découpage et qu’on ne la conserve pas).
 */

 function split(str, sep) {
    const listResult = [];
    let tmpResult = "";
    let slice = "";
    let inc = 0;

    while(inc < str.length) {
        if(str[inc] === sep[0] && str.length > inc + sep.length) {
            slice = str.slice(inc, inc + sep.length);
            if(slice === sep) {
                str.substring(inc, sep.length);
                listResult.push(tmpResult);
                tmpResult = "";
                inc = inc + sep.length;
            } else {
                tmpResult = tmpResult + sep[0];
                inc = inc + 1;
            }
        } else {
            tmpResult = tmpResult + str[inc];
            inc = inc + 1;
        }
    }
    listResult.push(tmpResult);
    return listResult;
}

(() => {
    chai.assert.equal(split("I'm reading a wooden book.", "oo").toString(), ["I'm reading a w", "den b", "k."].toString());
    chai.assert.equal(split("Bonjour, je m'appelle Jean !", " ").toString(), ["Bonjour,", "je", "m'appelle", "Jean", "!"].toString());
})()

