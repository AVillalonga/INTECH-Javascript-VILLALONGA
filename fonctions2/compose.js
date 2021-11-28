const chai = require("chai");

function compose(f, g) {
    return (nb) => {
        return f(g(nb))
    }
}

const increment = x => x + 1;
const double = y => y * 2;
const timesTwoPlusOne = compose(increment, double);
chai.assert.equal(timesTwoPlusOne(5), 11);