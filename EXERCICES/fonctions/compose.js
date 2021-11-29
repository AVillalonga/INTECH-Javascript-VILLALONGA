const assert = require('chai').assert;

/**
 * COMPOSE
 * Créer une fonction compose 
 *  (1) qui retourne une fonction 
 *  (2) qui est capable, lorsqu’on l’appelle, d’appliquer à la suite deux fonction f et g.
 * On appelle la fonction (2) avec une première valeur (A). 
 * La fonction (2) appelle la fonction g avec la valeur (A) comme argument. 
 * La fonction (2) récupère la valeur de retour de g (B) et appelle f avec comme argument.
 * La fonction (2) retourne ensuite la valeur de retour de f (C) comme sa propre valeur de retour.
 */

function compose(f, g) {
    return x => f(g(x));
}

const increment = x => x + 1;
const double    = x => x * 2;
const square    = x => x ** 2;

const doubleAndIncrement = compose(increment, double);
const squareAndIncrement = compose(increment, square);

//********************************************************************************
// TESTS
//********************************************************************************

assert.equal(doubleAndIncrement(2), 5);
assert.equal(squareAndIncrement(5), 26);