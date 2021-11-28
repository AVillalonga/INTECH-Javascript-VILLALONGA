function restrict(target, keep) {
    const res = {}
    Object.keys(keep).forEach(key => {
        res.key = target[key]
    });
    return res
}



const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
console.log("vars" in tooMuchConfig); // => true
console.log("env" in tooMuchConfig); // => true

const properConfig = restrict(tooMuchConfig, config);
console.log(properConfig === config); // => false
console.log("vars" in properConfig); // => false
console.log("env" in properConfig); // => false