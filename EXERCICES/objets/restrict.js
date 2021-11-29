
/**
 * RESTRICT
 * Implémentez une fonction restrict(target, keep) qui retire toutes les propriétés de 
 * l’objet target qui n’apparaissent pas dans l’objet de référence keep.
 */

const { assert } = require("chai");

function restrict(target, keep) {
    const find = (property) => Object.getOwnPropertyNames(keep).filter(propertyName => propertyName == property).length > 0;
    Object.getOwnPropertyNames(target).forEach((key) => {
        if (!find(key))
            delete target[key];
    });
    return target;
}

//********************************************************************************
// TESTS
//********************************************************************************

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
assert.equal("vars" in tooMuchConfig, true);
assert.equal("env" in tooMuchConfig, true);

const properConfig = restrict(tooMuchConfig, config);
assert.equal(properConfig === config, false);
assert.equal("vars" in properConfig, false);
assert.equal("env" in properConfig, false);