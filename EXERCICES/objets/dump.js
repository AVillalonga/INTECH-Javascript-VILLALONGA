const assert = require('chai').assert;

/**
 * DUMP
 * Créer une fonction qui prend un objet en paramètre et qui retourne une chaîne de caractères représentant l’objet avec ses valeurs.
 * Les valeurs chaînes de caractères seront entourées avec des guillemets "".
 * Les tableaux seront entourés de crochets []. Etc…
 */

function dump(obj) {
    const entries = Object.entries(obj);
    const lastKey = entries[entries.length - 1][0];
    const comma = (curr) => curr == lastKey ? "" : ",";

    let result = "";
    for (let [key, value] of entries) {
        value = typeof value == "string" ?
            `"${value}"` :
            Array.isArray(value) ? `[${value}]` : value;
        result += ` ${key}: ${value}` + comma(key);
    }
    return `{${result} }`;
}

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(
    dump({ firstname: 'Alan', lastname: 'Turing', birthday: [1921, 6, 23] }), 
    '{ firstname: "Alan", lastname: "Turing", birthday: [1921,6,23] }'
);