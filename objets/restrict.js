function restrict(target, keep) {
    return Object.keys(target)
                 .reduce((accumulator, key) => {
        for(const kv of Object.keys(keep)) {
            if (key === kv) {
                accumulator[key] = target[key];
            }
        }
        return accumulator;
    }, {});
}

(() => {
    const config = { user: "user", pass: "pass" };
    const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
    console.log("vars" in tooMuchConfig); // => true
    console.log("env" in tooMuchConfig); // => true
    
    const properConfig = restrict(tooMuchConfig, config);
    console.log(properConfig === config); // => false
    console.log("vars" in properConfig); // => false
    console.log("env" in properConfig); // => false
})();