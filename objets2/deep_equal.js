function deepEqual(a1, a2) {
    if(a1.length != a2.length) return false
    for (let index = 0; index < a1.length; index++) {
        const el1 = a1[index];
        const el2 = a2[index];

        if (Array.isArray(el1) && Array.isArray(el2)) {
            if(deepEqual(el1, el2) == false) return false
        } else if (el1 != el2) {
            return false
        }
    }
    return true
}

const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
console.log(a1 === a2); // => false
console.log(deepEqual(a1, a2)); // => true