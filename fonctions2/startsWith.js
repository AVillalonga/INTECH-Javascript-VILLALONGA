const chai = require("chai");
/**
 * START WITH
 * Réimplémenter la fonction startsWith(str, start) où str est la chaîne contenant éventuellement start.
 */
function startWith(str, start) {
    for (let index = 0; index < start.length; index++) {
        if (start[index] != str[index]) {
            return false
        }
    }
    return true
}

chai.assert.equal(startWith("Et demain matin, j'te fais des gaufres au sucre !!", "Et demain"), true);
chai.assert.equal(startWith("Les ogres c'est comme les oignons.", "Ça schlingue ?"), false);